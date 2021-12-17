<template>
  <div class="nav-container">
    <div class="nav-left">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="nav-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ $store.getters.userInfo.name }}
          <!-- <el-icon class="down-icon">
            <arrow-down-bold />
          </el-icon> -->
          <i class="el-icon-caret-bottom"></i>
          <!-- <el-icon-arrow-down></el-icon-arrow-down> -->
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
console.log(this)
</script>

<style lang="scss" scoped>
.nav-container {
  font-size: 16px;
  color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-left {
    padding-left: 44px;
    img {
      vertical-align: middle;
    }
  }
  .nav-right {
    padding-right: 20px;
  }
  .el-dropdown-link {
    font-size: 16px;
    color: #333;
  }
}
</style>
