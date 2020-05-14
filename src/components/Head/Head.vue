<script>
// interface Props { }
interface Data {

}
export default {
  name: 'Head',
  components: {
  },
  props: {},
  data: ():Data => ({
  }),
  computed: {
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
  },
};
</script>

<template lang="pug">
.head.p-3
  router-link.button(to="/") 化石圖鑑
  router-link.button(to="/music") 音樂圖鑑
  router-link.button(to="/diy") DIY圖鑑
</template>

<style lang="stylus">
.head
  // display: none
  .button
    margin-bottom 0.5em
a.button
  color white
</style>
