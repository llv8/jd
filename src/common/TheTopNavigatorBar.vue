<template>
  <div>
    <el-menu
      class="el-menu-demo lv-socialNw"
      mode="horizontal"
      background-color="#f2f2f2"
      text-color="#333"
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
      :router="true"
      class="el-menu-demo lv-el-menu"
      mode="horizontal"
      background-color="#f2f2f2"
      text-color="#333"
      default-active="/"
    >
      <el-menu-item index="/">
        <i class="fa fa-home"></i>Home
      </el-menu-item>
      <el-menu-item index="2">
        <i class="fa fa-user"></i> My Account
      </el-menu-item>
      <el-menu-item index="/register">
        <i class="fa fa-edit"></i>
        Free Register
      </el-menu-item>
      <el-menu-item index @click="colorTheme">
        <i class="fa fa-cog"></i>切换主题色
      </el-menu-item>
      <el-menu-item index="/contactus">
        <i class="fa fa-envelope"></i>
        Contact Us
      </el-menu-item>
      <el-menu-item index="/orderCart">
        <i class="fa fa-shopping-cart"></i>
        Item(s)-$0.00
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import eventdata from "./event.js";
export default {
  name: "LTheTopNavigatorBar",
  components: {},
  data() {
    return {};
  },
  methods: {
    colorTheme: function() {
      eventdata.$emit("transfer");
    }
  }
};
</script>

<style lang="scss" scoped>
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


