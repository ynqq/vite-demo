<template>
  <div>child{{ num }}</div>
  {{height}}
  <div @click="handleChildAdd" >
      {{numText}}
  </div>
</template>

<script>
import { computed, inject, reactive, ref, toRef, watch, watchEffect, getCurrentInstance, isReactive } from 'vue';
export default {
  name: "child",
  props: {
    num: "",
  },
  emits: {
      change: (val) => {
          console.log(val)
          return true
      }
  },
  setup(props, context) {
      console.log(isReactive(props))
      console.log(getCurrentInstance().ctx)
      const pNum = toRef(props, "num")
      const getText = inject("getText")
      let num = ref(props.num)
      let count = ref(100)
      const handleChildAdd = () => {
          numText.value = Math.random()
      }
      const numText = computed({
          get: () => {
              if(pNum.value > .5){
                  return "大于.5"
              }else{
                  return "小于.5"
              }
          },
          set: (val) => {
             context.emit("change", val)
          }
      })
      return {
          handleChildAdd,
          numText,
          count
      }
  }
};
</script>

<style lang="scss" scoped>
</style>