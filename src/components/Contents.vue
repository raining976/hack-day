<template>
    <div class="contentContainer">
        <div class="leftLogo">
            <img src="@/assets/icons/hackday.png" alt="">
        </div>
        <div class="infoContainer">
            <div class="title">
                {{ infoItem.index }}
                <span class="line"></span>
                {{ infoItem.title }}
            </div>
            <div class="infoContent"></div>
        </div>
    </div>
    <!-- <Raining></Raining> -->
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
    infoItem: {
        title: String,
        index: String,
    }
})



</script>



<style lang="scss" scoped>
.contentContainer {
    @include flex-between();
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 86vw;
    height: 85vh;
    background: #FFFFFF;
    border-radius: 15px 0px 0px 0px;
    border: 2px solid #000000;

    .leftLogo {
        height: 100%;
        @include flex-center();

        img {
            width: 117.1px;
            height: 77vh;
        }
    }

    .infoContainer {
        $topHeight: 10.4vw;
        width: 76.4vw;
        height: 100%;
        display: flex;
        flex-direction: column;

        .title {
            width: 100%;
            height: $topHeight;
            color: #000000;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-size: 3.3vw;
            font-family: lattice;

            .line {
                width: 0.8vw;
                height: 3.3vw;
                background: #151515;
                margin: 0 10px;
                margin-right: 20px;
            }
        }

        .infoContent {
            width: 76.4vw;
            height: calc(100% - $topHeight);
            background: #F9F9F9;
            border-radius: 15px 15px 15px 15px;
            border: 2px solid #000000;
        }

    }
}
</style>