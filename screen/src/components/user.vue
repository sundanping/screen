<template>
  <article>
    <header>
      <span >{{userStatistics}}</span>
      <span @click="$router.go(-1)">{{goBack}}</span>
    </header>
    <section></section>
  </article>

</template>
<script>
  export default {
    name: 'user',
    data () {
        return {
          userStatistics: '用户统计',
          goBack: '返回'
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
</style>
