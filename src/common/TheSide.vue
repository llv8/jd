<template>
  <el-col>
    <el-col class="l-side1">
      <div class="alert-warning">
        <h2>50% Discount</h2>
        <p>only valid for online order.
          <br>
          <br>
          <a class="defaultBtn" href="#">Click here</a>
        </p>
      </div>
    </el-col>
    <el-col class="l-side2">
      <div>
        <a href="#">
          <img src="~Ast/img/paypal.jpg">
        </a>
      </div>
    </el-col>

    <el-col class="l-side3">
      <a class="shopBtn" href="#">Upcoming products
        <br>
        <small>Click to view</small>
      </a>
    </el-col>
    <el-col class="l-side4"></el-col>
  </el-col>
</template>
<script>
export default {};
</script>
<style lang="less">
.l-side1 {
  margin: 20 0 0 0;
  .alert-warning {
    padding: 9;
  }
  h2 {
    font-size: 21px;
    line-height: 21px;
  }
  p {
    font-size: 14;
    line-height: normal;
  }
}
.l-side2 {
  margin: 20 0 0 0;
  img {
    width: 100%;
  }
}

.l-side3 {
  margin: 20 0 0 0;
  .shopBtn {
    width: 100%;
    min-height: 34px;
    font-size: 14px;
    font-weight: bold;
    line-height: 34px;
    color: #fff;
    border-radius: 2px;
    background: #f89406;
    display: inline-block;
    padding: 0 12px;
    border: 0;
  }
  .shopBtn:hover {
    color: #fff;
    text-decoration: none;
    background: #f86706;
  }
}
</style>


