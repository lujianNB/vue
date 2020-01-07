<template>
<div class="pinggu">
    <div>
        <div></div>
        <div>评估内容</div>
    </div>
    <ul>
        <li><p>某某某2018-08-08 15:15:15回复:</p><p>继续跟进</p></li>
        <li><p>某某某2018-08-08 15:15:15回复:</p><p>好的</p></li>
    </ul>
    <div>
        <div></div>
        <div>回复评估</div>
    </div>
    <div>
        <input type="text" placeholder="请输入评估内容" v-model="content">
        <div><span :style="length>100?'color:red':''">{{length}}</span><span>/100</span></div>
        <div v-if="f">回复</div>
    </div>
</div>
</template>
<script>
export default{
    data(){
        return {
            f:false,
            content:'',
            length:0
        }
    },
    watch:{
        content(){
            if(this.content){
                this.f=true
                this.length=this.content.length
            }else{
                this.f=false
            }
        }
    }
}
</script>
<style lang='stylus' scoped>
@import "../../assets/stylesheets/border.styl";
.pinggu    
    background-color #f5f5f9
    height  5.74rem
    overflow auto
    >div:nth-of-type(1)
        width 3.51rem
        height .45rem
        padding 0 .12rem
        display flex
        border 0 0 1px 0,#ccc
        align-items  center
        background-color #fff
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
    ul
        width 3.51rem
        padding 0 .12rem
        margin-bottom .12rem
        background-color #fff
        li 
            width 100%
            height .6rem
            p 
                height .3rem
                width 100%
                font-size .1rem
                color #333
                line-height .3rem
            p:nth-of-type(2)
                color #108ee9
    >div:nth-of-type(2)
        width 3.51rem
        height .45rem
        padding 0 .12rem
        display flex
        border 0 0 1px 0,#ccc
        align-items  center
        background-color #fff
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
    >div:nth-of-type(3)
        background-color #fff
        padding 0 .12rem
        width 3.51rem
        display flex
        flex-direction column
        align-items flex-end
        input 
            width 100%
            height .8rem
            border-width 0
            outline none
        div
            width 100%
            height .2rem
            display flex
            justify-content flex-end
            span 
                color #aaa
                font-size .1rem
        div:nth-of-type(2)
            width .25rem
            height .2rem
            text-align center
            line-height .2rem
            font-size .1rem
            background-color #108ee9
</style>