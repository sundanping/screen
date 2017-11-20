<template>
  <article class="lists">
<div class="contents" :style="{width: '100%', height: '100%'}">
  <div id="myChart1" ></div>
</div>
  </article>
</template>
<script>
  export default {
    name: 'appSeven',
    data() {
      return {
       msg: [
          {
            type: 'value',
            name: '数量',
            axisLine: {
              lineStyle: {
                color: ['#71a4f2'],
                width: '2',
                type: 'solid'
              }
            },
            axisTick: {
              show: false,
              alignWithLabel: true
            },
            splitLine: {
              lineStyle: {
                color: ['rgba(113,164,242,0.3)'],//网格线
                width: '1',
                type: 'solid',
                show: true
              }
            },
            axisPointer: {
              show: true
            }
          }
          ]
      }
    },
    mounted() {
      let clientW = window.innerwidth
      let clientH = window.innerHeight
      document.getElementById('myChart1').style.width=clientW*0.47+ 'px'
      document.getElementById('myChart1').style.height=clientH*0.3+ 'px'
      this.drawLine()
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
//        window.onresize = myChart.resize//自适应
        myChart.setOption({
          title: {
//            text: '堆叠区域图',
            color:'#fff'
          },
          color: ['#60f07c', '#f86600', '#fc8e26', '#14da7e'],
          legend: {
            center: 'center',
            top: '3',
            textStyle: {
              color: '#fff'
            },
            data: [ '视频', '专题', '图集']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          textStyle: {
            color: '#ffffff'
          },
          grid: {
            left: '7%',
            right: '7%',
            bottom: '12%',
            containLabel: true
          },
          xAxis: [
            {
              name: '日期',
              boundaryGap: false,
              splitLine: {//网格线
                lineStyle: {// 网格线color
                color: ['rgba(113,164,242,0.3)']
                },
                  width: '1',
                  type: 'solid',
                  show: true
              },
              axisLine: {
                lineStyle: {
                  color: ['rgb(113,164,242,0.3)'],
                  width:'2',
                  type: 'solid'
                }
              },
              saveAsImage:true,
              axisTick: {
                show: true,
                alignWithLabel: true
              },
              data: ['08-23', '09-24', '09-25', '09-26', '09-27', '09-28', '09-29']
            }
          ],
          yAxis: this.msg,
          series: [
            {
              name: '视频',
              type: 'line',
              smooth: true,
              stack: '总量',
              areaStyle: {normal: {}},
              data: [65, 93, 62, 111, 31, 89, 114]
            },
            {
              name: '专题',
              type: 'line',
              smooth: true,
              stack: '总量',
              areaStyle: {normal: {}},
              data: [42, 33, 222, 31, 61, 63, 114]
            },
            {
              name: '图集',
              type: 'line',
              smooth: true,
              stack: '总量',
              areaStyle: {normal: {}},
              data: [88, 63, 12, 111, 11, 113, 64]
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

  /*.contents{*/
    /*height: 100% ;*/
    /*width: 100%;*/
  /*}*/
  /*.contents>#myChart1{*/
    /*min-width: 200px;*/
  /*}*/

</style>
