<template>
  <div class="login-wrapper">
    <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginRules">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="role" />
        </span>
        <el-input placeholder="用户名" v-model="loginForm.username" name="username" type="text"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password"></svg-icon>
        </span>
        <el-input
          placeholder="密码"
          v-model="loginForm.password"
          :type="passwordType"
          name="password"
        ></el-input>
        <span class="show-pwd">
          <el-icon class="svg-container" @click="onChangePwdType">
            <svg-icon :icon="passwordType === 'password' ? 'eye' : 'eye-open'"></svg-icon>
          </el-icon>
        </span>
      </el-form-item>
      <el-button
        @click="loginFunc"
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
      >登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { validatePassword } from './rules'

import { inject, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
const $message = inject('$message')
const loginForm = ref({
  username: 'pb',
  password: '123456'
})
const loginRules = ref({
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})

const passwordType = ref('password')
const onChangePwdType = () => {
  // 适用ref声明得数据
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}

const loading = ref(false)
const store = useStore()
const router = useRouter()
const route = useRoute()
const loginFormRef = ref(null)
const loginFunc = () => {
  loginFormRef.value.validate((valid) => {
    if (!valid) return
    loading.value = true
    console.log(store.dispatch)
    store
      .dispatch('user/login', loginForm.value)
      .then(() => {
        $message.success('登录成功~')
        console.log(route)
        console.log(router)
        loading.value = false
        router.push({
          path: '/'
        })
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
// $bg: #fff;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-wrapper {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rg;
    }
    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: none;
        border-radius: 0;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        caret-color: $cursor;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    // top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
