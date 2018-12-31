<template>
  <div class="l-contactus">
    <el-row>
      <el-col :span="24">
        <div>Visit us</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
        <div>
          <div class="font16b">Contact Details</div>
          <div>2601 Mission St.
            <br>San Francisco, CA 94110
            <br>
            <br>info@mysite.com
            <br>Tel 123-456-6780
            <br>Fax 123-456-5679
            <br>web:wwwmysitedomain.com
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <el-form ref="form" :model="form">
          <div class="font16b">Email Us</div>
          <el-form-item>
            <el-input v-model="form.name" placeholder="name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.email" placeholder="email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.subject" placeholder="subject"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="textarea" v-model="form.note"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Send Email</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "LContactUs",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        note: ""
      }
    };
  },
  methods: {
    onSubmit: function() {}
  }
};
</script>

<style lang="scss" scoped>
.l-contactus {
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
