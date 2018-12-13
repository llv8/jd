<template>
  <div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item>
        <img src="~Ast/img/carousel1.png">
      </el-carousel-item>
      <el-carousel-item>
        <img src="~Ast/img/carousel2.png">
      </el-carousel-item>
      <el-carousel-item>
        <img src="~Ast/img/carousel3.png">
      </el-carousel-item>
      <el-carousel-item>
        <img src="~Ast/img/carousel4.png">
      </el-carousel-item>
      <el-carousel-item>
        <img src="~Ast/img/carousel5.png">
      </el-carousel-item>
    </el-carousel>
    <l-product-sale-summary-list></l-product-sale-summary-list>
  </div>
</template>

<script>
import ProductSaleSummaryList from "Cmn/ProductSaleSummaryList";
export default {
  name: "LHome",
  components: {
    LProductSaleSummaryList: ProductSaleSummaryList
  },
  data: function() {
    return {};
  }
};
</script>

 <style>
</style>