<template>
    <div>
        <Header/>
        <div class="scrollNav">
            <ul>
                <li class="firstnavli">推荐</li>
                <li>后端</li>
                <li>前端</li>
                <li>Android</li>
                <li>iOS</li>
                <li>人工智能</li>
                <li>开发工具</li>
                <li>代码人生</li>
                <li>阅读</li>
            </ul>
        </div>
        <HomeList/>
    </div>
</template>


<script>
import Header from "../../common/header";
import HomeList from "components/homelist"
export default {
    name:"home",
    components:{
        Header,
        HomeList
    }
}
</script>

<style scoped>
.scrollNav{width: 100%;height: .92rem;border-top: 1px solid #666;background: #fff;overflow-x: scroll;overflow-y: hidden;}
.scrollNav>ul{display: flex;justify-content: space-between;line-height: .92rem;width: 150%}
.scrollNav>ul>li{font-size: .24rem;width: 1.4rem;height: .92rem;margin: 0 .1rem;line-height: .92rem;text-align: center;}
.scrollNav>ul>li:hover{color: blue;}
.firstnavli{margin-left: .35rem}

</style>



