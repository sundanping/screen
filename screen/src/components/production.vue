<template>
  <article>
    <header>
      <span >{{userStatistics}}</span>
      <span @click="$router.go(-1)">{{goBack}}</span>
    </header>
    <section>
      <fieldset>

      </fieldset>

      <fieldset>
        ew<legend >APP累计</legend>
        分期
      </fieldset>
    </section>
    <section>
      <fieldset>
        ew<legend >APP累计</legend>
        分期
      </fieldset>

      <fieldset>
        ew<legend >APP累计</legend>
        分期
      </fieldset>
    </section><section>
    <fieldset>
      ew<legend >APP累计</legend>
      分期
    </fieldset>

    <fieldset>
      ew<legend >APP累计</legend>
      分期
    </fieldset>
  </section>
  </article>
</template>
<script>
  export default {
    name: 'production',
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
  }
  header span{
    font-size: 20px;
  }
  header span:last-child{
    float: right;
    background-color: #bfbfbf;
    padding: 0 5px;
  }
  fieldset{
    width: 45%;
    height: 30%;
    display: inline-block;
    border-radius: 6px;
  }
  legend{
    margin-left: 25px;
  }
</style>
