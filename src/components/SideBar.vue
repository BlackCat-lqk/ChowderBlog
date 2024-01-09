<script setup lang="ts">
  import { useRouter } from 'vue-router'
  const route = useRouter()
  route.push({path:""})
  const gotoRoute = (val: number) => {
    if(val){
      route.push({path:"/Pinia"})
    }else {
      route.push({path:"/"})
    }
  }

</script>

<template>
  <div class="sideBarBox">
    <div @click="gotoRoute(0)">Home</div>
    <div @click="gotoRoute(1)">Pinia</div>
  </div>
</template>

<style lang="less" scoped>
.sideBarBox {
  background-color: antiquewhite;
  height: 100%;
}
</style>
