<template>
    <div class="contentContainer" id="contentContainer">
        <div class="leftLogo">
            HACKDAY
        </div>
        <div class="infoContainer">
            <div class="title">
                {{ infoItem.index }}
                <span class="line"></span>
                {{ infoItem.title }}
                <span class="bias">
                    /
                </span>
                <span class="title_en">
                    {{ infoItem.title_en }}
                </span>
            </div>
            <div class="infoContent"
                :class="{ introClass: infoItem.index == '01', awardsClass: infoItem.index == '03', longClass: infoItem.index == '02', faqClass: infoItem.index == '04', contactClass: infoItem.index == '05' }">
                <div id="textItem" class="textItem" v-for="(text, index) in infoItem.texts" :key="index">
                    <div class="subtitleBox">
                        <div class="subtitle" v-show="!(infoItem.index == '05' && index == 2)">
                            {{ text.subtitle }}
                        </div>
                        <a class="qqLink subtitle" v-show="infoItem.index == '05' && index == 2"
                            href="https://qm.qq.com/q/i9NDsMwVpK">{{ text.subtitle }}</a>
                        <div class="description" v-show="text.des != ''">{{ text.des }}</div>
                    </div>
                    <div class="text" v-show="text.text != ''">{{ text.text }}</div>
                    <div class="QrBox" v-show="infoItem.index == '05' && index == 0">
                        <img src="@/assets/imgs/qr.webp" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="raining" id="raining">
            <Raining></Raining>
        </div>
    </div>

</template>

<script setup>
const props = defineProps({
    infoItem: {
        title: String,
        index: String,
        title_en: String,
    }
})


</script>



<style lang="scss" scoped>
.contentContainer {
    position: relative;
    @include flex-between();
    // position: absolute;
    // bottom: 0;
    // right: -2px;
    width: 80vw;
    height: 85vh;
    background: #FFFFFF;
    border-radius: 15px;
    border: 2px solid #000000;
    overflow: hidden;

    .leftLogo {
        height: 100%;
        text-align: center;
        font-family: 'trick-shot';
        font-weight: bold;
        font-size: 10vh;
        color: #f5f5f5;
        writing-mode: vertical-rl;
        transform: rotateZ(180deg);
        text-shadow: 6px 8px 0px #CDCDCD;
        border-left: 5px solid #ffffff;
        padding-left: 30px;


    }

    .infoContainer {
        $topHeight: 8vw;
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

            .bias,
            .title_en {
                font-size: 2.5vw;
                color: #000000;

            }

            .bias {
                margin: 0 10px;
            }
        }

        .infoContent {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: space-between;
            $padding: 30px;
            width: calc(70vw - 3 * $padding);
            height: calc(100% - $topHeight - 1.6vw - 2*$padding);
            padding: $padding;
            padding-right: $padding;
            background: #F9F9F9;
            border-radius: 15px;
            border: 2px solid #000000;
            overflow-y: auto;
            .textItem {
                margin: 5px 0;
                .subtitleBox {
                    display: flex;
                    align-items: center;

                    .qqLink {
                        transition: 0.3s;
                    }

                    .qqLink:hover {
                        color: rgb(0, 0, 151) !important;
                        transform: scale(1.05);
                    }

                    .subtitle {
                        font-weight: 700;
                    }

                    .description {
                        color: #5C5C5C;
                        font-family: 'lattice';
                        margin-left: 30px;
                        font-size: 18px;
                    }
                }

                .subtitleBox .subtitle,
                .text {
                    color: #000000;
                    font-family: 'lattice';
                    font-size: 20px;
                }


                .text {
                    margin-top: 5px;
                    text-indent: 30px;
                    font-weight: 500;
                    font-size: 16px;
                    color: #5C5C5C;
                    line-height: 18px;

                }

                .QrBox img {
                    width: 200px;
                }
            }

            &.awardsClass {
                justify-content: space-around;

                .textItem .subtitleBox {
                    margin-bottom: 20px;
                }

                .textItem .text {
                    font-size: 1.3vw;
                }

            }

            &.contactClass {
                width: auto;
                margin-right: 20px;
                padding: 30px 40px;
                flex-direction: row;
                justify-content: space-around;
                align-items: flex-start;

                .textItem {
                    height: auto;
                    margin: 40px 0;
                    flex-direction: column;

                    .subtitleBox {
                        .subtitle {
                            margin: 20px 0;
                        }

                        flex-direction: column;
                        align-self: center;

                        .description {

                            font-size: 20px !important;
                        }
                    }


                }
            }

            &.faqClass {
                .textItem .subtitleBox {
                    .subtitle {
                        font-size: 18px;
                    }

                }

                .text {
                    margin-top: 5px;
                }
            }
        }
    }

    .raining {
        position: absolute;
        top: 50px;
        right: 150px;
    }
}


