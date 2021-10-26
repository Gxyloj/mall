<template>
  <div class="wrapper" ref="wrapper">
<!--    ref绑定在组件上，获取到的是整个组件;绑定在普通元素上获取到的是元素对象（类似选择器）-->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll, {ObserveDom, ObserveImage} from "better-scroll";
BScroll.use(ObserveImage,ObserveDom)
export default {
  name: "Scroll",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    },
    probeType:{
      type:Number,
      default: 0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      scroll:null,
      satrY:0,
    }
  },
  mounted(){
    // setTimeout(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper,{
    //     click:true,
    //     touch:true,
    //     ObserveImage:true,
    //     ObserveDom:true
    //   })
    //
    // },1000)
    // this.scroll = new BScroll(this.$refs.wrapper,{
    //   click:true,
    //   touch:true,
    //   ObserveImage:true,
    //   ObserveDom:true
    // })
    // getHomeGoods('pop',1).then(res => {
    //   this.scroll = new BScroll(this.$refs.wrapper,{
    //     click:true,
    //     touch:true,
    //     ObserveDom:true,
    //     ObserveImage:true
    //   })
    // })
    // 是否是同一次请求？
    // 不是，在home中请求数据时.then调用本组件中的createScroll方法


  },
  // watch:{
  //   goods(){
  //     console.log(this.goods);//拿到就已经是有数据的
  //   }
  // },
  methods:{

    createScroll(){
      // console.log('创建scroll');
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        touch:true,
        mouseWheel:true,
        scrollX:false,
        scrollY:true,
        startY:this.satrY,//satrY初始化为0
        ObserveDom:true,
        ObserveImage:true,
        probeType: this.probeType,
        pullUpLoad:this.pullUpLoad,

      })//创建scroll
      // this.scroll.refresh()//刷新一次
      if (this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll',position)
        })//发送滚动位置事件
      }
      if (this.pullUpLoad){
        this.scroll.on('pullingUp',() => {
          this.satrY = this.scroll.scrollY//记录pullingUp时的Y值
          this.$emit('pullingUp')
        })//发送滚动到底事件
      }
      // if (this.pullUpLoad){
      //   this.scroll.on('touchEnd',() => {
      //     this.$emit('pullingUp')
      //   })
      // }
    }
  },
  created() {
    // console.log(this.goods);
  }
}
</script>

<style scoped>

</style>
