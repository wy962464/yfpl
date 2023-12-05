// 获取assets静态图片资源
export function getImageUrl(url) {
    return new URL(`../images/${url}`, import.meta.url).href;
}