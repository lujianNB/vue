<template>
<div class="tianjia">
    <div>
        <i class="fas fa-chevron-left" @click="fanhui"></i>
        <span>日报</span>
        <span class="tj">添加备注</span>
        <span @click="tijiao">提交</span>
    </div>
    <div>
        <textarea @input="lj" v-model="value"></textarea>
        <div><span :style="length>100?'color:red':''">{{length}}</span><span>/100</span></div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return {
            time:'',
            length:0,
            value:''
        }
    },
    methods:{
        lj(){this.length=document.querySelector('textarea').value.length},
        fanhui(){
            this.$router.go(-1)
        },
        tijiao(){
            if(this.value.length>0&&this.value.length<101){
                let     date=new Date()
                let     y=date.getFullYear()
                let     m=date.getMonth()+1>=10?date.getMonth()+1:''+0+(date.getMonth()+1)
                let     d=date.getDate()>=10?date.getDate():''+0+(date.getDate())
                let     h=date.getHours()>=10?date.getHours():''+0+(date.getHours())
                let     fen=date.getMinutes()>=10?date.getMinutes():''+0+(date.getMinutes())
                let     s=date.getSeconds()>=10?date.getSeconds():''+0+(date.getSeconds())
                this.time=y+'-'+m+'-'+d+' '+h+':'+fen+':'+s
                axios({
                    url:'http://121.36.58.166:9091/daily',
                    method:'POST',
                    data:{
                        uid:this.$route.params.id,
                        daily:this.value,
                        dailyDate:this.time
                    }
                })
                this.$router.push(`/reload1?id=${this.$route.params.id}`)
            }
        }
    }
}
</script>
<style lang='stylus' scoped>
.tianjia 
    width 100%
    flex 1
    overflow auto
    background-color #f5f5f9
    >div:nth-of-type(1)
        padding 0 .12rem
        width 3.51rem
        height .45rem
        display flex
        align-items center
        background-color #fff
        margin-bottom .2rem
        .tj 
            flex 1
            text-align center
            color #333
            font-size .2rem
        i,span 
            font-size .15rem
            color #108ee9
        i 
            padding 0 .05rem 0 0
    div:nth-of-type(2)
        height 1.53rem
        width 3.51rem
        padding 0 .12rem
        background-color #fff
        textarea 
            width 3.27rem
            height .96rem
            resize none
            padding .12rem
            border none
        div 
            width 100%
            display flex
            align-items center
            justify-content flex-end
            span 
                color #aaa
                font-size .06rem
</style>