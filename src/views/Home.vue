<template>
  <section class="hero is-fullheight">
    <div class="hero-body is-small">
      <div class="container is-fluid">
        <div class="columns is-vcentered is-fullheight">
          <div class="column is-5">
            <div class="columns is-multiline">
              <Team :ref="`t-${i}`" v-for="(team, teamName, i) in teams" :data="team" :teamName="teamName" :key="i"/>
            </div>
          </div>
          <div class="column is-6 is-offset-1">
            <div class="columns is-multiline is-vcentered is-fullheight">
              <Status :ref="`s-${i}`" v-for="(team, teamName, i) in teams" :data="team" :key="i" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <canvas ref="c"></canvas>
  </section>
</template>

<script>
import Team from '@/components/Team.vue'
import Status from '@/components/Status.vue'

export default {
  name: 'home',
  components: {
    Team,
    Status
  },

  data() {
    return {
      ctx: null,
      teams: {
        'Core services': [
          { name: 'service1', running: true },
          { name: 'service2' },
          { name: 'service2' }
        ],
        'Euro': [
          { name: 'service1' },
          { name: 'service1', running: true },
          { name: 'service2' },
          { name: 'service2' }
        ],
        'Platform': [
          { name: 'service1' },
          { name: 'service2' }
        ],
        'International': [
          { name: 'service1' },
        ],
        'Uk': [
          { name: 'service1' },
          { name: 'service2' },
          { name: 'service2' }
        ],
      }
    }
  },
  mounted() {
    this.$refs.c.width = window.innerWidth
    this.$refs.c.height = window.innerHeight
    this.ctx = this.$refs.c.getContext('2d')

    this.tick()
  },

  methods: {
    getDrawCoord() {
      let coord = []

      for (let i = 0; i < Object.keys(this.teams).length; i += 1) {
        let teamSquareCoord = this.$refs[`t-${i}`][0].$el.getBoundingClientRect()
        let statusSquareCoord = this.$refs[`s-${i}`][0].$el.getBoundingClientRect()


        let teamSquareCenterY = teamSquareCoord.top + teamSquareCoord.height / 2
        let teamSquareRightX = teamSquareCoord.left + teamSquareCoord.width

        let statusSquareCenterY = statusSquareCoord.top + statusSquareCoord.height / 2
        let statusSquareRightX = statusSquareCoord.left

        coord.push({
          from: { x: teamSquareRightX, y: teamSquareCenterY },
          to: { x: statusSquareRightX, y: statusSquareCenterY }
        })
      }

      return coord
    },
    render() {
      this.ctx.beginPath()
      this.ctx.lineWidth = 5
      this.ctx.lineJoin = 'round'
      this.ctx.lineCap = 'round'
      for (let line of this.getDrawCoord()) {
        if (line.to.x !== 0) {
          this.ctx.moveTo(line.from.x, line.from.y)
          this.ctx.lineTo(line.from.x + 30, line.from.y)
          this.ctx.lineTo(line.to.x - 30, line.to.y)
          this.ctx.lineTo(line.to.x, line.to.y)
        }
      }
      this.ctx.stroke()
    },
    tick() {
      window.requestAnimationFrame(this.tick.bind(this))
      this.ctx.clearRect(0, 0, this.$refs.c.width, this.$refs.c.height)
      this.render()
    }
  }
}
</script>

<style lang="scss">
.hero-body {
  position: relative;
  z-index: 2;
}
canvas {
  position: absolute;

  left: 0;
  top: 0;

  z-index: 1;
}
</style>
