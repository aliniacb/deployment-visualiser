<template>
  <div :class="{'is-hidden': !hasPendingEvents }" class="column is-12">
    <div :class="{'shrinked': !hasPendingEvents }" class="box service-status">
      <h4 class="title is-4 has-text-centered">Status updates</h4>
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
    hasPendingEvents() {
      return this.data.find(e => e.running)
    }
  }
}
</script>

<style lang="scss">
  .service-status {
    height: 300px;
    box-shadow: -5px -2px 20px 0px rgba(0, 0, 0, 0.1);
    transform: scale(1);

    transition: all .3s ease;

    &.shrinked {
      height: 0;

      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
      transform: scale(0);
    }
  }
</style>
