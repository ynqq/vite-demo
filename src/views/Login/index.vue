<template>
  <div class="Login">
    <b-b @click="handleClick2">
      <el-button>???</el-button>
    </b-b>
    <el-input placeholder="请输入用户名" v-model="userName"></el-input>
    <!-- <div class="loginbg"></div>
    <div class="loginMain">
      <h3>登录</h3>
      <div class="formBox">
        <el-form>
          <el-form-item>
            <el-input placeholder="请输入用户名" v-model="userName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="请输入密码"
              v-model="passWord"
              type="passWord"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleClick" type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  ref,
  ComponentInternalInstance,
  SetupContext,
  shallowRef,
  useContext,
  BaseTransition,
} from "vue";
import { VueConstructor } from "vue/types";
import { responseBody } from "@/axios/axios";
export default defineComponent({
  name: "Login",
  setup() {
    const current = getCurrentInstance();
    const { ctx } = current;
    ctx.http()
    console.log();
    
    const userName = ref<string>("");
    const passWord = ref<string>("");
    const handleClick = ():void=> {
      ctx
        .$fetch({
          url: `yuanyiPC/userLoginPC`,
          data: {
            json: JSON.stringify({
              userName: userName.value,
              passWord: passWord.value,
            }),
          },
        })
        .then((res: responseBody) => {
          if (res.userCode) {
            ctx.$router.push(`/Index`);
          } else {
            ctx.$message.warning(res.msg || "操作失败");
          }
        });
    };
    return () => ({
      userName,
      passWord,
      handleClick
    });
  },
});
</script>

<style lang="scss" scoped>
.Login {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginbg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: url("/@static/images/demox1.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 0.3;
  }
  .loginMain {
    position: relative;
    z-index: 2;
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba($color: rgb(0, 0, 0), $alpha: 0.3);
    border-radius: 10px;
    color: #fff;
    h3 {
      text-align: center;
      line-height: 60px;
    }
    .formBox {
      display: flex;
      justify-content: center;
      align-items: center;
      // flex: 1;
      width: 100%;
      .el-form {
        position: relative;
        flex: 1;
        z-index: 2;
        padding: 0 15px;
        box-sizing: border-box;
        width: 100%;
        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>