<template>
  <article>
    <header>
      <span >{{userStatistics}}</span>
      <span @click="$router.go(-1)">{{goBack}}</span>
    </header>
    <section>

      <fieldset>
        <legend >APP累计</legend>
        <honor-roll></honor-roll>
      </fieldset>
      <fieldset>
        <legend >APP累计</legend>
      为什么加入内容就掉下来

      </fieldset>
    </section>
    <section>
      <fieldset>
        <legend >APP累计</legend>

      </fieldset>
      <fieldset>
       <legend >APP累计</legend>吃饭vacadsc汽车前往

      </fieldset>
    </section>
    <section>
      <fieldset>
        <legend >APP累计</legend>

      </fieldset>
      <fieldset>
      <legend >APP累计</legend>

      </fieldset>
    </section>

  </article>
</template>
<script>
  import honorRoll from './production/honor-roll'
  import pressNumber from './production/press-number'



  export default {
    name: 'production',
    components: {
      honorRoll
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
          console.log(key)
            key.style.height=windowHeight*0.3 + 'px'
        }
    }
  }
</script>
<style scoped>
  article{
    padding:2%;
  }

  header{
    border-bottom:1px dotted #006ce1;
    width: 100%;
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
    overflow: hidden;
  /*清除浮动*/
    width: 45%;
    height: 30%;
    display: inline-block;
    border-radius: 6px;
  }
  legend{
    margin-left: 25px;
  }
</style>
