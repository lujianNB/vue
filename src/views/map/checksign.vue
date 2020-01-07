<template>
  <div class="checksign">
    <ul class="content">
      <li v-for="(item,index) in loadingSign" :key="index" >
        <p>签到时间：{{item.date}}</p>
        <p>签到地点：{{item.map}}</p>
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
      url:'http://106.54.195.137:3000/checksign',
      params:{
        wid
      }
    }).then(res=>{
      this.sign=res.data[0].sign
      // console.log(res.data[0].sign)
      this.loadingSign=this.sign.splice(0,5)
      }).catch(err=>console.log(err))
  },
  data(){
    return{
      sign:[],
      loadingSign:[]
    }
  },
  methods:{
    loading(){
      if(this.sign.length){
        this.loadingSign=this.loadingSign.concat(this.sign.splice(0,3))
      }else{
        Toast.fail('没有更多数据了')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .checksign
    padding .15rem
    height 100%
    flex 1
    overflow auto
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