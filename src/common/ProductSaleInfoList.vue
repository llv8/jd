<template>
  <div>
    <el-row class="l-prodlist">
      <div class="l-header">
        <h5>New Products</h5>
        <span>
          <i @click="scrollPrev" class="el-icon-caret-left"></i>
          <i @click="scrollNext" class="el-icon-caret-right"></i>
        </span>
      </div>
      <hr>
      <el-col
        class="l-new-prod-list"
        :span="6"
        v-for="(prod) in scrollNewProdList"
        :key="prod.name"
      >
        <div>
          <a href="#" class="tag" v-if="prod.isNew"></a>
          <img :src="prod.name">
        </div>
      </el-col>
      <el-col :span="8" v-for="(prod) in prodList" :key="prod.name">
        <l-product-sale-info :name="prod.name" :date="prod.date" :desc="prod.desc"></l-product-sale-info>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ProductSaleInfo from "Cmn/ProductSaleInfo";
export default {
  name: "LProductSaleInfoList",
  components: {
    LProductSaleInfo: ProductSaleInfo
  },
  created: function() {
    this.scrollList = this.getNewScrollList();
    this.newProdList.forEach(element => {
      element.name = this.imgUrl(element.name);
    });
  },
  data: function() {
    return {
      prodList: [
        { name: "p1.jpg", date: new Date(), desc: "p1" },
        { name: "p2.jpg", date: new Date(), desc: "p2" },
        { name: "p3.jpg", date: new Date(), desc: "p3" },
        { name: "p4.jpg", date: new Date(), desc: "p4" },
        { name: "p5.jpg", date: new Date(), desc: "p5" },
        { name: "p6.jpg", date: new Date(), desc: "p6" }
      ],
      newProdList: [
        { name: "p7.jpg", date: new Date(), isNew: true },
        { name: "p8.jpg", date: new Date(), isNew: true },
        { name: "p9.jpg", date: new Date(), isNew: false },
        { name: "p10.jpg", date: new Date(), isNew: false },
        { name: "p11.jpg", date: new Date(), isNew: false },
        { name: "p12.jpg", date: new Date(), isNew: false },
        { name: "p13.jpg", date: new Date(), isNew: false }
      ],
      scrollList: [],
      start: 0,
      step: 4
    };
  },
  computed: {
    scrollNewProdList: function() {
      return this.scrollList;
    }
  },
  methods: {
    imgUrl: function(name) {
      return require("Ast/img/" + name);
    },
    scrollNext: function() {
      this.start = this.start + this.step;
      this.scrollList = this.getNewScrollList();
    },
    scrollPrev: function() {
      this.start = this.start - this.step;
      this.scrollList = this.getNewScrollList();
    },
    getNewScrollList: function() {
      let end = this.start + this.step;
      if (this.start > this.newProdList.length) {
        this.start = 0;
        end = this.start + this.step;
      }
      if (this.start < 0) {
        this.start =
          (Math.ceil(this.newProdList.length / this.step) - 1) * this.step;
        end = this.newProdList.length;
      }
      let scrollList = this.newProdList.slice(this.start, end);
      return scrollList;
    }
  }
};
</script>


<style lang="less" scoped>
.l-prodlist {
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  .l-header {
    padding: 12 12 4 12;
    h5 {
      float: left;
    }
    span {
      float: right;
      line-height: normal;
      i {
        background: #ffa300;
        font-size: 14;
        padding: 4;
        opacity: 0.6;
        color: white;
      }
      i:hover,
      i:focus {
        opacity: 1;
      }
    }
  }
  hr {
    clear: both;
    margin-bottom: 0;
  }
  .l-new-prod-list {
    div {
      margin: 10;
      position: relative;
      img {
        width: 100%;
      }
      .tag {
        background: url("~Ast/img/new.png");
        position: absolute;
        display: block;
        top: -4px;
        right: -18px;
        height: 48px;
        width: 48px;
      }
    }
  }
}
</style>
