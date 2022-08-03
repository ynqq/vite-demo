<template>
  <div >
    <slot></slot>
  </div>
</template>

<script>
/**
 * 防止重复点击的按钮
 * click函数如果有异步必须返回promise
 */
import { getCurrentInstance } from "vue";
export default {
  name: "baseBtn",
  data() {
    return {
      disable: false,
      num: 0,
    };
  },
  methods: {
    async handleClick(...arg) {
      let _events = this.$attrs.onClick;
      console.log(this.$attrs)
      if (!_events) {
        return;
      }
      this.num++;
      if (this.num > 3) {
        this.$message.warning("操作过快");
      }
      console.log(this.disable)
      if (this.disable) return;
      this.disable = true;
      let pr = _events(...arg);
      if (pr && typeof pr.then === "function") {
        console.log(">>>")
        await pr;
      }
      console.log(">>>1")
      this.disable = false;
      this.num = 0;
    },
  },
  created() {
    const clickEvent = this.$attrs.onClick;
    if (!clickEvent) {
      console.warn("baseBtn must have a click event");
    }
  },
};
</script>

<style lang="scss" scoped>
</style>