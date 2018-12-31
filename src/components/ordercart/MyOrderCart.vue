<template>
  <div class="l-ordercart">
    <el-row>
      <el-col :span="24">
        <div>Check Out</div>
        <hr class="soften">
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5">
        <div>a</div>
      </el-col>
      <el-col :span="4">
        <div>a</div>
      </el-col>
      <el-col :span="3">
        <div>a</div>
      </el-col>
      <el-col :span="3">
        <div>a</div>
      </el-col>
      <el-col :span="3">
        <div>a</div>
      </el-col>
      <el-col :span="3">
        <div>a</div>
      </el-col>
      <el-col :span="3">
        <div>a</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="21">
        <div></div>
      </el-col>
      <el-col :span="3">
        <div>$21.22</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div>Voucher Code</div>
        <div>
          <el-input placeholder="CODE"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" @click="onSubmit">Continue Shopping</el-button>
        <el-button type="primary" @click="onSubmit">Next</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "LMyOrderCart",
  data() {
    return {};
  },
  methods: {
    onSubmit: function() {}
  }
};
</script>

<style lang="scss" scoped>
.l-ordercart {
  width: 75%;
  margin: auto;
  background-color: #f5f5f5;
  padding: 20 50;

  .el-col-24 {
    font-size: 24;
    font-weight: bold;
    padding: 20 0;
  }
  .el-col-18 > div {
    float: left;
    padding: 5px;
    border: 1px solid #aaa;
  }
}
</style>
