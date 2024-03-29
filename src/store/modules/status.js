import { defineStore } from "pinia";

export const useStatusStore = defineStore({
    id: "status",
    state: () => ({
        isShowCover: false, // show toc or not
    }),
    actions:{
        setIsShowCover(isShow){
            this.isShowCover = isShow;
        },
        getIsShowCover(){
            return this.isShowCover;
        },
    }




}) 