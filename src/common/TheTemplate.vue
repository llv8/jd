<template>
  <div class="lv-frame">
    <el-container>
      <el-header class="fixed-top">
        <div class="lv-main">
          <LTheTopNavigatorBar></LTheTopNavigatorBar>
        </div>
      </el-header>
      <el-container class="lv-main">
        <el-aside width="200px">Aside</el-aside>
        <el-main><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></el-main>
      </el-container>
      <el-footer>
        <div class="lv-main">efg</div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import TheTopNavigatorBar from "Cmn/TheTopNavigatorBar";
//import from ;
//import from ;
export default {
  name: "LTheTemplate",
  components: {
    LTheTopNavigatorBar: TheTopNavigatorBar
  }
};
</script>

<style>
body {
  background: url(../assets/img/white_leather.png) repeat 0 0;
  margin: 0;
}
.lv-main {
  width: 85%;
  margin: auto;
}
.lv-frame .el-header,
.lv-frame .el-footer {
  padding: 0;
  border-bottom: 1px solid #ccc;
  background: #f2f2f2;
  box-shadow: 0 0 3px #b1afaf;
}
</style>
