<template>
<div class="h-full w-full">
  <router-view></router-view>
</div>
</template>

<script>
import RouterList from './RouterList.js'

export default {
  name: 'Router',
  data () {
    return {}
  },
  router: RouterList
}
</script>

<style lang="less" scoped>
</style>
