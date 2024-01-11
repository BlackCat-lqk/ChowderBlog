<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Menu as IconMenu } from '@element-plus/icons-vue'
const route = useRouter()
route.push({ path: '' })
const gotoRoute = (val: number) => {
  if (val) {
    route.push({ path: '/Pinia' })
  } else {
    route.push({ path: '/' })
  }
}
</script>

<template>
  <div class="sideBarBox">
    <el-menu active-text-color="#ffd04b" class="el-menu-vertical-demo" default-active="1">
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span @click="gotoRoute(0)">收录</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span @click="gotoRoute(1)">Pinia</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><icon-menu /></el-icon>
        <span>Vue-Router</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.sideBarBox {
  background-color: var(--bg-color);
  border-right: 1px solid var(--text-color);
  height: 100%;
  .el-menu {
    border: 0;
    background-color: var(--bg-color);
    .el-menu-item {
      color: var(--text-color);
    }
    .el-menu-item.is-active{
      color: #409eff;
    }
    .el-menu-item:hover{
      background-color: transparent;
      color: #409eff;
    }
  }
}
</style>
