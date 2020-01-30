<template>
  <section class="hero is-fullheight">
    <div class="hero-body is-small">
      <div class="container is-fluid">
        <div class="columns is-vcentered is-fullheight">
          <div ref="teams" class="column is-5">
            <div class="columns is-multiline">
              <Team :ref="`t-${i}`" v-for="(team, teamName, i) in teams" :data="team" :teamName="teamName" :key="teamName"/>
            </div>
          </div>
          <div class="column is-6 is-offset-1">
            <transition-group name="slide-fade" tag="div" :class="'columns is-multiline is-vcentered is-fullheight'">
              <Status :ref="`s-${i}`" v-for="(team, teamName, i) in teams"
                v-if="team.find(t => t.deploymentInProgress)"
                :data="team" :key="`${i}-d`"
              />
            </transition-group>
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
import mock from '@/services/mock.js'

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
      }
    }
  },
  created() {
    this.mapDataToTeams()
  },
  mounted() {
    this.$refs.c.width = document.body.scrollWidth
    this.$refs.c.height = document.body.scrollHeight
    this.ctx = this.$refs.c.getContext('2d')

    this.tick()

    setInterval(this.fetchData.bind(this), 5000)
  },

  methods: {
    fetchData() {
      this.mapDataToTeams()

      const i = Math.floor(Math.random() * Object.keys(this.teams).length)
      let team = this.teams[Object.keys(this.teams)[i]][Math.floor(Math.random() * this.teams[Object.keys(this.teams)[i]].length)]
      team.deploymentInProgress === true ? team.deploymentInProgress = false : team.deploymentInProgress = true
      this.updateCanvasSize()
    },

    mapDataToTeams() {
      let mapped = {}

      this.$refs.teams.scrollIntoView({ behavior: 'smooth', block: 'center' })

      mock.slice().forEach((e) => {
        if (!mapped[e[0].team]) {
          mapped[e[0].team] = e
        }
      })

      this.teams = mapped
    },

    updateCanvasSize() {
      this.$refs.c.width = document.body.scrollWidth
      this.$refs.c.height = document.body.scrollHeight
    },
    getDrawCoord() {
      let coord = []

      for (let i = 0; i < Object.keys(this.teams).length; i += 1) {
        if (this.$refs[`s-${i}`] && this.$refs[`s-${i}`][0]) {
          let teamSquareCoord = this.$refs[`t-${i}`][0].$el.getBoundingClientRect()
          let statusSquareCoord = this.$refs[`s-${i}`][0].$el.getBoundingClientRect()


          let teamSquareCenterY = teamSquareCoord.y + window.scrollY + teamSquareCoord.height / 2
          let teamSquareRightX = teamSquareCoord.x + teamSquareCoord.width

          let statusSquareCenterY = statusSquareCoord.y + window.scrollY + statusSquareCoord.height / 2
          let statusSquareRightX = statusSquareCoord.x

          coord.push({
            from: { x: teamSquareRightX, y: teamSquareCenterY },
            to: { x: statusSquareRightX, y: statusSquareCenterY }
          })
        }
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
  },

  computed: {
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

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px) scale(.5);
  height: 0;
  padding: 0;
  opacity: 0;
}
</style>
