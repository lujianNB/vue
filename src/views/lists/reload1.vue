<template>
<div>
</div>
</template>
<script>
export default{
    mounted(){
        let id=location.search.split('=').pop()
        this.$router.push(`/beizhu/${id}`)
    }
}
</script>
<style lang='stylus' scoped>
</style>