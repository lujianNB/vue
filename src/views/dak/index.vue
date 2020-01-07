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
    <!-- 当前日期 -->
      <div>
          <div class="datanow">
            <span>{{nowTimes.year}}年{{nowTimes.yy}}月{{nowTimes.dd}}日</span>
            <i class="el-icon-warning"> <b>打卡规则</b>  </i>
          </div>
      </div>
    <!-- 签到地址 -->
    <div class="signin">
        <i class="el-icon-location-outline"></i>
        <span> 马上办公 </span>
        <b class="el-icon-refresh"></b>
    </div>

<!-- 签到按钮 -->
    <div class="" @click="dak" v-if="fqd">
        <el-row>
  <el-button type="primary" class="btn-q"> <p class="btn-q-t" >签到</p>
  <span class="btn-q-b">{{nowTimes.hou}}：{{nowTimes.min}}：{{nowTimes.sec}}</span></el-button>
    </el-row>
   <!-- 签到时间 -->
     
    </div>
     <div class="" @click="qiant" v-if="fqt">
        <el-row>
  <el-button type="primary" class="btn-q"> <p class="btn-q-t" >签退</p>
  <span class="btn-q-b">{{nowTimes.hou}}：{{nowTimes.min}}：{{nowTimes.sec}}</span></el-button>
    </el-row>
   <!-- 签到时间 -->
     
    </div>
  <div class="steps-d">
        <van-steps direction="vertical" :active="4">
        <van-step>
            <h3>签到时间：</h3>
            <p>{{signtimedata}}</p>
            <div class="signin-steps">
            <i class="el-icon-location-outline"></i>
            <span> 马上办公 </span>
            </div>
        </van-step>
        <van-step>
            <h3>签到时间:</h3>
            <p></p>
             <h4>备注：待看</h4>
            <div class="signin-steps">
            <i class="el-icon-location-outline"></i>
            <span> 马上办公 </span>
            </div>
        </van-step>
        <van-step>
            <h3>签退时间:</h3>
            <p>{{signtimeqtdata}}</p>
            <div class="signin-steps">
            <i class="el-icon-location-outline"></i>
            <span> 马上办公 </span>
            </div>
        </van-step>
    </van-steps>
    <p class="ck" @click="chakan">查看打卡记录：</p>
  </div>

 
</div>

</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            fqt :false,
            fqd:true,
            active: '',
            signtimedata:'',
            signtimeqtdata:'',
            nowTimes:{
                yy:0,
                dd:"",
                year:"",
                hou:'',
                min:'',
                sec:''
            },
        }
    },
    methods:{
        chakan(){
            this.$router.push('/kaoqingrl')
        },
        huiHome(){
            this.$router.push('/home')
        },
        setNowTimes(){
            let nowDate=new Date()
            this.nowTimes.yy = nowDate.getMonth()+1;
            this.nowTimes.dd = String(nowDate.getDate()<10?'0'+ nowDate.getDate(): nowDate.getDate()) ;
            this.nowTimes.year =nowDate.getFullYear();
            this.nowTimes.hou = String(nowDate.getHours()<10?"0"+nowDate.getHours():nowDate.getHours());
            this.nowTimes.min = String(nowDate.getMinutes()<10?'0'+nowDate.getMinutes():nowDate.getMinutes());
            this.nowTimes.sec = String(nowDate.getSeconds()<10?'0'+nowDate.getSeconds():nowDate.getSeconds());
            nowDate=null
        },
        dak(){
            const signtime = (this.nowTimes.hou+':'+this.nowTimes.min+':'+this.nowTimes.sec)
            const data = {
                wid:localStorage.getItem('wid'),
                wname:localStorage.getItem('Login'),
                signtime,
                
            }
       axios({
           url:'http://121.36.58.166:9091/sign/daka',
           method:'POST',
           data,

       }).then(() =>{
           this.signtimedata = signtime
           this.fqt =true,
           this.fqd = false
          }
       )},
       qiant(){
            const signtimeqt = (this.nowTimes.hou+':'+this.nowTimes.min+':'+this.nowTimes.sec)
            const data = {
                wid:123,
                wname:'wda',
                signtimeqt,
                
            }
       axios({
           url:'http://121.36.58.166:9091/sign/daka',
           method:'POST',
           data,

       }).then(() =>{
           this.signtimeqtdata = signtimeqt
           this.fqt =false,
           this.fqd = true
          }
       )}
     }, 
    mounted(){
        setInterval( ()=>{
            this.setNowTimes();
        },1000)
        
    },
    
        
       
    }
    

</script>
<style lang='stylus' scoped>
@import '~assets/stylesheets/border.styl';
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
  .datanow
        color #ccc
        text-indent .2rem
        line-height .4rem
    // 年月日
    span
        font-size .16rem
    // 图标
    .el-icon-warning 
        float right  
        line-height .4rem
        margin-right .1rem
    .el-icon-warning>b
        font-size .14rem
        line-height .4rem
        font-weight normal
    .signin
        padding .1rem
        color #888
        line-height .4rem
    .el-icon-refresh
        float  right
        line-height .5rem
    //按钮
    .btn-q
        display block
        width 80%
        margin 0 auto
    .btn-q-t
        color yellow 
        padding-bottom .15rem 
    .btn-q-b
        padding .1rem 0

    .steps-d
        margin .3rem
        border 0 0 3px 0, #ccc
        .van-steps--vertical
            color red
           .van-steps__items
                color red
              .van-step
                padding   0 0 0 .2rem
                margin .1rem
                h3,p
                  margin-bottom  .06rem
                  display inline-block
                signin-steps 
                   margin .1rem
              
        .ck 
          margin .2rem
          text-align center 
          line-height .3rem  
          height .3rem
          color #108ee9
</style>




