import { defineStore } from "pinia";

export const useStatusStore = defineStore({
    id: "status",
    state: () => ({
        isShowCover: false, // show toc or not
        curInfoIndex: 0, // current info's index, start at zero
    }),
    actions: {
        setIsShowCover(isShow) {
            this.isShowCover = isShow;
        },
        getIsShowCover() {
            return this.isShowCover;
        },
        getCurInfoIndex() {
            return this.curInfoIndex
        },
        setCurInfoIndex(index) {
            this.curInfoIndex = index;
            //if (index == 0) this.handleJuryTeacher()

        },
        handleJuryTeacher() {
            /*
                       if (!(window.innerWidth < 500 && this.curInfoIndex == 0)) return;
            const textDom = document.querySelectorAll(".textItem:last-child .text")[0]
            const text = textDom.innerHTML
            textDom.innerHTML = null
            const arr = text.split('，')
            arr.forEach((t) => {
                
        
            })
  
            */
        }
    }




}) 