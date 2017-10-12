<template>
  <article class="index" :style='bgimg'>
    <nav :style="navBackground">导航栏</nav>
<!--bannner 图片-->
    <section class="banner">
      <div class="left" :style="bannerBackGround[0]"></div>
      <div class="middle" :style="bannerBackGround[1]">
        <!--<div :style="bannerBackGround[1]">eqw</div>-->
      </div>
      <div class="right" :style="bannerBackGround[2]"></div>
    </section>
    <!--bannner 图片-->

    <section class="">
      <div>今日统计</div>
      <div>本周统计</div>
      <div>本月统计</div>
    </section>
    <!--左右按钮-->
    <aside class="left-button" @click="toLeft()">111111</aside>
    <aside class="right-button"  @click="toRight()">22222</aside>
  </article>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bgimg: {
        backgroundImage: 'url(' + require('../assets/img/background-img.png') + ')',
        height: '100%'
      },
      navBackground: {
        width: '180px',
        height: '36px',
        fontSize: '16px',
        backgroundRepeat: 'no-repeat',
        lineHeight: '30px',
        backgroundSize: '100% 100%',
        backgroundImage: 'url(' + require('../assets/img/nav-background.png') + ')',
    },
      middleBackGround: {
        backgroundImage: 'url(' + require('../assets/img/middle-border.png') + ')',
        backgroundSize: '100% 100%'
      },
      bannerBackGround: [
        { backgroundImage: 'url(' + require('../assets/img/left.png') + ')',
          backgroundSize: '100% 100%'},
        { backgroundImage: 'url(' + require('../assets/img/middle.png') + ')',
          backgroundSize: '100% 100%'},
        { backgroundImage: 'url(' + require('../assets/img/right.png') + ')',
          backgroundSize: '100% 100%'}
      ]
    }
  },
  methods: {
    toLeft () {
      let left = this.bannerBackGround[0]
      console.log(left)
      this.bannerBackGround =this.bannerBackGround.slice(1);
      this.bannerBackGround.push(left)
      console.log(this.bannerBackGround)
    },
    toRight () {
      let right = this.bannerBackGround[2]
      this.bannerBackGround.length =2;
      this.bannerBackGround.unshift(right)
      console.log(this.bannerBackGround)

    }
  }
}

</script>
<style>
  *{
    margin:0;
    padding:0;
  }
  div,p,h1,h2,span{
    margin:0;
    padding:0;
  }
  article,section{
    box-sizing: border-box;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  color: #fff;
}
.index{
  width:100%;
  display:block;
}
nav{
  color:#fff;
  text-align: center;
  position: relative;
  left:50% ;
  margin-left:-90px;
}
  section>div{
    display: inline-block;
  }
  .banner{
    width: 75%;
    height:75%;
    margin-left:12.5%;
    margin-top:7%;
  }
.left{
  z-index:5;
  position: relative;
  right:-100px;
  transform: perspective(800px) rotateY(20deg);

}
.right{
  z-index:5;
  position: relative;
  left:-100px;
  transform: perspective(800px) rotateY(-20deg);

}
  .left{
    margin-left:5%;
  }
  .middle,.left,.right{
    /*background-color: aquamarine;*/
    width: 30%;
    height:64%;
  }
.middle{
  z-index:10;
  height:65%;
  position: relative;
  /*background-color: aqua;*/
}
middle>div{
  display: inline-block;
  width: 100%;
}
  .left-button{
    position: absolute;
    top:50%;
    left:0;
    color:#fff;
  }
.right-button{
  position: absolute;
  top:50%;
  right:0;
  color:#fff;

}
</style>

