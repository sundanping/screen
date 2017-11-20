<template>
  <div class="lists">
    <div id="website" :style="{width: '100%', height: '90%'}"></div>
    <div :style="{width: '100%', height: '90%'}">
      <leiji></leiji>
    </div>

  </div>
</template>
<script>
  let clue = require('../../json/clue.json')
  import leiji from './leiji'
  export default {
    name: 'website',
    components:{
      leiji
    },
    data () {
      return {
        lists: clue.data,
        msg:[  '已完成', '已归档']
      }
    },
    created () {
    },
    mounted () {
      let clientW = window.innerwidth
      let clientH = window.innerHeight
      document.getElementById('website').style.width=clientW*0.46/2.2+ 'px'
      document.getElementById('website').style.height=clientH*0.26+ 'px'
      this.drawLine()
    },
    computed: {
    },
    methods:{
//
      drawLine () {
        let myChart = this.$echarts.init(document.getElementById('website'))
        // 绘制图表
        myChart.setOption({
          color: [ '#47abdc', '#1F6AEE'],
          textStyle: {
            color: '#fff'
          },
          legend: {
            orient: 'vertical', // 图例列表的布局朝向。
            x: 'right',
            y: 'bottom',
            textStyle: {
              color: '#fff'
            },
            data: this.msg
          },
          series: [
            {
//              name: '任务统计',
              type: 'pie',
              radius: ['50%', '70%',, '40%'], // 圆环
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: true,
                  formatter: ' {d}%',
                  textStyle: {
                    fontSize: '14',
                    fontWeight: 'bold'
                  }
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '16',
                    fontWeight: 'bold'
                  }
                }
              },  // 折线
              labelLine: {
                normal: {
                  show: true
                }
              },  // 移入之后折线
              data: [
                {value: 235, name: '已完成'},
                {value: 400, name: '已归档'}
              ]
            }
          ]
        })
      }
    },
    watch: {
    }
  }
</script>
<style  scoped>
  .lists{
    width: 100%;
    height: 100%;
    padding: 5px;
    display: flex;
    overflow: hidden;}
  .contents{
    height: 100% ;
    width: 100%;
  }
  .lists div{
    flex:1;
    width: 100%;
    overflow: hidden;
  }

  </style>


