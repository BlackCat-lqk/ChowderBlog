<template>
  <div id="mainBox">
    <header>
      <NavBar></NavBar>
    </header>
    <div id="contentMainBox">
      <div class="sideBarBox">
        <SideBar></SideBar>
      </div>
      <div class="contentBox">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
</script>

<style lang="less" scoped>
@FLEX_CENTER: {
  display: flex;
  justify-content: center;
  align-items: center;
};
#mainBox {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color);
  span {
    color: var(--text-color);
  }
  #contentMainBox {
    flex: 1;
    display: flex;
  }
}
</style>
