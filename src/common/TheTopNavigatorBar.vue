<template>
  <div>
    <el-menu
      class="el-menu-demo lv-socialNw"
      mode="horizontal"
      background-color="#f2f2f2"
      text-color="#333"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <i class="fa fa-github"></i>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="fa fa-weixin"></i>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="fa fa-weibo"></i>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="fa fa-qq"></i>
      </el-menu-item>
    </el-menu>

    <el-menu
      class="el-menu-demo lv-el-menu"
      mode="horizontal"
      background-color="#f2f2f2"
      text-color="#333"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <i class="fa fa-home"></i> Home
      </el-menu-item>
      <el-menu-item index="2">
        <i class="fa fa-user"></i> My Account
      </el-menu-item>
      <el-menu-item index="3">
        <i class="fa fa-edit"></i> Free Register
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="fa fa-cog"></i> Tool
        </template>
        <el-menu-item index="4-1">
          <LCustomTheme></LCustomTheme>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="5">
        <i class="fa fa-envelope"></i> Contact Us
      </el-menu-item>
      <el-menu-item index="6">
        <i class="fa fa-shopping-cart"></i> Item(s)-$0.00
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import CustomTheme from "@/theme/CustomTheme";
export default {
  name: "LTheTopNavigatorBar",
  components: {
    LCustomTheme: CustomTheme
  }
};
</script>

<style lang="less">
.el-header {
  font-family: FontAwesome;
  .lv-socialNw {
    float: left;
    .el-menu-item {
      font-size: 25;
      padding: 0 5;
    }
  }
  .lv-el-menu {
    float: right;
  }
  li.el-menu-item:hover,
  li.el-menu-item.active {
    color: #fff;
    background: #f89406;
    text-decoration: none;
  }
}
</style>


