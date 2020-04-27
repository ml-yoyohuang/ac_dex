<script>
import Vuex from 'vuex';
import { fossils } from './data';

interface Data {

}
export default {
  components: {
  },
  props: {},
  data: (): Data => ({
    fossils,
    checked: [0],
    filter: 0,
  }),
  computed: {
    ...Vuex.mapState([]),
    ...Vuex.mapGetters([]),
    imagesPath() {
      // return this.fossils.map((id) => require(`img/fossils/${id}.png`));
      return this.fossils.map((item, index, array) => require(`img/fossils/${item.id}.png`));
    },
    io() {
      const obj = {
        fossil: this.checked,
      };
      return obj;
    },
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    ...Vuex.mapMutations([]),
    ...Vuex.mapActions([]),
    isChecked(id) {
      return this.checked.indexOf(id) > -1;
    },
  },
};
</script>

<template lang="pug">
.fossil.page-container
  .h1 化石圖鑑
  .filter
    .p 篩選：
    .block-form
      label.module-radio
        input(type="radio" name="filter0" v-model="filter" :value="0")
        i.module-symbol
        span.p 顯示全部
    .block-form
      label.module-radio
        input(type="radio" name="filter1" v-model="filter" :value="1")
        i.module-symbol
        span.p 只顯示沒有的
    .block-form
      label.module-radio
        input(type="radio" name="filter2" v-model="filter" :value="2")
        i.module-symbol
        span.p 只顯示有的
  .row.gutter-10(:class="`filter${filter}`")
    .col.col-6.col-sm-4.col-md-3.col-lg-2.align-items-stretch(v-for="(item, index) in fossils" :class="{'is-checked' : isChecked(item.id)}")
      .col-inner.text-center
        .square
          img.d-block.w-100(:src="imagesPath[index]")
        .p {{item.id}}. {{item.name}}
        .p ${{item.price}}
        input(type="checkbox" :id="`fossil${item.id}`" :name="`fossil${item.id}`" :value="item.id" v-model="checked")
  .p.textarea {{io}}
</template>

<style lang="stylus">
body
  background-color rgb(189,221,200)
  color rgb(110, 60, 50);
.page-container
  padding 2em 1em 6em 1em
.filter1
  .col
    display block
  .col.is-checked
    display none
.filter2
  .col
    display none
  .col.is-checked
    display block
.fossil
  .h1
    font-size 28px
    font-weight bold
  .p
    font-size 12px
    line-height 1.2
    margin 0.5em 0
  .textarea
    margin 1em 0
    padding 1em
    background-color white
  .filter
    margin 1em 0
    padding 1em
    background-color #cfecfe
  .block-form
    padding-top 0.25em
  .square
    position relative
    &::before
      display block
      content ''
      position relative
      padding-top 100%
    img
      position absolute
      top 0
      left 0
      height 100%
      object-fit: contain;
  .col
    margin-bottom 10px
  .col-inner
    position relative
    background-color #fff9e2
    padding 0.5em
    height 100%
    box-shadow: 0px 0px 10px rgba(136, 201, 161, .8);
    input
      position absolute
      display block
      z-index 9
      width 100%
      height 100%
      opacity 0
      top 0
      left 0
      cursor pointer
    .square
      margin-bottom 1em
  .is-checked
    .col-inner
      background-color #ffeab4
      &::after
        content ''
        display block
        position absolute
        top 0
        left 0
        z-index 2
        width 100%
        height 100%
        border 5px solid #f8b75e
</style>
