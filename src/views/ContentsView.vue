<template>
    <div class="contentBlock">
        <div class="leftBar">
            <div class="list">
                <div @click="tabClicked(index)" class="item" :class="{ active: activeIndex == index }"
                    v-for="(text, index) in items" :key="index">
                    {{ text }}
                </div>
            </div>
        </div>
        <contents :infoItem="{ title: items[activeIndex], index: '0' + (activeIndex + 1) }"></contents>
    </div>

</template>
<script setup>
import { ref } from 'vue'

const items = ref(['介绍', '流程', '奖项', '问题', '我们'])
const activeIndex = ref(0);

const tabClicked = (i) => {
    activeIndex.value = i;
}


</script>
<style lang="scss" scoped>
.contentBlock {
    position: relative;
    display: flex;
    justify-content: space-between;
    $paddingLeft: 3.6vw;
    $paddingTop: 14vh;
    background-color: $theme-light-color;
    width: calc(100vw - $paddingLeft);
    height: calc(100vh - $paddingTop);
    padding-top: $paddingTop;
    padding-left: $paddingLeft;

    .leftBar {
        width: 12vh;
        height: 80vh;
        background: #151515;
        box-shadow: -1vw 0.3vw 1.6vw 0.1vw rgba(0, 0, 0, 0.17);
        border-radius: 0.8vw;

        .list {
            $padding: 5.2vw;
            padding: $padding 0;
            width: 100%;
            height: calc(100% - 2 * $padding);
            @include flex-between(true);

            .item {
                position: relative;
                font-family: lattice;
                font-weight: 400;
                font-size: 28.8px;
                color: #FFFFFF47;
                cursor: pointer;

                &.active {
                    color: #fff;

                    &::after {
                        content: "";
                        position: absolute;
                        bottom: -5px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 17px;
                        height: 4px;
                        background-color: #fff;
                    }
                }
            }
        }
    }

}
</style>