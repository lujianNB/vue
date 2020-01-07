<template>
<div>
 <header>
        <div @click="huiHome">
            <i class="fas fa-rainbow"></i>
            <span>马上办公</span>
        </div>
        <div>打卡</div>
     <div></div>
</header>

   <span class="el-icon-alarm-clock kaoqing">考勤月历</span>
<div><el-calendar v-model="value">
</el-calendar></div>

 <div class="steps-d">
        <van-steps direction="vertical" :active="4">
        <van-step>
            <h3>签到时间：{{xw}}</h3>
            <p></p>
            <div class="signin-steps">
            <i class="el-icon-location-outline"></i>
            <span> 马上办公 </span>
            </div>
        </van-step>
        <van-step>
            <h3>签退时间: {{xw2}}</h3>
            <p></p>
            <div class="signin-steps">
            <i class="el-icon-location-outline"></i>
            <span> 马上办公 </span>
            </div>
        </van-step>
    </van-steps>
    <p @click="kaoqing"></p>
  </div>
 
</div>

</template>
<script>
import axios from 'axios'
  export default {
    data() {
      return {
        value: new Date(),
        xw : '',
        xw2:''

      }
    },
     methods:{
         huiHome(){
            this.$router.push('/home')
        },
        kaoqing(){
            axios({
           url:'http://121.36.58.166:9091/sign/chaxun/1228',
           method:'POST',
          data: {
          wid:this.wid,
          password:this.password,
          }
        }).then( res =>{
            if(res.data.data[0].signTime){
                this.xw = (res.data.data[0].signTime.slice(11))
                this.xw2 = (res.data.data[0].signTime.slice(11))
            }else{
                this.xw = ''
                this.xw2 =''
            }
        })
        }
    },
    mounted(){
        this.kaoqing()
    }
  }  
</script>
<style lang='stylus' scoped>
// 头部

   header 
    height .5rem
    background-color #108ee9
    display flex
    div:nth-of-type(1)
        flex 210
        display flex
        justify-content space-around
        align-items center
        margin-left .2rem
        i 
            font-size .2rem
            color white
        span 
            font-size .14rem
            color white
            font-weight 700
    div:nth-of-type(2)
        flex 330
        color #ddd
        line-height  .5rem
        text-align center
        font-size .16rem
  div:nth-of-type(3)
        flex 210
    // 考勤日历名字
    .kaoqing
        // padding-top .1rem
        color #666  
        position: relative;
        left .25rem
        top .4rem
</style>
<style lang="stylus" >
    // 年月日/按钮样式
.el-calendar__title
    display none
.el-calendar__header
    display inline-block
    border none
    float right
    padding .15rem
// 星期样式
.el-calendar-table /deep/ tbody
    font-size: 14px;
// 日历中日期样式
.el-calendar-table  /deep/  .el-calendar-day
   height .4rem
   font-size .14rem
</style>