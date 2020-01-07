<template>
<div class="gen">
    <ul>
        <li><div></div><div>跟单信息</div></li>
        <li>
            <div>目前状态</div>
            <div>{{kehu.status|xiugai}}</div>
        </li>
        <li>
            <div>跟进人</div>
            <div class="user">{{username}}</div>
        </li>
        <li>
            <div>合作人</div>
            <div>无</div>
        </li>
        <li>
            <div>距离第一次带看时间</div>
            <div>2天</div>
        </li>
        <li>
            <div>下次更新时间</div>
            <div>{{kehu.updateDate}}</div>
        </li>
    </ul>
    <ul>
        <li>
            <router-link :to="{
                name:'pinggu',
                params:{
                    id:this.$route.params.id
                }
            }">
                <div>
                    <span></span>
                    <span>日报</span>
                </div>
                <div>
                    <p><span>跟进评估</span>&gt;</p>
                    <p>暂无评估</p>
                </div>
            </router-link>
        </li>
        <li>
            <router-link :to="{
                name:'beizhu',
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
        </li>
        <li>
            <ul>
                <li v-for="(item,index) in newBeizhu" :key="index">
                    {{username+' '+item.dailyDate}}备注：{{item.daily}}
                </li>
                <div @click="lujian" v-if="f" class="more">查看更多</div>
            </ul>
        </li>
        <li>
             <router-link :to="{
                name:'daikan',
                params:{
                    id:this.$route.params.id
                }
            }">
                <div>
                    <span></span>
                    <span>带看记录</span>
                </div>
                <div>
                    <span>新增带看</span>
                    <span>&gt;</span>
                </div>
             </router-link>
        </li>
        <li>
            <ul>
                <li v-for="(item,index) of newDaikan" :key="index">
                    <p>{{username+' '+item.signTime}}<span class="lookResult" :style="item.lookResult=='不满意'?'color:#108ee9;border-width:1px;border-color:#108ee9;':''">{{item.lookResult}}</span></p>
                    <p>房源点：{{item.housesType}}({{item.houses}})</p>
                    <p>反馈：{{item.lookContent}}</p>
                </li>
                <div @click="lu" v-if="fl" class="more">查看更多</div>
            </ul>
        </li>
    </ul>
</div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return {
            kehu:{},
            beizhu:[],
            newBeizhu:[],
            daikan:[],
            newDaikan:[],
            f:true,
            fl:true,
            username:''
        }
    },
    filters:{
        xiugai(val){
            if(val==0){
                return (''+val).replace('0','新分派')
            }else if(val==1){
                return (''+val).replace('1','跟进中')
            }else{
                return (''+val).replace('2','签约中')
            }
        }
    },
    methods:{
        lujian(){
            this.newBeizhu=this.beizhu
            this.f=false
        },
        lu(){
            this.newDaikan=this.daikan
            this.fl=false
        }
    },
    mounted(){
        this.username=localStorage.getItem('Login')
        axios({
                url:'http://121.36.58.166:9091/getUser',
                params:{
                    id:this.$route.params.id
                }
            }).then(res=>{
                this.kehu=res.data.data
        }),
        axios({
            url:'http://121.36.58.166:9091/getdaily',
            params:{
                uid:this.$route.params.id
            }
        }).then(res=>{
            this.beizhu=res.data.data
            this.beizhu.length>3?this.newBeizhu=this.beizhu.slice(0,3):this.newBeizhu=this.beizhu
        })
        axios({
            url:'http://121.36.58.166:9091/getlook',
            params:{
                uid:this.$route.params.id
            }
        }).then(res=>{
            this.daikan=res.data.data
            this.daikan.length>3?this.newDaikan=this.daikan.slice(0,3):this.newDaikan=this.daikan
        })
    }
}
</script>
<style lang='stylus' scoped>
@import "../../assets/stylesheets/border.styl";
.gen    
    background-color #f5f5f9
    height  5.74rem
    overflow auto
    >ul:nth-of-type(1)
        margin-top .12rem
        width 3.51rem
        padding 0 .12rem
        background-color #fff
        li
            width 3.51rem
            height .45rem
            display flex
            border 0 0 1px 0,#ccc
            align-items  center
            div 
                flex 1
                line-height .45rem
                font-size .1rem
                color #333
                text-align left 
            div:nth-of-type(2)
                font-size .06rem
                color  #aaa 
                text-align right 
        li:nth-of-type(1)
            div:nth-of-type(1)
                flex 0
                height .15rem
                width 0
                border-color #108ee9
                border-width 2px
                border-style solid
            div:nth-of-type(2)
                text-align left 
                color #000
                text-indent  .12rem
    >ul:nth-of-type(2)
        margin-top .12rem
        width 3.51rem
        padding 0 .1rem
        background-color #fff
        >li 
            width 3.51rem
        >li:nth-of-type(1)
            height .45rem
            border 0 0 1px 0,#ccc
            a 
                display flex
                height 100%
                width 100%
                div
                    flex 1
                div:nth-of-type(1)
                    display flex
                    align-items center
                    span:nth-of-type(1)
                        height .15rem
                        width 0
                        border-color #108ee9
                        border-width 2px
                        border-style solid
                        margin-right .1rem
                    span:nth-of-type(2)
                        color #000
                        font-size .1rem
                div:nth-of-type(2)
                    display flex
                    flex-direction column
                    justify-content flex-end
                    p:nth-of-type(1)
                        color #aaaaaa
                        font-size .06rem
                        text-align right 
                        span 
                            color #108ee9
                            font-size .06rem
                    p:nth-of-type(2)
                        color #aaaaaa
                        font-size .06rem
                        text-align right 
        >li:nth-of-type(2),>li:nth-of-type(4)
            height .45rem
            a 
                display flex
                height 100%
                width 100%
                div
                    flex 1
                div:nth-of-type(1)
                    display flex
                    align-items center
                    span:nth-of-type(1)
                        height .05rem
                        width .05rem
                        background-color  #108ee9
                        border-radius 50%
                        margin-right .1rem
                    span:nth-of-type(2)
                        color #000
                        font-size .1rem
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
        >li:nth-of-type(3)
            ul 
                width 100%
                li 
                    color #333
                    font-size .1rem
                    margin-bottom .12rem
        >li:nth-of-type(5)
            ul 
                width 100%
                li 
                    width 100%
                    margin-bottom .12rem
                    p 
                        width 100%
                        font-size .06rem
                        color #333
                        margin-bottom .05rem
                    .lookResult
                        border-width 1px
                        border-color red
                        border-style solid
                        color red
                        margin-left .05rem
        .more   
            width 100%
            height .3rem
            line-height .3rem
            font-size .1rem
            color #108ee9
            text-align center
</style>