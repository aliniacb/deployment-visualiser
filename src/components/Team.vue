<template>
  <div class="column is-12">
    <div class="box team-row" :class="{'active': updating > 0}">
      <span class="color" :class="`color-${teamName}`"></span>
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

    background: #ddd;

    &-core {
      background: #ff6262;
    }
    &-uk {
      background: #62ff7f;
    }
    &-euro {
      background: #3dbfa8;
    }
    &-indirect {
      background: #893dbf;
    }
    &-platform {
      background: #bf3d6b;
    }

    &:before {
      content: '';
      display: block;

      position: absolute;

      width: 100%;
      height: 100%;

      left: 0;
      top: 0;

      box-shadow: 0 0 0 rgba(100, 200, 0, 1);
    }

  }
  &.active {
    .color {
      &:before {
        animation: pulse 2s infinite;
      }
    }
  }
}
.box {
  position: relative;
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.05), 0px 50px 26px -25px rgba(0, 0, 0, 0.1);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(80, 80, 80, .5);
  }
  70% {
    box-shadow: -50px 0 50px 0px rgba(100, 200, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(100, 200, 0, 0);
  }
}
</style>
