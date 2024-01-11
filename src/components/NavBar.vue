<script setup lang="ts">
import { ref } from 'vue'
import { Hide, View } from '@element-plus/icons-vue'
import { setTheme } from '../util/theme'
import { Search } from '@element-plus/icons-vue'
import i18n from '@/lang'
const value1 = ref(true)
const value2 = ref(true)
let input = ref('')
const langChange = (val: boolean) => {
  console.log(val)
  val ? (i18n.global.locale = 'zh') : (i18n.global.locale = 'en')
}
const themeChange = (val: boolean) => {
  val ? setTheme('dark') : setTheme('light')
}
</script>

<template>
  <div class="navBarBox">
    <div class="avatarBox">
      <div><img src="../assets/logo.svg" alt="avatar" /></div>
      <div><span>Chowder Blog</span></div>
      <div>
        <el-input
          v-model="input"
          class="w-50 m-2"
          size="large"
          placeholder="Please Input"
          :prefix-icon="Search"
        />
      </div>
    </div>
    <div class="switchBox">
      <div>
        <el-switch
          @change="langChange"
          v-model="value1"
          :active-action-icon="View"
          :inactive-action-icon="Hide"
        />
      </div>
      <div>
        <el-switch
          @change="themeChange"
          v-model="value2"
          :active-action-icon="View"
          :inactive-action-icon="Hide"
        />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@FLEX_CENTER: {
  display: flex;
  justify-content: center;
  align-items: center;
};
.navBarBox {
  height: 55px;
  padding: 0 10vw;
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--text-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .avatarBox {
    @FLEX_CENTER();
    img {
      width: 55px;
      height: 55px;
    }
    span {
      color: var(--text-color);
    }
    & > div{
      margin-right: .3vw;
    }
  }
  .switchBox {
    @FLEX_CENTER();
    & > div {
      margin: 0 0.5vw;
    }
  }
}
</style>
