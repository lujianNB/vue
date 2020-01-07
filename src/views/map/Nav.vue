<template>
  <div class="action">
    <ul class="btnbox">
      <router-link to="/map/sign" tag="li" active-class="active" class="btn">签到</router-link>
      <router-link to="/map/daily" tag="li" active-class="active" class="btn">日报</router-link>
      <router-link to="/map/checksign" tag="li" active-class="active" class="btn">查看签到</router-link>
      <router-link to="/map/checkdaily" tag="li" active-class="active" class="btn">查看日报</router-link>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
  .btnbox
    display flex
    justify-content center
    padding .15rem
    .btn
      width 22%
      height .4rem
      font-size .16rem
      line-height .4rem
      text-align center
      &.active
        background #108ee9
        color #fff
</style>