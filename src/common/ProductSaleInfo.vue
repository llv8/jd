<template>
  <el-card :body-style="{ padding: '0px' }" class="l-card">
    <img :src="imgUrl(name)" class="image">
    <div style="padding: 14px;">
      <span>{{desc}} {{ date }}</span>
      <div class="bottom clearfix">
        <el-button type="text" class="button">购买</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "LProductSaleInfo",
  props: {
    name: String,
    date: Date,
    desc: String
  },
  data: function() {
    return {};
  },
  methods: {
    imgUrl: function(name) {
      return require("Ast/img/" + name);
    }
  },
  filters: {
    formatDate: function(val) {
      return val;
    }
  }
};
</script>


<style lang="scss" scoped>
.l-card {
  margin: 10;
  .el-card__body {
    line-height: normal;
  }
  img {
    width: 100%;
  }
}
</style>
