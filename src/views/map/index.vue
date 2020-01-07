<template>
  <div class="work">
    <van-nav-bar
      title="上班考勤"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <Nav class="nav"/>
    <keep-alive :include="$route.meta.include">
      <router-view class="page"></router-view>
    </keep-alive>
  </div>
</template>
<script>
import Nav from './Nav'
export default{
  components:{
    Nav
  },
  methods: {
    onClickLeft() {
      this.$router.push('/home')
    }
  }
}
</script>
<style lang='stylus' scoped>
  .work
    display flex 
    flex-direction  column 
    height 100%
    .van-nav-bar
      background #108ee9
      flex 46
      .van-nav-bar__left
        i
          color #fff
          font-size .2rem
        span 
          color #fff
          font-size .2rem
      .van-nav-bar__title
        color #fff
        font-size .2rem
        font-weight bold
    .nav
      flex 70
    .page
      flex 551
  .van-nav-bar__text:active
    background none
</style>