<template>
  <div class="signbox">
    <input type="text" placeholder="请输入房源名称" class="house" v-model="map" />
    <van-uploader :after-read="afterRead" v-model="fileList" multiple :max-count="1"/>
    <button class="sign" @click="post" v-if="f1">点击签到</button>
    <button class="unsign" @click="unpost" v-if="f2">点击签到</button>
    <p class="info" v-if="f3">{{signInfo}}</p>
    <p class="map" v-if="f3">签到地点：{{signMap}}</p>
  </div>
</template>
<script>
import request from '@/utils/request.js'
import { getCookie } from '@/utils/cookie'
import { Toast } from 'vant';
export default {
  data(){
    return {
      map:'',
      fileList: [],
      f1:true,
      f2:false,
      f3:false,
      info:'',
      signInfo:'',
      signMap:''
    }
  },
  methods:{
    afterRead(file){
      // 此时可以自行将文件上传至服务器
      // console.log(file.content)
      // return file
      console.log(file);
    },
    post(){
        const wid=getCookie('wid')
        let pic=[];
        // console.log(this.fileList[0])
        this.fileList.forEach(elm=>pic.push(elm.content))
        pic=JSON.stringify(pic)
        const date=new Date();
        request({
          url:'http://106.54.195.137:3000/sign',
          method:'post',
          data:{
          wid,
          map:this.map,
          // img:this.fileList[0],
          date:`${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`
          },
          headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    }
        }).then(res=>{
          this.signInfo=`签到时间：${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`;
          this.signMap=this.map;
          Toast.success(res.data.msg);
          this.map='';
          this.f3=true
        })
    },
    unpost(){
      Toast.fail(this.info);
      this.f3=true
    }
  },
  mounted(){
    const wid=getCookie('wid');
    
    request({
      url:'http://106.54.195.137:3000/checksign',
      params:{
        wid
      }
    }).then(res=>{
      const today=new Date();
      this.newSign=res.data[0].sign.splice(0,1)[0].date;
      if((this.newSign.slice(5,6)==(today.getMonth()+1))&&this.newSign.slice(7,8)==(today.getDate())){
        this.info='今日已签到';
        this.signInfo=`签到时间：${this.newSign}`;
        this.signMap=res.data[0].sign.splice(0,1)[0].map
        this.f1=false;
        this.f2=true;
      }
      }).catch(err=>console.log(err))
  }
}
</script>

<style lang="stylus" scoped>
.signbox {
  display: flex;
  flex-direction: column;
  align-items: center;

  .house {
    width: 80%;
    height: 0.4rem;
    font-size: 0.3rem;
    padding: 0 0.12rem;
    margin-bottom: 0.15rem;
    box-sizing: border-box;
    border 0
  }

  .sign {
    width: 80%;
    height: 0.4rem;
    font-size: 0.28rem;
    color #fff
    background: #108ee9;
    border 0
    border-radius .05rem
  }
  .unsign{
    width: 80%;
    height: 0.4rem;
    font-size: 0.28rem;
    color #fff
    background: #f32;
    border 0
    border-radius .05rem
  }
  .info{
    margin-top .2rem
    font-size .16rem
    background #108ee9
    color #fff
    border-radius .05rem
    width 80%
    height .4rem
    text-align center
    line-height .4rem
  }
  .map{
    margin-top .2rem
    font-size .16rem
    background #108ee9
    color #fff
    border-radius .05rem
    width 80%
    height .4rem
    text-align center
    line-height .4rem
  }
}
</style>