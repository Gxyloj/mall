<template>
  <div>
    <van-nav-bar
      left-text="身份码"
      left-arrow
      class="nav-bar"
      @click-left="onClickLeft"
      :placeholder="true"
    />
    <div class="time">
      <h3>{{ currentTime }}</h3>

    </div>
    <div class="info">
      <h3>学生信息</h3>
      <table>
        <tr>
          <td>
            <icon-svg icon-class="wode"></icon-svg>
          </td>
          <td><span>姓名</span></td>
          <td><p>欧骏</p></td>
        </tr>
        <tr>
          <td>
            <icon-svg icon-class="mingpian"></icon-svg>
          </td>
          <td><span>学号</span></td>
          <td><p>2330180909</p></td>
        </tr>
        <tr>
          <td>
            <icon-svg icon-class="wodebanji"></icon-svg>
          </td>
          <td><span>班级</span></td>
          <td><p>18移动本9(专升本)</p></td>
        </tr>
        <tr>
          <td>
            <icon-svg icon-class="20"></icon-svg>
          </td>
          <td><span>学院</span></td>
          <td><p>信息工程学院</p></td>
        </tr>
        <tr>
          <td>
            <icon-svg icon-class="xuexiao"></icon-svg>
          </td>
          <td><span>学校</span></td>
          <td><p>武汉工程科技学院</p></td>
        </tr>
      </table>
    </div>
    <div class="green">

    </div>
  </div>


</template>

<script>
import iconSvg from "@/components/common/iconSvg";

export default {
  name: "xiaobei",
  components: {iconSvg},
  setup() {
    const onClickLeft = () => history.back();

    return {
      onClickLeft,
    };
  },
  data() {
    return {
      timer: '',
      currentTime: new Date()
    }
  },
  created() {
    // var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      this.currentTime = //修改数据date
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        this.appendZero(new Date().getDate()) +
        " " +
        new Date().getHours() +
        ":" +
        this.appendZero(new Date().getMinutes()) +
        ":" +
        this.appendZero(new Date().getSeconds());

      // console.log(new Date().getDate());
      // console.log(this.aa());
    }, 1000);
  },
  methods: {
    appendZero(obj) {
      if (obj < 10) {
        return "0" + obj;
      } else {
        return obj;
      }
    },

  }
}
</script>

<style>
body {
  background-color: #fdfdfd;
}

:root {
  --van-primary-color: #000;
  --van-text-color: #000;
  --van-nav-bar-text-color: #000
}

.time {
  margin: 5vw;
  height: 60px;
  width: 90vw;
  background-color: #fff;
  line-height: 60px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.01), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
}

.green {
  margin: 5vw;
  width: 90vw;
  height: 95px;
  background-color: green;

}

.info {
  padding: 10px 0 30px;
  margin: 5vw;
  width: 90vw;
  fill: #333333;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.01), 0 3px 3px 0 rgba(0, 0, 0, 0.05);



  /*height: 350px;*/
}

.info .svg-icon {
  width: 16px;
  fill: #d2d2d2;
}

.info span {
  font-size: 14px;
}

.info p {
  font-size: 14px;
  padding:.6rem 0 ;
  margin: 0;
}

.info table {
  margin-left: 30vw;
}

.info h3 {
  text-align: center;
}

table td p{
  width: 110px;
}

</style>
<!--
<div>
        <icon-svg icon-class="wodedangxuan"></icon-svg>
        <span>姓名</span>
        <span>欧骏</span></div>
      <div>
        <icon-svg icon-class="mingpian"></icon-svg>
        学号
        <span>2330180909</span></div>
      <div>
        <icon-svg icon-class="wodebanji"></icon-svg>
        班级
        <span>18移动本9(专升本)</span></div>
      <div>
        <icon-svg icon-class="20"></icon-svg>
        学院
        <span>信息工程学院</span></div>
      <div>
        <icon-svg icon-class="xuexiao"></icon-svg>
        学校
        <span>武汉工程科技学院</span></div>
-->
