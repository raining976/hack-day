
/**
 * 从 src/assets/imgs/下 动态获取图片
 * @param {String} imgName 图片名称
 * @returns 
 */
export const getAssetsImg = (imgName) => {
    return new URL(`../assets/imgs/${imgName}.webp`, import.meta.url).href
}