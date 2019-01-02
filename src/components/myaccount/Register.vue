<template>
  <div class="lv-register">
    <div>
      <label class="font18b">注册</label>
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="昵称:" prop="name">
          <el-input v-model="form.name" placeholder="Name"></el-input>
        </el-form-item>
        <el-form-item label="手机:" prop="phone">
          <el-input v-model.number="form.phone" placeholder="Phone"></el-input>
        </el-form-item>
        <el-form-item label="邮件:" prop="email">
          <el-input v-model="form.email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="form.password" placeholder="Password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" @keypress="onSubmit">注册</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  name: "LRegister",
  data() {
    var validateEmail = (rule, value, callback) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(value)) {
        callback();
      } else {
        callback(new Error("邮件格式不正确"));
      }
    };
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "change"
          }
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { type: "number", message: "手机号必须为数字" }
        ],
        email: [
          { required: true, message: "请输入邮件", trigger: "blur" },
          { validator: validateEmail, trigger: "change" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      let form = this.form;
      axios
        .post("http://localhost:8081/register", {
          name: form.name,
          phone: form.phone,
          email: form.email,
          password: form.password
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.lv-register {
  background-color: #f5f5f5;
  > div {
    text-align: center;
    margin: auto;
    padding: 20 0;
    width: 60%;
  }
}
</style>
