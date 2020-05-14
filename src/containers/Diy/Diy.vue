<script>
import Vuex from 'vuex';
import { types, diys } from './data';

interface Data {

}
export default {
  components: {
  },
  props: {},
  data: (): Data => ({
    diys,
    types,
    checked: [0],
    filter: 0,
    showType: 0,
    showImg: true,
    showPrice: false,
    showImport: false,
    importData: '',
    importMsg: '',
  }),
  computed: {
    ...Vuex.mapState([]),
    ...Vuex.mapGetters([]),
    // imagesPath() {
    //   return this.cds.map((item) => require(`img/diys/${item.id}.png`));
    // },
    io() {
      const obj = {
        diy: this.checked.sort((a, b) => a - b),
      };
      return obj;
    },
    checkedItems() {
      const found = this.diys.filter((element) => this.checked.indexOf(element.id) > -1);
      return found.sort((a, b) => a.id - b.id);
    },
    notCheckedItems() {
      const found = this.diys.filter((element) => this.checked.indexOf(element.id) === -1);
      return found.sort((a, b) => a.id - b.id);
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
    importMethod(str) {
      let obj = '';
      const vm = this;
      try {
        obj = JSON.parse(str);
      } catch (e) {
        this.importMsg = '資料有誤';
      }

      if (typeof obj === 'object') {
        this.importMsg = '匯入完成';
        this.checked = obj.diy;
        window.setTimeout(() => {
          vm.showImport = false;
          vm.importMsg = '';
          vm.importData = '';
        }, 1000);
      } else {
        this.importMsg = '資料有誤';
      }
    },
  },
};
</script>

<template lang="pug">
.diy.page-container
  .h1 DIY圖鑑
  .h6 點擊方塊勾選已有的DIY
  .text-right
    .button(@click="showImport=!showImport" :class="{'is-active': showImport}") 匯入模式
  .block-import(v-if="showImport")
    textarea.textarea(v-model="importData")
    .text-center
      .button(@click="showImport=!showImport") 取消
      .button(@click="importMethod(importData)") 匯入
      .p.msg.my-3.p-2(v-if="importMsg!==''") {{importMsg}}
  template(v-else)
    .filter
      .p 顯示分類：
      .select-wrap
        select.select(v-model="showType")
          option(v-for="(item, index) in types" :value="item.id") {{item.name}}
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
      //- .block-form
        label.module-radio
          input(type="checkbox" name="showimg" v-model="showImg")
          i.module-symbol
          span.p 顯示圖片
      //- .block-form
        label.module-radio
          input(type="checkbox" name="showprice" v-model="showPrice")
          i.module-symbol
          span.p 顯示價格
    .row.gutter-10(:class="`filter${filter}`")
      .col.col-6.col-sm-4.col-md-3.col-lg-2.align-items-stretch(v-for="(item, index) in diys" :class="{'is-checked' : isChecked(item.id)}" v-show="item.cid===showType")
        .col-inner.text-center
          //- .square.w-50.m-auto(v-show="showImg")
          //-   img.d-block.w-100(:src="imagesPath[index]")
          .p
            small {{item.id}}.
            .d-inline.h3 {{item.name}}
          //- .p(v-if="showPrice") ${{item.price}}
          input(type="checkbox" :id="`diy${item.id}`" :name="`diy${item.id}`" :value="item.id" v-model="checked")
    .p 匯出資訊：
    .p.textarea {{io}}
    .p 複製文字：有的
    .p.textarea
      template(v-for="(item, index) in checkedItems") {{item.name}}
        br
    .p 複製文字：沒有的
    .p.textarea
      template(v-for="(item, index) in notCheckedItems") {{item.name}}
        br
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

.h1
  font-size 28px
  font-weight bold
.h3
  font-size 14px
.h6
  font-size 12px
  opacity 0.5
  line-height 1.2
.p
  font-size 12px
  line-height 1.2
  margin 0.5em 0
  small
    opacity 0.5
    padding-right 0.25em
.msg
  background-color rgba(255,255,255,0.3)
.diy
  .block-import
    padding 1em 0
  .textarea
    display block
    width 100%
    margin 1em 0
    padding 1em
    background-color white
  .button
    color white
    background-color rgb(136, 201, 161)
    padding 0.5em 1em
    border-radius 4px
    cursor pointer
    margin-right 0.5em
    &.is-active
      background-color white
      color rgb(136, 201, 161)
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
    padding 10px
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
