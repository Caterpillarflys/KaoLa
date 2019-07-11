<template>
  <div id="activity">
    <div class="box">
         <Header />
      <div class="scrollNav">
        <ul>
          <li>热门活动</li>
          <li>北京</li>
          <li>上海</li>
          <li>广州</li>
          <li>深圳</li>
          <li>杭州</li>
        </ul>
      </div>

      <div class="entry-list">
        <div class="poster1">
            <a href="https://www.bagevent.com/event/5251280?bag_track=banner"> <img class="posterimg" src="https://b-gold-cdn.xitu.io/v3/static/img/default.2a5b86b.png"></a>
        </div>

        <div class="list1" style="margin-top: .8rem" v-for="(item,index) in dataList" :key="index">
          <div class="entry-inner">
             <div class="banner">
                <a href="https://www.huodongxing.com/event/6493982154900"> <img :src="item.screenshot"></a>
          </div>

          </div>
          <div class="msg1">
            <div class="msgtitle">{{item.title}}</div>
            <div class="date">
              <span>{{item.startTime}}</span>
            </div>
            <div class="bottom">
              <div class="address">
                >
                <span>>{{item.city}}</span>
              </div>
              <div class="btn-join">报名参加</div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>


<script>
import Header from "common/header";
import http from "utils/http";
export default {
  name: "activity",
  components: {
    Header
  },
  data(){
      return{
          dataList:[],
      }
  },
  created(){
      http('get','/v2/getEventList?uid=&client_id=&token=&src=web&orderType=startTime&cityAlias=&pageNum=1&pageSize=20')
      .then((data)=>{
          data.d.map((item)=>{
            let date = new Date(item.startTime).toLocaleDateString().split('/');
            if(date[1]<10){
                date[1] = 0 + date[1];
            }
            if(date[2]<10){
                date[2] = 0 + date[2];
            }
            let year = date[0];
            let month = date[1];
            let day = date[2];
            let date2 = '日一二三四五六'.charAt(new Date(year+'/'+month+'/'+day).getDay());
            item.startTime = (month+"-"+day+' '+'周'+ date2);
    
          })
          this.dataList = data.d;
      })
  }
};
</script>

<style scoped>
.poster1>a{display: block;width: 100%;height: 5.6rem;}
.poster1>a>img{width: 100%;height: 5.6rem}
#activity{
    width: 100%;
    height: 100%;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  position: relative;
}
.header {
  width: 100%;
  height: 1.2rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.32rem;
  align-items: center;
  font-weight: 550;
  background: #fff;
}
.logo {
  margin-left: 0.2rem;
}
.logo > img {
  width: 0.9rem;
  height: 0.76rem;
}
.nav {
  width: 6.5rem;
  height: 0.6rem;
}
.nav > .list {
  display: flex;
  justify-content: space-around;
}
.nav > .list > li:nth-child(1),
.nav > .list > li:nth-child(3) {
  color: blue;
  margin-top: 0.08rem;
}
.last-li {
  width: 1.2rem;
  font-size: 0.24rem;
  line-height: 0.4rem;
}

.first-li {
  width: 1.2rem;
  display: flex;
}
.icon-zelvxuanzefeiyongdaosanjiaoxingfandui {
  font-size: 0.25rem;
  margin-left: 0.04rem;
  margin-top: 0.04rem;
}
.ipt {
  height: 0.62rem;
  padding: 0.072rem;
  outline: none;
  font-size: 0.3rem;
  width: 2rem;
}

.scrollNav {
  width: 100%;
  height: 0.92rem;
  border-top: 1px solid #666;
  background: #fff;
  overflow-x: scroll;
  overflow-y: hidden;
}
.scrollNav > ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow-y: hidden;
  height: 0.92rem;
}
.scrollNav > ul > li {
  font-size: 0.24rem;
  width: 1.4rem;
  margin: 0 0.1rem;
  height: 0.92rem;
  line-height: 0.92rem;
  text-align: center;
}
.scrollNav > ul > li:hover {
  color: #4d91fd;
}

.entry-list {
  width: 100%;
  overflow: auto;
  position: absolute;
  top: 2.12rem;
  bottom: 0;
}
.poster1 {
  width: 100%;
  height: 5.6rem;
}
.poster1 > img {
  width: 100%;
  height: 5.6rem;
}
.entry-inner {
  width: 100%;
}
.banner {
  width: 100%;
}
.banner img {
  width: 100%;
}
.msg1 {
  padding: 0.4rem 0.24rem 0.3rem;
  background: #fff;
}
.msgtitle {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  height: 0.8rem;
  font-size: 0.24rem;
  font-weight: 700;
}
.date {
  margin-top: 0.12rem;
  font-size: 0.24rem;
}
.bottom {
  margin-top: 0.12rem;
  font-size: 0.24rem;
  display: flex;
  justify-content: space-between;
}
.btn-join {
  width: 2rem;
  height: 0.5rem;
  border-radius: 0.6rem;
  background-color: #4d91fd;
  line-height: 0.5rem;
  color: #fff;
  text-align: center;
}
</style>



