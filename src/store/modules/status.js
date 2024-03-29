import { defineStore } from "pinia";

export const useStatusStore = defineStore({
    id: "status",
    state: () => ({
        isShowCover: false, // show toc or not
        curInfoIndex: 0, // current info's index, start at zero
    }),
    actions:{
        setIsShowCover(isShow){
            this.isShowCover = isShow;
        },
        getIsShowCover(){
            return this.isShowCover;
        },
        getCurInfoIndex(){
            return this.curInfoIndex
        },
        setCurInfoIndex(index){
            this.curInfoIndex = index;
        }
    }




}) 