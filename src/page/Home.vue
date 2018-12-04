<template>
  <el-container>
    <el-header>
      <l-header></l-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <l-main-left></l-main-left>
      </el-aside>
      <el-main>
        <l-main></l-main>
      </el-main>
      <el-aside width="200px">
        <l-main-right></l-main-right>
      </el-aside>
    </el-container>
    <el-footer>
      <l-footer></l-footer>
    </el-footer>
  </el-container>
</template>

<script>
import footer from "./Footer.vue";
import header from "./Header.vue";
import main from "./Main.vue";
import mainLeft from "./MainLeft.vue";
import mainRight from "./MainRight.vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
Vue.use(Element);
export default {
  name: "index",
  components: {
    "l-footer": footer,
    "l-header": header,
    "l-main": main,
    "l-main-left": mainLeft,
    "l-main-right": mainRight
  }
};
</script>

 <style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>