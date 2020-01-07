<template>
    <div class='shop'>
        <div v-if="f" class="null">
            <img src="../../img/shopnull.png" alt="">
            <span>当前没有待竞价的订单，请稍后再来！</span>
        </div>
        <ul v-else>
            <router-link
            :to="{
                name:'ShopItem',
                query:{
                    wid:1228,
                    itemUid:item.uid,
                    itemId:item.id
                }
            }"
            v-for="item in lists"
            :key="item.id"  
            tag="li">
                <h3>{{item.wname}}</h3>
                <hr>
                <p>完成积分{{item.bidScore}}</p>
            </router-link >
        </ul>
    </div>
</template>
<script>
import request from '../../utils/request';
export default {
    data(){
        return {
            lists:[],
            f:true,
            wid:this.$route.query,
        }
    },
    async mounted (){
        await request({
            url:`http://121.36.58.166:9091/biddinglist`,
            method:'get',
        }).then(res=>{
            this.lists=res.data.data
        }).catch(err=>{
            console.log('err',err)
        })
        // this.lists=result.lists;//后端数据
        if(this.lists.length==0){
            this.f=true
        }else{
            this.f=false
        }
    }
    
}
</script>
<style lang='stylus' scoped>
    .shop
        height 80%
        overflow auto
        .null
            margin-top 1rem
            display flex
            flex-direction column
            justify-content center
            align-items center
            img
                width 2.2rem
                height 1.5rem
                margin-bottom .2rem
            span 
                font-size .16rem
                color rgb(173,173,173)
        ul
            padding .1rem
            li
                padding .1rem
                margin-bottom .1rem 
                border 1px solid #eee
                -webkit-box-shadow  1px 1px 1px 1px #ccc
                h3
                    font-size .3rem
                    font-weight 500
                p
                    font-size .14rem
                    color rgb(174,174,174)
                    text-overflow ellipsis 
                    overflow hidden
                    white-space nowrap
</style>