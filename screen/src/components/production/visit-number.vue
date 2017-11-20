<template>
  <div class="lists">
    <div id="visit-number" :style="{width: '100%', height: '100%'}"></div>
  </div>
</template>
<script>
  export default {
    name: 'visitNumber',
    data() {
      return {
        msg: ['测试', '已完成', '已归档'],
        install: [232, 344, 453],
        shuju: [
          {value: 735, name: '测试'},
          {value: 735, name: '已完成'},
          {value: 400, name: '已归档'}
        ]
      }
    },
    mounted() {
      let clientW = window.innerwidth
      let clientH = window.innerHeight
      document.getElementById('visit-number').style.width = clientW * 0.3 + 'px'
      document.getElementById('visit-number').style.height = clientH * 0.27 + 'px'
      this.drawLine()
    },
    methods: {
      drawLine() {
        let myChart = this.$echarts.init(document.getElementById('visit-number'))
        myChart.setOption({
          color: ['#003A8F', '#3B73C7', '#95C2E8'],
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
              radius: ['50%', '70%', '40%',], // 圆环
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
              data: this.shuju
            }
          ]
        })
      }
    }
  }
</script>
<style scoped>
  .lists{
    height: 100%;
    overflow: hidden;
  }
  #visit-number canvas {
    /*top: -8%;*/
  }
</style>
