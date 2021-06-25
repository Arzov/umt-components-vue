export function getImgPath(file) {
    return require(`./../assets/img/${file.toLowerCase()}`)
}