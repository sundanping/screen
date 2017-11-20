<template>
  <article>
    <section>
      <div class="block prediction-div">
        <span class="demonstration"> 截止时间：</span>
        <el-date-picker
          v-model="value1"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions1">
        </el-date-picker>
      </div>
      <!--预告目标-->
    </section>
    <section>
      <div class="prediction prediction-div">
        <div style="display: inline-block; margin-bottom:4px;"><span> 预估目标：</span>
          <input style="margin-right: 20px" class="prediction-result" type="text">
        </div>
        <div style="display: inline-block ; margin-bottom:4px;"><span> 预估结果：</span>
          <input class="prediction-result" type="text">
        </div>
      </div>
    </section>
    <section>
      <div class="prediction prediction-div">
        <input style="border: 0;" class="prediction-result prediction-linear" value="提交评估" type="button">
        <span class="can-finish">可以完成</span>
        <span class="can-finish">不能完成</span>
      </div>
    </section>
  </article>
</template>
<script>
  export default {
    name: 'pvTarget',
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: ''
      };
    }
  }
</script>
<style scoped>
  div.prediction {
    margin-top: 20px;
  }

  .prediction-result {
    width: 217px;
    height: 32px;
    color: #fff;
    margin-left: 5px;
    border-radius: 4px;
    border: 1px solid #fff;
    display: inline-block;
    background-color: #333333;
  }

  article {
    height: 100%;
    padding: 5% 8%;
  }

  section {
    height: 30%;
  }
  section:last-child{
    position: relative;
    left:80px;
  }
  .prediction span{
    font-weight: bold;

  }
  .can-finish{
    margin-left: 50px;
  }

</style>
<style>
  /*日期选择器样式修改 BEGIN*/
  .el-button + .el-button span, .el-date-table td div span {
    color: #5a5e66;
  }

  .prev-month div span, .next-month div span {
    color: #b4bccc !important;
  }

  /*日期选择器样式修改 END*/
</style>
