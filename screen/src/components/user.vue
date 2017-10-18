<template>
  <article>
    <header>
      <span >{{userStatistics}}</span>
      <span @click="$router.go(-1)">{{goBack}}</span>
    </header>
    <section>
      <fieldset>
        <legend >APP累计</legend>
        <total-app></total-app>
      </fieldset>
      <fieldset>
        <legend >网站累计</legend>
        <website></website>
      </fieldset>
    </section>
    <section>
      <fieldset>
        <legend >APP近七日日均</legend>
        <app-seven></app-seven>
      </fieldset>
      <fieldset>
        <legend >网站近七日日均</legend>
        <website-seven></website-seven>
      </fieldset>
    </section>
    <section>
      <fieldset>
        <legend >安装量目标预估</legend>
        <install-target></install-target>
      </fieldset>
      <fieldset>
        <legend >PV目标预估</legend>
        <pv-target></pv-target>
      </fieldset>
    </section>
  </article>
</template>
<script>
  import totalApp from './user/total-app'
  import installTarget from './user/install-target'
  import pvTarget from './user/pv-target'
  import website from './user/website'
  import appSeven from './user/app-sevenday'
  import websiteSeven from './user/website-sevenday'

  export default {
    name: 'user',
    components: {
      totalApp,
      installTarget,
      pvTarget,
      website,
      appSeven,
      websiteSeven
    },
    data() {
      return {
        userStatistics: '用户统计',
        goBack: '返回'
      }
    },
    mounted () {
      let windowHeight = window.innerHeight
      console.log(windowHeight)
      let fieldset = document.getElementsByTagName('fieldset')
      for(let key of fieldset){
        key.style.height=windowHeight*0.3 + 'px'
      }
    }
  }
</script>
<style scoped>

  article{
    overflow: hidden;
    padding:0 1%;

  }
section{
  width: 100%;
  overflow: hidden;

}
  header{
    border-bottom:1px dotted #006ce1;
    width: 100%;
    height: 6%;
    margin-bottom:1%;
    margin-top:1%;
    overflow: hidden;
  }
  header span{
    font-size: 20px;
    overflow: hidden;

  }
  header span:last-child{
    float: right;

    background-color: #bfbfbf;
    padding: 0 5px;
  }
  fieldset{
    /*清除浮动*/
    box-sizing: border-box;
    width: 49%;
    height: 30%;
    display: inline-block;
    border-radius: 6px;
    overflow: hidden;
  }

  section fieldset:nth-child(even){
    margin-left: 1%;
  }
  legend{
    margin-left: 25px;
  }
</style>
