<template>
  <div>
    {{ numText }}
  </div>
</template>

<script>
export default {
  name: "iChild",
  props: {
    num: "",
  },
  computed: {
      numText(){
          console.log(this.num)
          if(this.num > .5){
              return  "大于"
          }
          return  "小于"
      }
  }
};
</script>

<style lang="scss" scoped>
</style>