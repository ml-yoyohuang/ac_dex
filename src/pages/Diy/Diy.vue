<script>
import Diy from '@/containers/Diy/Diy.vue';
import Head from '@/components/Head/Head.vue';

export default {
  name: 'Home',
  components: {
    Diy,
    Head,
  },
};
</script>

<template lang="pug">
.page-home
  Head
  Diy
</template>

<style lang="stylus">
</style>
