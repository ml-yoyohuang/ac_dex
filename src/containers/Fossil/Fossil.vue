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
    showImg: true,
    showPrice: false,
    showImport: false,
    importData: '',
    importMsg: '',
  }),
  computed: {
    ...Vuex.mapState([]),
    ...Vuex.mapGetters([]),
    imagesPath() {
      return this.fossils.map((item) => require(`img/fossils/${item.id}.png`));
    },
    io() {
      const obj = {
        fossil: this.checked.sort((a, b) => a - b),
      };
      return obj;
    },
    checkedFossils() {
      const found = this.fossils.filter((element) => this.checked.indexOf(element.id) > -1);
      return found.sort((a, b) => a.id - b.id);
    },
    notCheckedFossils() {
      const found = this.fossils.filter((element) => this.checked.indexOf(element.id) === -1);
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
        this.checked = obj.fossil;
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
.fossil.page-container
  .h1 化石圖鑑
  .h6 點擊方塊勾選已有的化石
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
      .block-form
        label.module-radio
          input(type="checkbox" name="showimg" v-model="showImg")
          i.module-symbol
          span.p 顯示圖片
      .block-form
        label.module-radio
          input(type="checkbox" name="showprice" v-model="showPrice")
          i.module-symbol
          span.p 顯示價格
    .row.gutter-10(:class="`filter${filter}`")
      .col.col-6.col-sm-4.col-md-3.col-lg-2.align-items-stretch(v-for="(item, index) in fossils" :class="{'is-checked' : isChecked(item.id)}")
        .col-inner.text-center
          .square.w-50.m-auto(v-show="showImg")
            img.d-block.w-100(:src="imagesPath[index]")
          .p
            small {{item.id}}.
            | {{item.name}}
          .p(v-if="showPrice") ${{item.price}}
          input(type="checkbox" :id="`fossil${item.id}`" :name="`fossil${item.id}`" :value="item.id" v-model="checked")
    .p 匯出資訊：
    .p.textarea {{io}}
    .p 複製文字：有的
    .p.textarea
      template(v-for="(item, index) in checkedFossils") {{item.name}}
        br
    .p 複製文字：沒有的
    .p.textarea
      template(v-for="(item, index) in notCheckedFossils") {{item.name}}
        br
</template>

<style lang="stylus">
</style>
