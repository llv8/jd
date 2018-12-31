<template>
  <div class="l-home">
    <el-carousel :interval="5000" indicator-position="none" arrow="always" class="l-home-carousel">
      <el-carousel-item v-for="(item,index) in carouselList" :key="index">
        <img :src="imgSrcFun(item.src)">
      </el-carousel-item>
    </el-carousel>
    <l-product-sale-info-list></l-product-sale-info-list>
  </div>
</template>

<script>
import ProductSaleInfoList from "Cmn/ProductSaleInfoList";
export default {
  name: "LHome",
  components: {
    LProductSaleInfoList: ProductSaleInfoList
  },
  data: function() {
    return {
      carouselList: [
        { src: "carousel1.png" },
        { src: "carousel2.png" },
        { src: "carousel3.png" },
        { src: "carousel4.png" },
        { src: "carousel5.png" }
      ]
    };
  },
  methods: {
    imgSrcFun: function(val) {
      return require("Ast/img/" + val);
    }
  },
  filters: {}
};
</script>
<style lang="scss" scoped>
.l-home {
  background-color: inherit;
}
.l-home-carousel {
  margin-bottom: 20px;
  background-color: white;
}
</style>
