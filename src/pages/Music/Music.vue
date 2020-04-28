<script>
import Music from '@/containers/Music/Music.vue';
import Head from '@/components/Head/Head.vue';

export default {
  name: 'Home',
  components: {
    Music,
    Head,
  },
};
</script>

<template lang="pug">
.page-home
  Head
  Music
</template>

<style lang="stylus">
</style>
