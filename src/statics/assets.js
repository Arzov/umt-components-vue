export function getImgPath(file) {
    return require(`public/images/${file.toLowerCase()}`)
}