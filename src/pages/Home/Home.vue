<script>
import Fossil from '@/containers/Fossil/Fossil.vue';
import Head from '@/components/Head/Head.vue';

export default {
  name: 'Home',
  components: {
    Fossil,
    Head,
  },
};
</script>

<template lang="pug">
.page-home
  Head
  Fossil
</template>

<style lang="stylus">
</style>
