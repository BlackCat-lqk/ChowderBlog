<script setup lang="ts">

</script>

<template>
  <div class="mainBox">
    <span>{{ $t('title') }}</span>
  </div>
</template>

<style lang="less" scoped>
  .mainBox{
    width: 100vw;
    height: 100vh;
    background-color: var(--bg-color);
    span {
      color: var(--text-color);
    }
  }
</style>
