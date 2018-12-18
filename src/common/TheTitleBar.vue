<template>
  <div class="lv-top-space">
    <el-row>
      <el-col :span="16">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">Home</el-menu-item>
          <el-menu-item index="2">List View</el-menu-item>
          <el-menu-item index="3">Grid View</el-menu-item>
          <el-menu-item index="4">Tree Column</el-menu-item>
          <el-menu-item index="5">Four Column</el-menu-item>
          <el-menu-item index="6">General Content</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8">
        <span>
          <el-input placeholder="请输入内容" v-model="searchInput" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </span>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "LTheTitleBar",
  data: function() {
    return {
      activeIndex: "1",
      searchInput: ""
    };
  },
  methods: {
    handleSelect: function() {}
  }
};
</script>

<style lang="less">
.lv-top-space {
  padding: 80 0 20 0;
  .el-menu {
    height: 40;
    .el-menu-item {
      height: 40;
      line-height: 40px;
    }
  }
}
</style>


