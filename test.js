import photo from "./data/photos.js";

var foundValue = photo.filter(obj => obj.albumId === 'm');
if (foundValue.length == 0) {
    console.log("array not found")
} else console.log(foundValue);