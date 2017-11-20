<template>
  <section >
    <h1 class="honor-top-title">TOP3</h1>
    <div class="honor-top-name">
      <span class="float-left">姓名</span>
      <span class="float-right">发稿量</span>
    </div>

    <span v-for='(v,index) in response'>
        <div name='press-name'>
          <span class="float-left">{{index+1}}{{v.name}}</span>
          <span class="float-right">{{v.pressNum}}</span>
        </div>
    <!--柱状图 BEGIN-->
       <div style="background-color:#333;position:relative">
         <div  style="height:100%">
           <div class="width-press">
            <div :style='{width:v.pressNum/maxWidth/0.01+"%"}' name='press-line' class="press-line"></div>
           </div>
         </div>
       </div>
      <!--柱状图END-->
    </span>




  </section>
</template>
<script>
  export default {
    data() {
      return {
        response :[
          {name:'邓琼琼',pressNum:'23'},
          {name:'徐老师',pressNum:'43'},
          {name:'陈倩倩',pressNum:'21'}
        ],
        maxWidth:50
      }
    },
     mounted() {
//      居中
      let lineHeight= document.getElementsByName('press-name')
          for(let item of lineHeight){
            item.style.lineHeight=lineHeight[0].clientHeight +'px'
            console.log( lineHeight[0].clientHeight +'px')
          }
//          设置宽度
       let [width1,width2,width3] =this.response
       this.maxWidth= Math.max(width1.pressNum,width2.pressNum,width3.pressNum)
        console.log(this.maxWidth)
    }
  }
</script>
<style scoped>
  section {
    height:100%;
  }
  .honor-top-title{
    text-align:center;
  }
  .honor-top-title,.honor-top-name,div{
    height:12.5%;
    margin:auto 0;
  }
  .honor-top-name{
    border-bottom:1px solid #333;
  }
  .width-press{
    background-color:#fff;
    height:33.3%;
    position:relative;
    top:33.3%;
    overflower:hidden;
  }
  .width-press:after{
    clear:both;
    content:'';
    overflower:hidden;
  }
  .press-line{
    position:absolute;
    top:0;
    height:100%;
    background-color:#ee2;
    width:34%;
  }
</style>
