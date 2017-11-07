<template>
  <div class="lists">
    <div id="mission" :style="{width: '100%', height: '100%'}"></div>
    <div class="lists-right">
      <div class="count-install">
        <h1>
          累计安装量{{install[0]}}
        </h1>
        <div name="count" id="install" class="prediction-linear-user"></div>
      </div>
      <div class="count-install">
        <h1>
          累计启动量{{install[1]}}
        </h1>

        <div name="count" id="start-up" class="prediction-linear-user"></div>
      </div>
      <div class="count-install">
        <h1>
          累计注册量{{install[2]}}
        </h1>
        <div name="count" id="regist" class="prediction-linear-user"></div>
      </div>
    </div>
  </div>

</template>
<script>
  let clue = require('../../json/clue.json')
  export default {
    name: 'totalApp',
    data() {
      return {
        nav: [{name: '互联网'}, {name: '微信'}],
        lists: clue.data,
        msg: ['待核', '已完成', '已归档'],
        install: [232, 344, 453],
        ff: 298,
        demoNum: [2.56 , 1, 0]
      }
    },
    created() {
    },
    mounted() {
      setTimeout(this.getWidth, 2500)
      this.setHeight()
      let clientW = document.body.clientWidth
      let clientH = document.body.clientHeight
      this.getId('mission').style.width = clientW * 0.47 / 2.2 + 'px'
      this.getId('mission').style.height = clientH * 0.3 + 'px'
      this.drawLine()
    },
    computed: {},
    methods: {
      getId :v => document.getElementById(v),//获取ID
      getWidth() {
        console.log(this.install)
//        this.install[1]= 604
//        this.$set(this.install, 0, this.ff)//监听到数组变化渲染到页面，或者页面头部渲染ff亦可
        this.install.splice(0, 3, ...this.demoNum)//监听到数组变化渲染到页面，或者页面头部渲染ff亦可
        this.setHeight()
      },
      setHeight() {
        let maxValue = Math.max.apply(null, this.install);
        if (maxValue > 0) {
          this.getId('install').style.width = (this.install[0] / maxValue) * 100 + '%'
          this.getId('start-up').style.width = this.install[1] / maxValue * 100 + '%'
          this.getId('regist').style.width = this.install[2] / maxValue * 100 + '%'
        } else {
          let countWidth = document.getElementsByName('count')
          for (let i of countWidth) {
            i.style.width = 2 + 'px'
          }
        }

      },
      drawLine() {
        let myChart = this.$echarts.init(document.getElementById('mission'))
        // 绘制图表
        myChart.setOption({
          color: ['#77173e', '#C14964', '#dB9DBB'],
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
              radius: ['50%', '70%', '40%'], // 圆环
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
                {value: 274, name: '待核'},
                {value: 235, name: '已完成'},
                {value: 400, name: '已归档'}
              ]
            }
          ]
        })
      }
    },
    watch: {}
  }
</script>
<style scoped>
  .lists {
    width: 100%;
    height: 100%;
    flex-basis: 100%;
    position: relative;
    padding: 5px;
    overflow: hidden;
  }

  .lists > div {
    width: 50%;
    float: left;
    overflow: hidden;
  }

  .contents {
    height: 100%;
    width: 100%;
  }

  .contents > #myChart1 {
    min-width: 200px;
    color: red;
  }

  .lists-right {;
    padding: 3% 20px;
  }

  .count-install {
    flex-direction: column;
    height: 20%;
    margin-left: 15%;
    margin-top: 5%;
    overflow: hidden;
  }

  .count-install > div {
    border-radius: 6px;
    height: 12px;
  }

  h1 {
    font-size: 18px;
  }

  .prediction-linear-user {
    background: -webkit-linear-gradient(to right, #5c9dfc, #5d9afd); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(to right, #5c9dfc, #5d9afd); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(to right, #5c9dfc, #5d9afd); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #5c9dfc, #5d9afd); /* 标准的语法（必须放在最后） */
  }
</style>
