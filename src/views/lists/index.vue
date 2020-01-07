<template>
    <div class="all">
        <ul>
            <li v-for="(item,index) of status" :key="index">
                <router-link :to="{name:item.name}" active-class="active">{{item.content}}</router-link >
            </li>
        </ul>
        <ul>
            <li v-for="item of NewUsers" :key="item.id">
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
                        <div v-if="item.f" @click.prevent="changeStatus(item.id)">接受</div>
                        <div v-if="item.f" @click.prevent="tanchuang(item.id)">拒绝</div>
                    </div>
                </router-link>
            </li>
        </ul>
        <!-- 弹窗 -->
        <van-dialog
            v-model="show"
            title="确定要拒绝订单吗"
            show-cancel-button
            :beforeClose="changeBtn"
        >
        </van-dialog>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return {
            count:1,
            id:'',//删除信息的匹配id
            show:false,//控制弹窗
            status:[
                {
                    content:'全部',
                    name:'all'
                },
                {
                    content:'新分派',
                    name:'new'
                },
                {
                    content:'跟进中',
                    name:'running'
                },
                {
                    content:'签约中',
                    name:'qianyue'
                },
                {
                    content:'更多',
                    name:'more'
                }
            ],
            users:[]
        }
    },
    computed:{
        NewUsers(){
            if(this.$route.name=='all'){
                return this.users
            }else if(this.$route.name=='new'){
                return this.users.filter(elm=>{
                    return elm.status=='新分派'
                })
            }else if(this.$route.name=='running'){
                return this.users.filter(elm=>{
                    return elm.status=='跟进中'
                })
            }else if(this.$route.name=='qianyue'){
                return this.users.filter(elm=>{
                    return elm.status=='签约中'
                })
            }else{
                return []
            }
        }
    },
    filters:{
        xiugai(val){
            return (''+val).length>3?val.slice(0,3):val
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
    methods:{
        // 控制弹窗方法
        tanchuang(id){
            this.id=id
            this.show=true
        },
        changeBtn(action,done){//关闭前的回调函数，调用 done() 后关闭弹窗，调用 done(false) 阻止弹窗关闭
            if (action === 'cancel') {
                done() 
            }
            if (action === 'confirm') {
                // this.users.forEach(elm=>{
                //     if(elm.id==this.id){//遍历找到对应信息在数组中的下标，这里用id匹配，而不是用下标是因为用下标操作，执行删除操作之后信息对应的下标变了，之后的操作会出问题。
                //         const index=this.users.indexOf(elm)
                //         this.users.splice(index,1)//这里要请求后端进行数据库操作删除对应的信息
                //     }
                // })
                axios({
                    url:'http://121.36.58.166:9091/allocating',
                    params:{
                        id:this.id
                    }
                    })
                this.$router.push('/reload')
                done()
            }
        },
        changeStatus(id){//点击接受修改用户信息状态
            this.users.forEach(elm=>{
                    if(elm.id==id){//遍历找到对应信息
                        elm.status='跟进中'    //这里要请求后端进行数据库操作修改对应的信息的状态
                        elm.status=='新分派'?elm.f=true:elm.f=false//控制不同状态是否显示接受拒绝按钮
                }
            })
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
.all
    flex 1
    display flex
    flex-direction column
    justify-content space-between
    background-color #f5f5f9
    ul 
        width 100%
        background-color #fff
    ul:nth-of-type(1)
        display flex
        height .43rem
        li 
            flex 1
            height 100%
            a 
                display block
                width 100%
                height 100%
                text-align center
                line-height .43rem
                color #555
                font-size .14rem
                &.active
                    color #108ee9
                    border-bottom 2px solid #108ee9
    ul:nth-of-type(2)
        height 5.63rem
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