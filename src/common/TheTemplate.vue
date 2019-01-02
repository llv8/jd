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

      <router-view name="main"></router-view>
      <el-footer>
        <div class="l-layout">
          <l-the-footer></l-the-footer>
        </div>
      </el-footer>
      <router-view name="dialog"></router-view>
      <l-custom-theme-dialog></l-custom-theme-dialog>
    </el-container>
  </div>
</template>
<script>
import TheTopNavigatorBar from "Cmn/TheTopNavigatorBar";
import TheFooter from "Cmn/TheFooter";
import TheTitleBar from "Cmn/TheTitleBar";
export default {
  name: "LTheTemplate",
  components: {
    LTheTopNavigatorBar: TheTopNavigatorBar,
    LTheFooter: TheFooter,
    LTheTitleBar: TheTitleBar
  }
};
</script>

<style lang="scss" scoped>
@import "element-theme-chalk/src/common/var.scss";
.l-layout {
  width: 75%;
  margin: auto;
}
.l-frame {
  .el-footer {
    padding: 0;
    border-bottom: 1px solid #ccc;
    background: #f2f2f2;
    box-shadow: 0 0 3px #b1afaf;
    line-height: inherit;
    text-align: left;
    margin-top: 20;
  }
  .el-header {
    background-color: $--color-primary;
    padding: 0;
  }
}
</style>
