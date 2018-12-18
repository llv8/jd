<template>
  <div class="l-frame">
    <el-container>
      <el-header class="fixed-top">
        <div class="l-layout">
          <l-the-top-navigator-bar></l-the-top-navigator-bar>
        </div>
      </el-header>
      <div class="l-layout">
        <l-the-title-bar></l-the-title-bar>
      </div>
      <el-container class="l-layout l-content">
        <el-aside width="200px">
          <l-the-product-category></l-the-product-category>
          <l-the-side></l-the-side>
        </el-aside>

        <el-main class="l-main">
          <l-home></l-home>
        </el-main>
      </el-container>
      <el-footer>
        <div class="l-layout">
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
import TheSide from "Cmn/TheSide";
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
    LTheSide: TheSide,
    LHome: Home
  }
};
</script>

<style>
body {
  background: url(~Ast/img/white_leather.png) repeat 0 0;
  margin: 0;
}
.l-layout {
  width: 75%;
  margin: auto;
}
.l-main {
  background-color: inherit;
  margin-left: 20;
}
.l-content {
}
.l-frame .el-header,
.l-frame .el-footer {
  padding: 0;
  border-bottom: 1px solid #ccc;
  background: #f2f2f2;
  box-shadow: 0 0 3px #b1afaf;
  line-height: inherit;
  text-align: left;
}

.l-frame .el-aside {
  background-color: inherit;
}
</style>
