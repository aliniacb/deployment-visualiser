<template>
  <div class="column is-12">
    <div class="box service-status">
      <div class="columns is-multiline">
        <div v-for="(event, i) in pendingEvents" :key="i" class="column is-12">
          <div class="level">
            <div class="level-left">
              <p>{{event.name}}</p>
            </div>
            <div class="level-right">
              <p>Deployments: {{event.numDeployments}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Status',
  props: [ 'data' ],
  methods: {

  },

  computed: {
    pendingEvents() {
      return this.data.filter(e => e.deploymentInProgress)
    }
  }
}
</script>

<style lang="scss">
  .service-status {
    box-shadow: -5px -2px 20px 0px rgba(0, 0, 0, 0.1);
  }
</style>