@media screen and (max-width: 1200px) {
    #contentContainer {
        .infoContent {
            padding: 15px;
        }

        .leftLogo {
            font-size: 70px;
            padding: 10px;
        }
    }


    #textItem {
        .subtitle {
            font-size: 18px;

        }

        .description {
            font-size: 14px;
        }

        .text {
            font-size: 16px;
        }
    }
    .infoContent.contactClass #textItem {
        height: auto;
        margin: 10px 0;
    }
    .longClass #textItem {
        .subtitle {
            font-size: 16px;
        }

        .description {
            font-size: 12px;
        }

        .text {
            font-size: 13px;
        }
    }

    .faqClass #textItem {
        .subtitle {
            font-size: 16px;
        }

        .text {
            font-size: 14px;
            line-height: 16px;
        }

    }

    #raining {
        transform: scale(0.8);
        right: 60px;
        top: 40px;
    }
}

@media screen and (max-width: 768px) {
    #contentContainer {
        @include flex-center();

        .leftLogo {
            display: none;
        }

        .infoContainer {
            @include flex-center();

            .title {
                display: none;
            }
        }

        #raining {
            transform: scale(0.5);
            right: 50px;
            top: 20px;
        }

        .infoContent {
            width: calc(70vw - 20px);
            padding-right: 20px;
            padding: 20px;
        }

        .infoContent.contactClass {

            margin-right: 0;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;

            #textItem.textItem {
                margin: 0;
                flex-direction: row !important;

                .subtitleBox {
                    .subtitle {
                        margin: 0;
                    }

                    margin-bottom: 40px;

                    flex-direction: row;
                    align-self: center;

                    .description {

                        font-size: 20px !important;
                    }
                }


            }
        }

        #raining {
            transform: scale(0.7);
            right: 50px;
            top: 40px;
        }
    }



}

@media screen and (max-width: 500px) {
    #contentContainer {
        @include flex-center();
        width: 100vw;

        .leftLogo {
            display: none;
        }

        .infoContainer {
            @include flex-center();
            width: calc(100vw - 10px);

            .title {
                display: none;
            }

            .infoContent {
                width: calc(100% - 50px);
                height: calc(100% - 80px);
                padding: 30px 20px;

                &.contactClass {
                    #textItem:nth-child(3) {
                        display: none;
                    }
                }
            }
        }

        #raining {
            transform: scale(0.5);
            right: 50px;
            top: 20px;
        }
    }

    #textItem {
        .subtitle {
            font-size: 18px;
            white-space: nowrap;
        }

        .description {
            font-size: 14px;
            white-space: nowrap;
        }

        .text {
            font-size: 16px;
            line-height: 18px;
        }
    }

    .longClass #textItem {
        .subtitle {
            font-size: 14px;
        }

        .description {
            font-size: 12px;
        }

        .text {
            margin-top: 3px;
            font-size: 13px;
        }
    }

    .faqClass #textItem {
        .subtitle {
            font-size: 13px;
        }

        .text {
            margin-top: 3px;
            font-size: 12px;
        }

    }

    .introClass {
        padding-top: 40px;
        padding-bottom: 40px;

    }


}
</style>