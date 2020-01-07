<template>
<div class="beizhu">
    <div>
        <router-link :to="{
            name:'tianjiabeizhu',
            params:{
                id:this.$route.params.id
            }
        }">
            <div>
                <span></span>
                <span>每日备注</span>
            </div>
            <div>
                <span>新增备注</span>
                <span>&gt;</span>
            </div>
        </router-link>
    </div>
    <ul>
        <li v-for="(item,index) in beizhu" :key="index">
            <p>{{username+''+item.dailyDate}}</p>
            <p>备注：{{item.daily}}</p>
        </li>
    </ul>
</div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return {
            beizhu:[],
            username:''
        }
    },
    mounted(){
        this.username=localStorage.getItem('Login')
        axios({
            url:'http://121.36.58.166:9091/getdaily',
            params:{
                uid:this.$route.params.id
            }
        }).then(res=>{
            this.beizhu=res.data.data
        })
    }
}
</script>
<style lang='stylus' scoped>
@import "../../assets/stylesheets/border.styl";
.beizhu 
    background-color #f5f5f9
    height  6.17rem
    overflow auto
    >div:nth-of-type(1)
        padding 0 .12rem
        width 3.51rem
        height .45rem
        a 
            display flex
            height 100%
            width 100%
            border 0 0 1px 0,#ccc
            div
                flex 1
            div:nth-of-type(1)
                display flex
                align-items center
                span:nth-of-type(1)
                    flex 0
                    height .15rem
                    width 0
                    border-color #108ee9
                    border-width 2px
                    border-style solid
                span:nth-of-type(2)
                    color #000
                    font-size .15rem
                    text-indent  .12rem
            div:nth-of-type(2)
                display flex
                align-items center
                justify-content flex-end
                span:nth-of-type(1)
                    color #108ee9
                    font-size .06rem
                span:nth-of-type(2)
                    color #aaaaaa
                    font-size .06rem
    ul 
        padding 0 .12rem
        width 3.51rem
        li 
            border 0 0 1px 0,#ccc
            width 100%
            p 
                width 100%
                line-height .3rem
                color #333
                font-size .1rem
</style>