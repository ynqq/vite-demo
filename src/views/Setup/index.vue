<template>
  <div>
    <div @click="handleBack">返回</div>
    <child :num="num" ref="childRef" @change="handleChildChange" />
    {{ num }}
    <div class="btn" @click="handleAdd">+++</div>
    <div>
      <div
        v-for="(item, index) in list"
        :ref="(el) => (refList[index] = el)"
        :key="index"
        @click="handleShowItem(item)"
      >
        {{ item.name }}
      </div>
      <div>
        {{ list[selectVal].name }}
      </div>
      <select
        name=""
        v-model="selectVal"
        id=""
        @change="handleSelectChange('123')"
      >
        <option v-for="(item, index) in list" :key="index" :value="index">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">


import child from "./components/child.vue";
import {
  onMounted,
  provide,
  reactive,
  ref,
  watchEffect,
  getCurrentInstance,
} from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "Setup",
  components: {
    child,
  },
  setup(props, context) {
      function aaa(){}


    console.log(this);
    const { ctx }= getCurrentInstance();
    console.log(ctx);
    const getText = (): {childRef: any, refList: any} => ({
      childRef,
      refList,
    });
    provide <typeof getText>("getText", getText);
    const childRef = ref(null);
    const refList = ref([]);
    let num = ref(0);
    let selectVal = ref(0);
    let list = reactive([{ name: "张三" }, { name: "李四" }]);
    const handleAdd = function () {
      num.value++;
    };
    const handleShowItem = (item) => {
      console.log(item);
    };
    const handleSelectChange = (e, a) => {
      console.log(e);
    };
    const handleChildChange = (val) => {
      console.log(val);
      num.value = val;
    };

    const router = useRouter();

    const handleBack = () => {
      router.back();
    };

    onMounted(() => {
      console.log("mounted", childRef.value.count);
      setTimeout(() => {
        // console.log(refList.value[0].innerText);
      }, 1000);
    });

    return {
      num,
      handleAdd,
      list,
      handleShowItem,
      selectVal,
      handleSelectChange,
      handleChildChange,
      childRef,
      refList,
      handleBack,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>