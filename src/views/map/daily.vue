<template>
  <div class="daily">
    <textarea name="" id="" cols="30" rows="24" class="content" v-model="content"></textarea>
    <button class="submit" @click="post" v-if="f1">提交日报</button>
    <button class="unsubmit" @click="unpost" v-if="f2">提交日报</button>
  </div>
</template>

<script>
import request from '@/utils/request.js'
import { getCookie } from '@/utils/cookie'
import { Toast } from 'vant';
export default {
  data(){
    return {
      content:'',
      newDaily:'',
      info:'今日日报未提交',
      f1:true,
      f2:false
    }
  },
  methods:{
    post(){
        const date=new Date();
        const wid=getCookie('wid')
        request({
          url:'http://106.54.195.137:3000/daily',
          method:'post',
          data:{
          wid,
          content:this.content,
          date:`${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`
          },
          headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    }
        }).then(res=>{
          Toast.success(res.data.msg);
          this.content=''
        })
    },
    unpost(){
      Toast.fail(this.info);
    }
  },
  mounted(){
    const wid=getCookie('wid');
    // console.log(wid);
    request({
      url:'http://106.54.195.137:3000/checkdaily',
      params:{
        wid
      }
    }).then(res=>{
      const today=new Date()
      this.newDaily=res.data[0].daily.splice(0,1)[0].date
      // console.log(this.newDaily)
      // console.log(today.getDate())
      if((this.newDaily.slice(5,6)==(today.getMonth()+1))&&this.newDaily.slice(7,8)==(today.getDate())){
        this.info='今日已提交日报';
        this.f1=false;
        this.f2=true
      }
      }).catch(err=>console.log(err))
  }
}
</script>

<style lang="stylus" scoped>
  .daily
    display flex
    flex-direction column
    align-items center
    .content
      width 80%
      padding .1rem
      margin-bottom .1rem
      box-sizing border-box
      border-radius .05rem
    .submit
      width 80% 
      height .4rem
      font-size: 0.28rem;
      color #fff
      background #108ee9 
      border 0 
      border-radius .05rem
    .unsubmit
      width 80% 
      height .4rem
      font-size: 0.28rem;
      color #fff
      background #f32 
      border 0 
      border-radius .05rem
</style>