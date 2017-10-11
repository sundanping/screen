<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
//    获取屏幕高度
    let windowHeight = window.innerHeight
    console.log(windowHeight)
    document.getElementById('app').style.height=windowHeight + 'px'
  }
}
</script>

<style scoped>
#app{
}
</style>
