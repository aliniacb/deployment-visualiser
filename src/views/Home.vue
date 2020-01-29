<template>
  <section class="hero is-fullheight">
    <div class="hero-body is-small">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-5">
            <div class="columns is-multiline">
              <Team v-for="(team, teamName, i) in teams" :data="team" :teamName="teamName" :key="i"/>
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

export default {
  name: 'home',
  components: {
    Team
  },

  data() {
    return {
      teams: {
        'Core services': [
          { name: "service1" },
          { name: "service2" },
          { name: "service2" }
        ],
        'Euro': [
          { name: "service1" },
          { name: "service2" },
          { name: "service2" }
        ],
        'Platform': [
          { name: "service1" },
          { name: "service2" }
        ],
        'International': [
          { name: "service1" },
        ],
        'Uk': [
          { name: "service1" },
          { name: "service2" },
          { name: "service2" }
        ],
      }
    }
  },
  mounted() {
    this.$refs.c.width = window.innerWidth
    this.$refs.c.height = window.innerHeight
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
