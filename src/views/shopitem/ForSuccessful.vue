<template>
    <div class="forSuccessful">
        <div>
            <i class="fas fa-check-circle" :class="ClassName"></i>
            <p class="state">{{result.data}}</p>
            <p class="indent">{{text}}</p>
        </div>
        <button @click="goList">查看订单</button>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                text:'',
                ClassName:'',
                result:this.$route.params
            }
        },
        methods:{
            goList(){
                this.$router.push('/list/all')
            },
        },
        mounted(){
            if(this.result.data=='竞价失败'){
                this.text='订单被150积分拍下',
                this.ClassName='fa-exclamation-circle'
            }else if(this.result.data == '竞价成功'){
                this.text='订单已经入客户列表'
            }else if(this.result.data == undefined){
                this.text='无人竞拍，稍后将由客服手动分发订单',
                this.ClassName='fa-exclamation-circle'
            }
        }
        
    }
</script>
<style lang='stylus' scoped>
    .forSuccessful
        height 100%
        padding 0 .1rem
        background-color rgb(248,248,248)
        div
            display flex
            flex-direction column
            justify-content center
            align-items center
            background-color #fff
            margin .2rem 0
            padding .25rem 0
            border-radius 5px
            box-shadow 0px 1px 4px 3px #eee
            .fa-check-circle 
                color rgb(82,196,26)
                font-size .61rem
            .fa-exclamation-circle
                color rgb(16,142,233)
            p
                margin .15rem 0 .12rem 
                color #000
            .state
                font-size .17rem
            .indent
                color rgb(164,164,164)
        button 
            width 100%
            height .47rem
            border-radius 7px
            background-color rgb(16,142,233)
            color #fff
            border 0
</style>