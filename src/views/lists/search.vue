<template>
<div class="search">
    <div class="header">
        <div><i class="fas fa-chevron-left"></i><span @click="fanhui">返回</span></div>
        <div>搜索</div>
    </div>
    <div class="input">
        <input type="text" @click="lj" v-model="value"><span v-if="flagg" @click="lujian">取消</span>
    </div>
    <div class="sousuo" v-if="!flagg"><i class="fas fa-search"></i><span>搜索</span></div>
    <i class="sou fas fa-search" v-if="flagg"></i>
    <i class="cha fas fa-times-circle" v-if="flagg" @click="lujian"></i>
    <ul>
        <li v-for="item of newUsers" :key="item.id">
            <router-link :to="{
                name:'usermsg',
                params:{
                    id:item.id
                }
            }">
                <div>
                    <div>{{item.userName|xiugai}}</div>
                    <div :style="item.status==='跟进中'||item.status==='签约中'?'border-color:#108ee9;color:#108ee9':''">{{item.status}}</div>
                    <div>{{item.biaoqian}}</div>
                    <div>
                        {{item.updateDate}}
                        <span class="status" v-if="!(item.f)" :style="item.status==='跟进中'?'width:0.8rem;background-color:#507ae7':'width:1.2rem'">
                            <i :style="item.status==='跟进中'?'background-color:#e2d8da':''"></i>
                        </span>
                    </div>
                </div>
                <div>
                    <div>{{item.userPhone}}</div>
                </div>
            </router-link>
        </li>
    </ul>
</div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return {
            flagg:false,
            value:'',
            users:[]
        }
    },
    watch:{
        users:{
            deep:true,
            handler(){
                this.users.forEach(elm=>{
                if(elm.status==0){
                    elm.f=true
                    elm.biaoqian='标签A'
                    elm.status='新分派'
                }else if(elm.status==1){
                    elm.f=false
                    elm.biaoqian='标签B'
                    elm.status='跟进中'
                }else if(elm.status==2){
                    elm.f=false
                    elm.biaoqian='标签C'
                     elm.status='签约中'
                }
            })
            }
        }
    },
    filters:{
        xiugai(val){
            return val.slice(0,3)
        }
    },
    computed:{
        newUsers(){
            if(this.value==''){
                return []
            }else{
                return this.users.filter(elm=>{
                return ''+elm.userName.indexOf(this.value)>=0
            })
            }
        }
    },
    methods:{
        lj(){
            this.flagg=true
        },
        lujian(){
            this.value=''
            this.flagg=false
        },
        fanhui(){
            this.$router.push('/list/all')
        }
    },
    mounted(){
        axios({
            url:'http://121.36.58.166:9091/getUserList',
            params:{
                wid:localStorage.getItem('wid')
            }
        }).then(res=>{
            this.users=res.data.data
        })
    }
}
</script>
<style lang='stylus' scoped>
.search
    flex 1
    background-color #f5f5f9
    position relative
    .header
        height .45rem
        padding 0 .12rem
        width 3.51rem
        background-color #fff
        display flex
        align-items center
        >div:nth-of-type(1)
            color #108ee9
            font-size .15rem
        >div:nth-of-type(2)
            flex 1
            color #333
            font-size .17rem
            text-indent 1.25rem
    .input
        padding .12rem
        width 3.51rem
        height .28rem
        display flex
        align-items center
        input 
            flex 1
            border none 
            outline none
            text-indent .36rem
        span 
            text-align center
            color #108ee9
    .sousuo 
        position absolute
        top .63rem
        left 1.75rem
        font-size .1rem
        color #333
    .sou
        position absolute
        top .63rem
        left .24rem
        font-size .15rem
        color #333
    .cha
        position absolute
        top .63rem
        right  .56rem
        font-size .15rem
        color #333
    ul
        height 5.7rem
        display flex
        flex-direction column
        overflow auto
        li
            width 100%
            height .7rem
            border-bottom  1px solid #aaa
            background-color #fff
            a 
                width 100%
                height 100%
                display flex
                flex-direction column
                justify-content space-around
                div:nth-of-type(1)
                    height .29rem
                    display flex
                    align-items center
                    div:nth-of-type(1)
                        flex 132
                        color #333
                        font-size .16rem
                        line-height .29rem
                        text-indent  .15rem
                    div:nth-of-type(2)
                        height .17rem
                        flex 85
                        font-size .08rem
                        line-height .17rem
                        text-align center 
                        color red
                        border 1px solid red
                        margin-right .05rem
                    div:nth-of-type(3)
                        height .17rem
                        flex 85
                        font-size .08rem
                        line-height .17rem
                        text-align center 
                        color #108ee9
                        border 1px solid #108ee9
                    div:nth-of-type(4)
                        flex 418
                        font-size .1rem
                        color #999
                        line-height .29rem
                        text-indent 1.1rem  
                        padding-right .15rem
                        position relative
                        .status
                            position absolute
                            width 1.2rem
                            height .16rem
                            background #de3f52
                            top .06rem
                            left .85rem
                            opacity .5
                            border-radius .03rem
                            i    
                                position absolute
                                top 0
                                left .8rem
                                width .4rem
                                height .16rem
                div:nth-of-type(2)
                    height .29rem
                    display flex
                    align-items center
                    div:nth-of-type(1)
                        flex 473
                        margin-left .15rem
                        font-size .06rem
                        color #999
                    div:nth-of-type(2)
                        flex 85
                        margin-left .15rem
                        height .21rem
                        line-height .21rem
                        color #fff
                        background-color #108ee9
                        font-size .05rem
                        text-indent .09rem
                    div:nth-of-type(3)
                        flex 85
                        margin 0 .15rem
                        height .21rem
                        line-height .21rem
                        color #108ee9
                        border 1px solid #108ee9
                        text-align center
                        font-size .05rem
</style>