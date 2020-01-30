<template>
  <div class="column is-12">
    <div class="box team-row">
      <span class="color" :style="`background: ${getRandomColor()}`"></span>
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <h1 class="title is-3 has-text-centered is-capitalized">{{ teamName }}</h1>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <h3 :class="{'has-text-info': updating > 0, 'has-text-success': updating === 0 }" class="title is-5">
              {{ message }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
  props: [ 'data', 'teamName' ],

  methods: {
    getRandomColor() {
      return `hsla(${Math.random() * 360}, 90%, 60%, 1)`
    }
  },

  computed: {
    updating() {
      return this.data.filter(e => e.deploymentInProgress).length
    },

    message() {
      return this.updating > 0 ? `Deploying ${this.updating} ${this.updating > 1 ? 'services' : 'service'}` : 'All services running'
    }
  }
}
</script>

<style lang="scss">
.team-row {
  position: relative;

  padding-left: 40px;

  .color {
    position: absolute;

    top: 0;
    left: 0;

    width: 20px;
    height: 100%;
  }
}
.box {
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.05), 0px 50px 26px -25px rgba(0, 0, 0, 0.1);
}
</style>
