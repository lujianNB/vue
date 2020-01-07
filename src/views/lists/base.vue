<template>
    <div class="base">
    <ul>
        <li>
            <a href="javascript:;">
                <div>录入人员(不可改)</div>
                <div class="user">{{username}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>更新时间</div>
                <div>{{kehu.rentalDate}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>垂问来源</div>
                <div>{{kehu.customerSource}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>跟进状态</div>
                <div>{{kehu.status|xiugai}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">            
                <div>当前标签</div>
                <div>编辑标签&gt;</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>期望区域</div>
                <div>{{kehu.rentalArea}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>预约类型</div>
                <div>{{kehu.rentalUse}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>预算</div>
                <div>{{kehu.budget}}/月</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>起租日</div>
                <div>{{kehu.updateDate}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>期望租期</div>
                <div>{{kehu.demandNumber}}个月</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>预约房源点</div>
                <div>{{kehu.region}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>办公人数/面积</div>
                <div>20人/100平方米</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>客户行业</div>
                <div>{{kehu.customerIndustry}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>租聘需求</div>
                <div>
                    <div>{{kehu.demandRental}}</div>
                    <div>&gt;</div>
                </div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>联系人</div>
                <div>{{kehu.userName}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>联系人电话</div>
                <div>{{kehu.userPhone}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>邮箱地址</div>
                <div>{{kehu.userEmail}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>性别</div>
                <div>{{kehu.userSex}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>公司名称</div>
                <div>{{kehu.userCompany}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>公司职位</div>
                <div>{{kehu.position}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>兴趣爱好</div>
                <div>{{kehu.userHobby}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>家庭信息</div>
                <div>{{kehu.userFamily}}</div>
            </a>
        </li>
    </ul>
</div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return {
            kehu:{},
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
    mounted(){
        this.username=localStorage.getItem('Login')
        axios({
                url:'http://121.36.58.166:9091/getUser',
                params:{
                    id:this.$route.params.id
                }
            }).then(res=>{
                this.kehu=res.data.data
            })
    }
}
</script>
<style lang='stylus' scoped>
@import "../../assets/stylesheets/border.styl";
.base
    background-color #f5f5f9
    height  5.74rem
    overflow auto
    ul
        margin-top .12rem
        width 100%
        height 100%
        background-color #f5f5f9
        display flex
        flex-direction column
        li 
            background-color #fff
            width 3.51rem
            height .44rem
            padding 0 .12rem
            a
                display flex
                width 3.51rem
                height 100%
                border 0 0 1px 0,#ccc
                div
                    flex 1
                    height 100%
                    line-height .44rem
                    color #333
                    font-size .1rem
                div:nth-of-type(2)
                    text-align right
                    color #aaa
                    font-size .06rem
        li:nth-of-type(1)
            a 
                div:nth-of-type(2)
                    color #333
        li:nth-of-type(5),li:nth-of-type(14)
            margin-bottom .14rem
        li:nth-of-type(14)
            height .98rem
            a 
                flex-direction column
                div:nth-of-type(1)
                    flex 88
                div:nth-of-type(2)
                    flex 100
                    display flex
                    div:nth-of-type(1)
                        flex 75
                        color #aaa
                        font-size .06rem
                        line-height normal
                        text-align left 
                    div:nth-of-type(2)
                        flex 25
                        text-indent .85rem
                        color #aaa
                        font-size .06rem
                        line-height .5rem
</style>