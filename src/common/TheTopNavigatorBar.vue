<template>
  <div class="topNav">
    <el-menu>
      <el-menu-item index="/myaccount">活动发布</el-menu-item>
       <el-menu-item index="/">home</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "LTheTopNavigatorBar"
};
</script>

<style>
</style>


