<template>
  <div>
    <el-row class="l-prodlist">
      <el-col :span="8" v-for="(prod, index) in prodList" :key="index">
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
  data: function() {
    return {
      prodList: [
        { name: "p1.jpg", date: new Date(), desc: "p1" },
        { name: "p2.jpg", date: new Date(), desc: "p2" },
        { name: "p3.jpg", date: new Date(), desc: "p3" },
        { name: "p4.jpg", date: new Date(), desc: "p4" },
        { name: "p5.jpg", date: new Date(), desc: "p5" },
        { name: "p6.jpg", date: new Date(), desc: "p6" }
      ]
    };
  }
};
</script>


<style lang="less">
.l-prodlist {
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
</style>
