<template>
  <div class="checkdaily">
    <ul>
      <li v-for="(item,index) in loadingDaily" :key="index">
        <p>提交时间：{{item.date}}</p>
        <p>日报内容：{{item.content}}</p>
      </li>
    </ul>
    <p class="more" @click="loading">点击查看更多记录</p>
  </div>
</template>

<script>
import { getCookie } from '@/utils/cookie'
import request from '@/utils/request.js'
import { Toast } from 'vant';
export default {
  mounted(){
    const wid=getCookie('wid');
    console.log(wid);
     request({
      url:'http://106.54.195.137:3000/checkdaily',
      params:{
        wid
      }
    }).then(res=>{
      this.daily=res.data[0].daily
      // console.log(res.data[0].daily)
      this.loadingDaily=this.daily.splice(0,5)
      }).catch(err=>console.log(err))
  },
  data(){
    return{
      daily:[],
      loadingDaily:[]
    }
  },
  methods:{
    loading(){
      if(this.daily.length){
        this.loadingDaily=this.loadingDaily.concat(this.daily.splice(0,3))
      }else{
        Toast.fail('没有更多数据了')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .checkdaily
    flex 1
    overflow auto
    padding .15rem
    ul
      li
        margin-bottom .16rem
        border-bottom 1px solid #ccc
        padding 0 .08rem
        p
          margin.08rem 0
    .more 
      text-align center
      color #108ee9
</style>