<template>
  <div id="app" :style="bgimg">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      bgimg: {
        backgroundImage: 'url(' + require('./assets/img/background-img.jpg') + ')',
//        backgroundSize: '100% 100%',
        height: '100%'
      }
    }
  },
  mounted () {
//    获取屏幕高度
    let windowHeight = window.innerHeight
    console.log(windowHeight)
    document.getElementById('app').style.height=windowHeight + 'px'
    window.onresize = function(){
      window.location.reload()
    }
  }
}
</script>

<style scoped>
#app{
}
</style>



<style>
  *{
    margin:0;
    padding:0;
  }
  div,p,h1,h2,span,img,button{
    margin:0;
    padding:0;
    color:#fff;
  }
  article,section,header,aside{
    box-sizing: border-box;
  }
  html{
    min-width: 1240px;
  }
  a{
    text-decoration: none;
  }
</style>
