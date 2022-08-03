<template>
  <div>
    <el-button type="primary">按钮</el-button>
    {{ num }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

interface ListItem {
  name: string;
  age: number;
}

export default defineComponent(function TsCom() {
  const num = ref(0);
  const bb = () => {};
  const cc: ListItem = reactive({ name: "", age: 123 });
  const list: ListItem[] = [
    { name: "", age: 123 },
    { name: "", age: 123 },
  ];

  return {
    num,
  };
});
</script>

<style scoped>
</style>