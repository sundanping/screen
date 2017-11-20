<template>
  <article class="lists">

    <div id="myChart2" ></div>
  </article>
</template>
<script>
  export default {
    name: 'websiteSeven',
    mounted() {
      let clientW = window.innerwidth
      let clientH = window.innerHeight
      document.getElementById('myChart2').style.width=clientW*0.47+ 'px'
      document.getElementById('myChart2').style.height=clientH*0.3+ 'px'
      this.drawLine()
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart2'))
        // 绘制图表、
        window.onresize = myChart.resize;//自适应
        myChart.setOption({
          color: ['#8d6cf9', '#f36764', '#fc8e26', '#14da7e'],
          legend: {
            right: '60',
            top: '0',
            textStyle: {
              color: '#fff'
            },
            data: [ '视频啊', '专题', '图集']
          },
          tooltip: {
            trigger: 'axis'
          },
          textStyle: {
            color: '#fff'
          },
          grid: {
            left: '3%',
            right: '7%',
            bottom: '12%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              name: '日期',
              boundaryGap: false,
              axisLine: {
                lineStyle: {
                  color: ['#71a4f2'],
                  width: '2',
                  type: 'solid'
                }
              },
              splitLine: {//网格线
                lineStyle: {// 网格线color
                  color: ['rgba(113,164,242,0.3)']
                },
                width: '1',
                type: 'solid',
                show: true
              },
              axisTick: {
                show: false,
                alignWithLabel: true
              },
              data: ['09-23', '09-24', '09-25', '09-26', '09-27', '09-28', '09-29']
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '数量',
              axisLine: {
                lineStyle: {
                  color: ['#71a4f2'],
                  width: '2', //边线宽度
                  type: 'solid'
                }
              },
              axisTick: {
                show: false,
                alignWithLabel: true
              },
              splitLine: {
                lineStyle: {
                  color: ['rgba(113,164,242,0.3)'],
                  width: '1',
//                  type: 'dashed'
                }
              },
              axisPointer: {
                show: true
              }
            }
          ],
          series: [

            {
              name: '视频啊',
              type: 'line',
              smooth: true,
              stack: '总量',
              areaStyle: {normal: {}},
              data: [4, 3, 2, 1, 1, 3, 4]
            },
            {
              name: '专题',
              type: 'line',
              smooth: true,
              stack: '总量',
              areaStyle: {normal: {}},
              data: [4, 3, 2, 1, 1, 3, 4]
            },
            {
              name: '图集',
              type: 'line',
              smooth: true,
              stack: '总量',
              areaStyle: {normal: {}},
              data: [4, 3, 2, 1, 1, 3, 4]
            }
          ]
        })
      }
    }
  }
</script>
<style  scoped>
  .lists{
    width: 100%;
    height: 100%;
    flex-basis: 100%;
    position: relative;
    padding: 5px;
    overflow: hidden;
  }
  .lists>div{
    float: left;
    width: 100%;
    overflow: hidden;

    /*溢出处理*/
  }
</style>

