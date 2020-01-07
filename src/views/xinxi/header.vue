<template>
     <header>
        <div  @click.stop="huiHome">
            <i class="fas fa-rainbow"></i>
            <span>马上办公</span>
        </div>
        <div>客户信息录入</div>
        <div>
         提交>
        </div>
    </header>
</template>
<script>
export default{
    methods:{
        huiHome(){
            this.$router.push('/home')
        }
    }
}
</script>
<style lang='stylus' scoped>
header 
    height .5rem
    background-color #108ee9
    display flex
    div:nth-of-type(1)
        flex 190
        display flex
        justify-content space-around
        align-items center
        
        i 
            font-size .2rem
            color white
        span 
            font-size .14rem
            color white
            font-weight 700
    div:nth-of-type(2)
        flex 300
        color #ddd
        line-height  .5rem
        padding-left .4rem 
        text-align left 
        font-size .16rem
    div:nth-of-type(3)
        flex 100
        color #ddd
        line-height .5rem
        
</style>