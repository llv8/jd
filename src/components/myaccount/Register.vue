<template>
  <div class="lv-register">
    <div class="font18b">Your Personal Details</div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="First Name">
        <el-input v-model="form.firstName" placeholder="First Name"></el-input>
      </el-form-item>
      <el-form-item label="Last Name">
        <el-input v-model="form.lastName" placeholder="Last Name"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="form.email" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password" placeholder="Password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="Date of Birth">
        <el-select v-model="form.dateOfBirth" placeholder="-"></el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        fristName: "",
        lastName: "",
        email: "",
        password: "",
        dateOfBirth: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="scss" scoped>
.lv-register {
  background-color: #f5f5f5;
  .el-form {
    margin: auto;
    padding: 20 0;
    width: 60%;
  }
  > div {
    padding: 20;
  }
}
</style>
