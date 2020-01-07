<template>
    <div class="layout">
        <Header v-if="f"></Header>
        <keep-alive :include="$route.meta.include">
            <router-view></router-view>
        </keep-alive >
        <Footer v-if="flag"></Footer>
    </div>
</template>
<script>
import Header from '../components/header'
import Footer from '../components/footer'
export default{
    data(){
        return {
            flag:true,
            f:true
        }
    },
    components:{
        Header,
        Footer
    },
      watch: {
    $route: {
      deep: true,
      handler () {
        if ( this.$route.path == '/login'||this.$route.path == '/kaoqingrl'||this.$route.path == '/search'||this.$route.name == 'daikan'||this.$route.name == 'tianjiabeizhu'||this.$route.name == 'beizhu'||this.$route.name == 'pinggu'||this.$route.path == '/list'||this.$route.path == '/map'||this.$route.path == '/shop'||this.$route.path == '/xinxi'||this.$route.path == '/list/all'||this.$route.path == '/list/new'||this.$route.path == '/list/running'||this.$route.path == '/list/qianyue'||this.$route.path == '/list/more'||this.$route.name == 'base'||this.$route.name == 'gen'||this.$route.name == 'qian') {
          this.flag = false 
        } 
        if ( this.$route.name == 'tianjiabeizhu'||this.$route.path == '/search'||this.$route.path == '/login'||this.$route.path == '/kaoqingrl'){
          this.f = false 
        } 
        if ( this.$route.path == '/home') {
          this.flag = true;
          this.f=true
        } 
        if ( this.$route.path == '/list'||this.$route.path == '/map/sign'||this.$route.path == '/map/daily'||this.$route.path == '/map/checksign'||this.$route.path == '/map/checkdaily'||this.$route.path == '/shop'||this.$route.path == '/xinxi'||this.$route.path == '/dak') {
          this.flag = false 
          this.f =false
        } 
        if(this.$route.path == '/shop' || this.$route.name == 'ForSuccessful'|| this.$route.name == 'beizhu'||this.$route.path == '/list/all'||this.$route.path == '/list/new'||this.$route.path == '/list/running'||this.$route.path == '/list/qianyue'||this.$route.path == '/list/more'||this.$route.name == 'base'||this.$route.name == 'gen'||this.$route.name == 'qian'){
          this.flag = false 
          this.f =true
        }
    }
  }
}
}
</script>
<style lang='stylus' scoped>
.layout
    height 100%
    display flex
    flex-direction column
</style>