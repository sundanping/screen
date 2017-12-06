<template>
<div class="lists">
  <div>
    <honor-top></honor-top>
  </div>
</div>
</template>
<script>
  import honorTop from './../honor/honor-top'
  export default {
    name: 'honorRoll',
    components: {
      honorTop
    },
    data() {
      return {
        msg: ['测试', '已完成', '已归档'],
        install: [232, 344, 453],
        shuju: [
        {value: 335, name: '测试'},
        {value: 735, name: '已完成'},
        {value: 400, name: '已归档'}
      ]
      }
    },
    mounted() {

    },
    methods: {
      }
    }
</script>
<style scoped>
  .lists{
    height: 100%;
    overflow: hidden;
  }
  #honor-roll{
    width: 100%;
    height: 100%;
  }

  #honor-roll canvas {
    /*top: -8%;*/
  }
</style>
