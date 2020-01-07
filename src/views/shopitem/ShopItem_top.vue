<template>
    <div class="top">
        <p class="nowintegral">当前积分<i class="fas fa-eye"></i></p>
        <p class="integral">5000</p>
        <p class="period">当前为<span class="nowperiod">{{auction}}</span>阶段，<span class="time">{{time}}</span>秒后结束</p>
    </div>
</template>
<script>
export default{
    data(){
        return {
            time:30,
            auction:'竞价',
            timer1:null,
            num:0
        }
    },
    props:['state'],
    mounted(){
            this.timer1=setInterval(() => {
                this.time--;
                this.num++
                if(this.num == 30){
                    this.auction='竟速'
                    this.time=60
                }else if(this.state=='已竞价'&& this.num == 30){
                    clearInterval(this.timer1)
                    this.$emit('onreq',1)
                }else if(this.num == 90){
                    this.auction='流拍'
                    this.time=3
                }else if(this.state=='已竞价'&&this.num>30){
                    clearInterval(this.timer1)
                    this.$emit('onreq',2)
                }else if(this.num==93){
                    clearInterval(this.timer1)
                    this.$emit('onreq',3)
                }else if(this.num>=30){
                    document.querySelector('.nowperiod').style.background="rgb(248,215,20)"
                }else if(this.num>90){
                    document.querySelector('.nowperiod').style.background='red'
                }
                
            }, 1000)
    },
      
  
}
</script>
<style lang='stylus' scoped>
    .top
        height 1.2rem
        border-radius 6px
        box-shadow 1px 1px 5px 1px #ccc
        background-color #fff
        padding .19rem
        letter-spacing 1px
        .nowintegral
            font-size .13rem
            color #000
            font-weight 400
            text-align center
            .fa-eye 
                color #ccc
        .integral
            font-size .25rem
            font-weight 600
            text-align center
            margin-top .13rem
            margin-bottom .15rem
        .period
            font-size .14rem
            text-align center
            color #999
            letter-spacing 1px
            .nowperiod
                display inline-block
                background #108ee9
                color #fff
                line-height .17rem
                padding 0 .07rem
                text-align center
                border-radius 3px
            .time
                color #108ee9
                font-weight 600
</style>