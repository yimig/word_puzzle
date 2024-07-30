<template>
  <div class="flex justify-center items-center">
    <div class="word justify-center items-center">
      <div>{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comp',
  props: ['text'],
  data () {
    return {

    }
  },
  components:{
  },
  computed:{
  }
}
</script>
<style lang="less" scoped>
@import "res/style/comp.less";
.word{
  font-size: 10em;
}
</style>
