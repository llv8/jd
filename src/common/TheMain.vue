<template>
  <el-container class="l-main">
    <el-aside width="200px">
      <l-the-product-category></l-the-product-category>
      <l-the-side></l-the-side>
    </el-aside>

    <el-main class="l-content">
      <router-view name="content"></router-view>
    </el-main>
  </el-container>
</template>
<script>
import TheProductCategory from "Cmn/TheProductCategory";
import TheSide from "Cmn/TheSide";
export default {
  name: "LTheMain",
  components: {
    LTheProductCategory: TheProductCategory,
    LTheSide: TheSide
  }
};
</script>

<style lang="scss" scoped>
.l-main {
  width: 75%;
  margin: auto;
  .el-aside {
    background-color: inherit;
  }
  .l-content {
    background-color: inherit;
    margin-left: 20;
    padding: 0;
  }
}
</style>
