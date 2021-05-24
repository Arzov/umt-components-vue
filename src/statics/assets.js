export function getImgPath(file) {
    return require(`@@/images/${file.toLowerCase()}`)
}