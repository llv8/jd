<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <l-product-sale-summary :url="url"></l-product-sale-summary>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ProductSaleSummary from "Cmn/ProductSaleSummary";
export default {
  name: "ProductSaleSummaryList",
  components: {
    LProductSaleSummary: ProductSaleSummary
  },
  data: function() {
    return {
      url: '~/Ast/img/p1.png'
    };
  }
};
</script>


<style lang="less">
</style>
