<template>
    <header class="header">
        <div @click="huiHome">
            <i class="fas fa-rainbow"></i>
            <span>马上办公</span>
        </div>
        <div class="title">首页</div>
        <div>
            <i class="fas fa-search" v-if="fl" @click="onSearch"></i>
            <div class="content" @click="onClick">
                <van-dropdown-menu v-if="fla">
                    <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
            </div>
        </div>
    </header>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
        reload:1,
        fla:true,
        fl:false,
        value1: 0,
        option1: []
        }
    },
    watch: {
        $route: {
            deep: true,
            handler () {
                if (this.$route.name == 'all') {
                this.fl = true
                this.fla = false 
                document.querySelector('.title').innerHTML='客户列表'
                document.querySelector('.content').innerHTML='标签>'
                document.querySelector('.content').style.color='#fff'
                document.querySelector('.content').style.textIndent='0.1rem'
                }
                if (this.$route.name == 'base'||this.$route.name == 'gen'||this.$route.name == 'qian') {
                this.fl = false
                this.fla = false 
                document.querySelector('.title').innerHTML='详情'
                document.querySelector('.content').innerHTML='客户列表>'
                document.querySelector('.content').style.color='#fff'
                document.querySelector('.content').style.textIndent='0.1rem'
                } 
                if (this.$route.name == 'beizhu') {
                this.fl = false
                this.fla = false 
                document.querySelector('.title').innerHTML='日报'
                document.querySelector('.content').innerHTML='客户详情>'
                document.querySelector('.content').style.color='#fff'
                document.querySelector('.content').style.textIndent='0.1rem'
                } 
                if (this.$route.name == 'daikan') {
                this.fl = false
                this.fla = false 
                document.querySelector('.title').innerHTML='新增带看'
                document.querySelector('.content').innerHTML='返回>'
                document.querySelector('.content').style.color='#fff'
                document.querySelector('.content').style.textIndent='0.3rem'
                } 
                if (this.$route.name == 'Shop' ||this.$route.name == 'ForSuccessful') {
                this.fl = false
                this.fla = false 
                document.querySelector('.title').innerHTML='订单竞价系统'
                } 
            }
        }
    },
    methods:{
        onClick(){
            if (this.$route.name == 'gen'||this.$route.name == 'base'||this.$route.name == 'qian') {
                this.$router.push('/list')
            } 
            if (this.$route.name == 'pinggu') {
                this.$router.go(-1)
            } 
            if (this.$route.name == 'beizhu') {
                this.$router.push(`/list/${this.$route.params.id}/gen`)
            } 
            if (this.$route.name == 'daikan') {
                this.$router.go(-1)
            } 
        },
        onSearch(){
            if (this.$route.name == 'all'||this.$route.name == 'new'||this.$route.name == 'running'||this.$route.name == 'qianyue'||this.$route.name == 'more'){
                this.$router.push('/search')
            }
        },
        huiHome(){
            this.$router.push('/home')
        }
    },
    mounted(){
         if (this.$route.name == 'all') {
                this.fl = true
                this.fla = false 
                document.querySelector('.title').innerHTML='客户列表'
                document.querySelector('.content').innerHTML='标签>'
                document.querySelector('.content').style.color='#fff'
                document.querySelector('.content').style.textIndent='0.1rem'
                }
                if (this.$route.name == 'base'||this.$route.name == 'gen'||this.$route.name == 'qian') {
                this.fl = false
                this.fla = false 
                document.querySelector('.title').innerHTML='详情'
                document.querySelector('.content').innerHTML='客户列表>'
                document.querySelector('.content').style.color='#fff'
                document.querySelector('.content').style.textIndent='0.1rem'
                } 
                if (this.$route.name == 'beizhu') {
                this.fl = false
                this.fla = false 
                document.querySelector('.title').innerHTML='日报'
                document.querySelector('.content').innerHTML='客户详情>'
                document.querySelector('.content').style.color='#fff'
                document.querySelector('.content').style.textIndent='0.1rem'
                } 
                if (this.$route.name == 'daikan') {
                this.fl = false
                this.fla = false 
                document.querySelector('.title').innerHTML='新增带看'
                document.querySelector('.content').innerHTML='返回>'
                document.querySelector('.content').style.color='#fff'
                document.querySelector('.content').style.textIndent='0.1rem'
                } 
                if (this.$route.name == 'Shop' ||this.$route.name == 'ForSuccessful') {
                this.fl = false
                this.fla = false 
                document.querySelector('.title').innerHTML='订单竞价系统'
                } 
        axios({
            url:'http://121.36.58.166:9091/getCity',
        }).then(res=>{
            this.option1=res.data.data
        })
  }
}
</script>
<style lang='stylus' scoped>
.header 
    height .5rem
    background-color #108ee9
    display flex
    flex-direction row
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
        display flex
        align-items center
        justify-content space-between
        i 
            color #ddd
            font-size .16rem
        div 
            height 100% 
            color #ddd
            font-size .16rem 
            flex 1
            margin 0
[class*=van-hairline]::after 
    border none 
</style>
