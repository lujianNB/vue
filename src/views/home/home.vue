<template>
<div class="home">
</div>
</template>
<script>
export default{
    mounted(){
        if (!localStorage.getItem('Login')) {
                this.$router.push('/login')
    }
    }
}
</script>
<style lang='stylus' scoped>
.home
    height 0
    overflow auto
</style>