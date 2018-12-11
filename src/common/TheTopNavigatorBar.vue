<template>
  <div>
    <div class="lv-socialNw">
      <a href="#">
        <span class="icon-twitter"></span>
      </a>
      <a href="#">
        <span class="icon-facebook"></span>
      </a>
      <a href="#">
        <span class="icon-youtube"></span>
      </a>
      <a href="#">
        <span class="icon-tumblr"></span>
      </a>
    </div>

    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#f2f2f2"
      text-color="#333"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <span class="icon-home"></span>Home
      </el-menu-item>
      <el-menu-item index="2">My Account</el-menu-item>
      <el-menu-item index="3">Free Register</el-menu-item>
      <el-menu-item index="4">Contact Us</el-menu-item>
      <el-menu-item index="5">Item(s)-$0.00</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "LTheTopNavigatorBar"
};
</script>

<style>
.el-header .el-menu {
  float: right;
}
.el-header .lv-socialNw {
  float: left;
}
</style>


