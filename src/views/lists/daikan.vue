<template>
<div class="daikan">
    <ul>
        <li>
            <div>带看房源</div>
            <div><input type="text" v-model="origin" placeholder="请输入房源"></div>
        </li>
        <li>
            <div>房源类型</div>
            <div><input type="text" v-model="type" placeholder="请输入房源类型"></div>
        </li>
        <li>
            <div>带看结果</div>
            <div>
                <select v-model="result" >
                    <option selected value="满意" >满意</option>
                    <option value="不满意">不满意</option>
                </select>
            </div>
        </li>
        <li>
            <p>备注内容</p>
            <textarea placeholder="请输入备注内容" @input="lj" v-model="content"></textarea>
            <div><span :style="length>100?'color:red':''">{{length}}</span><span>/100</span></div>
            <div @click="tijiao">提交</div>
        </li>
    </ul>
</div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return {
            length:0,
            origin:'',
            type:'',
            result:'',
            time:'',
            content:''
        }
    },
    methods:{
        lj(){this.length=document.querySelector('textarea').value.length},
        tijiao(){
            if(this.origin&&this.type&&this.result&&this.content){
                let     date=new Date()
                let     y=date.getFullYear()
                let     m=date.getMonth()+1>=10?date.getMonth()+1:''+0+(date.getMonth()+1)
                let     d=date.getDate()>=10?date.getDate():''+0+(date.getDate())
                let     h=date.getHours()>=10?date.getHours():''+0+(date.getHours())
                let     fen=date.getMinutes()>=10?date.getMinutes():''+0+(date.getMinutes())
                let     s=date.getSeconds()>=10?date.getSeconds():''+0+(date.getSeconds())
                this.time=y+'-'+m+'-'+d+' '+h+':'+fen+':'+s
                axios({
                    url:'http://121.36.58.166:9091/setlook',
                    method:'POST',
                    data:{
                        uid:this.$route.params.id,
                        signTime:this.time,
                        houses:this.origin,
                        housesType:this.type,
                        lookResult:this.result,
                        lookContent:this.content
                    }
                })
                this.$router.push(`/list/${this.$route.params.id}/gen`)
            }
        }
    }
}
</script>
<style lang='stylus' scoped>
.daikan 
    flex 1
    background-color #f5f5f9
    overflow auto
    ul 
        margin-top .12rem
        width 3.51rem
        height 6.05rem
        background-color #fff
        padding 0 .12rem
        li:nth-of-type(1),li:nth-of-type(2),li:nth-of-type(3)  
            height .42rem
            border-bottom solid 1px #f5f5f9
            display flex
            align-items center
            div
                flex 1
            div:nth-of-type(1)
                font-size .15rem
                color #333
            div:nth-of-type(2)
                text-align right
                input 
                    width 100%
                    height 100%
                    border none     
                    outline none 
                    color #333
                    text-align right 
        li:nth-of-type(4)
            height 4.75rem
            display flex
            flex-direction column
            p 
               height .4rem
               line-height .4rem
               font-size .15rem
               color #333
               width 100% 
            textarea
                width 3.27rem
                height .96rem
                resize none
                padding .12rem
                border none
                font-size .1rem
            >div:nth-of-type(1)
                width 100%
                height .2rem
                display flex
                justify-content flex-end
                align-items center
                span 
                    color #aaa
                    font-size .06rem
            >div:nth-of-type(2)
                width 3.45rem
                height .45rem
                background-color #108ee9
                margin-top .2rem
                line-height .45rem
                text-align center
                color #eee
                font-weight 700
                font-size .18rem
                border-radius .1rem
</style>