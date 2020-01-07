<template>
    <div class="down">
        <h4>订单信息</h4>
        <hr>
        <p>录入人员：<span>{{item.wname}}</span></p>
        <p>录入日期：<span>{{item.rentalDate}}</span></p>
        <p>客户预算：<span>{{item.budget}}</span></p>
        <p>需求人数/面积：<span>{{item.demandNumber}}人</span></p>
        <p>期望区域：<span>{{item.rentalArea}}</span></p>
        <p>期望租期：<span>{{item.lease}}个月</span></p>
        <p>租凭需求：<span class="xuqiu">{{item.demandRental}}</span></p>
    </div>
</template>
<script>
export default{
    props:['item']
}
</script>
<style lang='stylus' scoped>
    .down
        margin-top .2rem
        height 3.2rem
        border-radius 6px
        box-shadow 1px 1px 5px 1px #ccc
        background-color #fff
        letter-spacing 1px
        padding-top .15rem
        h4
            font-size .17rem
            font-weight 500
            text-indent .19rem
        hr
            margin-top .13rem 
        p
            margin-top .13rem
            padding-left  .19rem
            
            span
                color #666 
            .xuqiu
                display inline-block
                width 2.45rem
                vertical-align top 
</style>