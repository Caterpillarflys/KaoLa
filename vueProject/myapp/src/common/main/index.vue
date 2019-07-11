<template>
    <div id="boiling">
        <!-- <Header/> -->
        <div class="container">
            <div class="scrollNav">
                <ul>
                    <li>推荐</li>
                    <li>热门</li>
                    <li>关注</li>
                    <li>开源推荐</li>
                    <li>内推招聘</li>
                    <li>掘金相亲</li>
                    <li>上班摸鱼</li>
                    <li>应用安利</li>
                    <li>开发工具</li>
                    <li>New资讯</li>
                </ul>
            </div>
        </div>
        
    </div>
</template>


<script>
export default {
    name:'main',
    
}
</script>


<style scoped>
#boiling{
    width: 100%;
    height: 100%;
}

.container{
    padding-bottom: .3rem;
    background-color: #f4f5f5;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .15);
}
.scrollNav {
    width: 100%;
    height: .92rem;
    border-top: 1px solid #f1f1f1;
    background: #fff; 
}

.scrollNav ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    height: .92rem;
    line-height: .92rem;
    width: 100%;
    background: #fff;
    overflow-x: auto;
    overflow-y: hidden;
}

.scrollNav ul li {
    font-size: .24rem;
    height: .92rem;
    line-height: .92rem;
    text-align: center;
    width: 18%;
    flex-shrink: 0;
}

.scrollNav>ul>li:hover {
    color: blue;
}

   

</style>
