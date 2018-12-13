<template>
  <div class="lv-frame">
    <el-container>
      <el-header class="fixed-top">
        <div class="lv-layout">
          <l-the-top-navigator-bar></l-the-top-navigator-bar>
        </div>
      </el-header>
      <div class="lv-layout">
        <l-the-title-bar></l-the-title-bar>
      </div>
      <el-container class="lv-layout lv-content">
        <el-aside width="200px">
          <l-the-product-category></l-the-product-category>
        </el-aside>

        <el-main class="lv-main">
          <l-home></l-home>
        </el-main>
      </el-container>
      <el-footer>
        <div class="lv-layout">
          <l-the-footer></l-the-footer>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import TheTopNavigatorBar from "Cmn/TheTopNavigatorBar";
import TheFooter from "Cmn/TheFooter";
import TheTitleBar from "Cmn/TheTitleBar";
import TheProductCategory from "Cmn/TheProductCategory";
import Home from "@/home/Home";
//import from ;
//import from ;
export default {
  name: "LTheTemplate",
  components: {
    LTheTopNavigatorBar: TheTopNavigatorBar,
    LTheFooter: TheFooter,
    LTheTitleBar: TheTitleBar,
    LTheProductCategory: TheProductCategory,
    LHome: Home
  }
};
</script>

<style>
body {
  background: url(~Ast/img/white_leather.png) repeat 0 0;
  margin: 0;
}
.lv-layout {
  width: 75%;
  margin: auto;
}
.lv-main {
  background-color: white;
  margin-left: 20;
}
.lv-content {
}
.lv-frame .el-header,
.lv-frame .el-footer {
  padding: 0;
  border-bottom: 1px solid #ccc;
  background: #f2f2f2;
  box-shadow: 0 0 3px #b1afaf;
  line-height: inherit;
  text-align: left;
}

.lv-frame .el-aside {
  background-color: inherit;
}
</style>
