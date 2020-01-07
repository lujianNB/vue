<template>
<div class="qian">
    <ul>
        <li>
            <a href="javascript:;">
                <div>付款方式(不可改)</div>
                <div class="user">网银</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>收款日期</div>
                <div>{{kehu.entryDate}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>合同起租日</div>
                <div>{{kehu.rentalDate}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>报单日期</div>
                <div>{{kehu.rentalDate}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">            
                <div>财务核算日期</div>
                <div>{{kehu.rentalDate}}</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>未开票金额</div>
                <div>********</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>佣金金额</div>
                <div></div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>未收款金额</div>
                <div>*******</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>签约日期</div>
                <div>***********</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>佣金协议日期区间</div>
                <div>***********</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>入驻金额</div>
                <div>********</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>实际签约人数</div>
                <div>**********</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>实际签约月租金</div>
                <div>*******</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>租聘物业</div>
                <div>*********</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>租聘房源类型</div>
                <div>**************</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>成交物业类型</div>
                <div>****************</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>物业地址</div>
                <div>***************</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>租聘期限（月）</div>
                <div>**************</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>合同金额</div>
                <div>************</div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>签约确认单</div>
            </a>
        </li>
    </ul>
</div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return {
            kehu:{}
        }
    },
    mounted(){
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
.qian
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
        li:nth-of-type(2),li:nth-of-type(8)
            margin-bottom .12rem
</style>