<template>
    <div>
        <el-button v-loading="loading" @click="handleClick">点击</el-button>
    </div>
</template>

<script>
    export default {
        name: "Index",
        directives: {
            loading: {
                mounted(el, value) {
                    console.log(el)
                    console.log(value)
                    el.addEventListener("click", () => {
                        if(!el.disabled){
                            el.disabled = true
                        }
                    })
                },
            }
        },
        data(){
            return {
                loading: false,
            }
        },
        methods: {
            handleClick(e){
                console.log(e)
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                }, 1000);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>