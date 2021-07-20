import photo from "../data/photos.js"
const checkAlbumAvailabity = (req, res) => {
    let checker = photo.filter(obj => obj.albumId == req.params.id);

    if (checker.length == 0) {
        res.status(400).json([{ "data": " Album not Found" }]);
    } else {
        let result = [];
        checker.map((data) => {
            result.push({ "title": data.title, "thumbnailUrl": data.thumbnailUrl })
        })
        res.status(200).json(result);
    }


}
export default checkAlbumAvailabity;