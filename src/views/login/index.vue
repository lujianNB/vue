<template>
  <div class="login">
    <!-- logo -->
    <div class="logo">
      <i class="fas fa-rainbow"></i>
      <span class="logo-name">马上办公</span>
      <h1>业务管理系统</h1>

    </div>
    <!-- input输入框 -->
     <div id="inputT">
     <div id="inputI">
        <el-input
          placeholder="请输入工号"
          prefix-icon="el-icon-user"
          v-model="wid"
          id="wid"
         
          >
        </el-input>
        <el-input 
          placeholder="请输入密码" 
          v-model="password" 
          show-password 
          prefix-icon="el-icon-lock"
          id="password"
          ></el-input>
       
    </div>
     </div>

    <!-- 按钮 -->
    <div id="btn">
<el-row>
<!-- <el-button type="primary">获取验证码</el-button> -->
<el-button type="primary" @click.native="loding">登陆</el-button>

</el-row>
    </div>

  </div>
</template>

<script>

import axios from 'axios'
  export default {
    data() {
      return {
      wid: '',
      password:''
      }
    },
    methods:{
       loding () {      
         axios({
           url:' http://121.36.58.166:9091/login',
           method:'POST',
          data: {
          wid:this.wid,
          password:this.password
          }
        }).then( res =>{
          if(res.data.success==true){
              this.$router.push("/dak")
              localStorage.setItem("Login",res.data.data.wname)
              localStorage.setItem("wid",res.data.data.wid)
              }
            },
          )},
    }
  }  
 

</script>

<style lang="stylus" scoped>
  .login 
      height 100% 
      flex 1
      overflow auto
      background lightblue


  .logo  
      text-align center
      display block
      font-size  .24rem
      color white
      margin-top .75rem
    .fa-rainbow
        font-size .18rem
    .logo-name
        font-size .18rem
    h1
      margin-top .2rem


  #inputT
      display flex
      flex-direction row
      justify-content center
      padding .3rem 10% 
  .el-input 
      width 100%
  .el-button--primary
      display block
      width 80%
      margin .1rem auto 
      
</style>
