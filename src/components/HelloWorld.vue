<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <van-button type="primary">测定撒</van-button>
    <p>测试rem</p>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    [Button.name]: Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
p {
  margin: 32px 0 0;
}

</style>
