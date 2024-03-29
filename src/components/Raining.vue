<style scoped lang="scss">

$rainingColor: #000;

.snowContainer .cloud {
   
    position: relative;
    background-color: $rainingColor;
    width: 110px;
    height: 30px;
    border-radius: 15px;
}

.snowContainer .cloud::after {
    content: "";
    position: absolute;
    /* 第一个圆用伪元素实现 */
    width: 30px;
    height: 30px;
    background-color: $rainingColor;
    border-radius: 50%;
    /* 第二个圆用box-shadow实现 */
    box-shadow: 40px 0 0 20px $rainingColor;
    left: 10px;
    top: -20px;

}

.snowContainer .snows {
    position: relative;
    display: flex;
    z-index: 1;
}

.snowContainer .snows span {
    position: relative;
    width: 3px;
    height: 3px;
    background-color: $rainingColor;
    margin: 0 2px;
    border-radius: 50%;
    animation: snowing infinite;
    animation-duration: calc(15s / var(--i));
}

@keyframes snowing {
    0% {
        transform: translateY(0);
    }

    80% {
        transform: translateY(60px) scale(1);
    }

    100% {
        transform: translateY(60px) scale(0);
    }
}
</style>

<template>
    <div class="snowContainer">
        <div class="cloud"></div>
        <div class="snows">
            <span style="--i:11"></span>
            <span style="--i:14"></span>
            <span style="--i:12"></span>
            <span style="--i:15"></span>
            <span style="--i:11"></span>
            <span style="--i:12"></span>
            <span style="--i:11"></span>
            <span style="--i:18"></span>
            <span style="--i:10"></span>
            <span style="--i:15"></span>
            <span style="--i:13"></span>
            <span style="--i:18"></span>
            <span style="--i:19"></span>
            <span style="--i:15"></span>
            <span style="--i:13"></span>
        </div>
    </div>
</template>
