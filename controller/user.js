const Image = require("../model/image")
const sizeOf = require('image-size');
module.exports.uploadFile = async (req, res, next) => {
    try {

        if (req.file) {
            console.log(req.file)
            const extension = req.file.mimetype.split("/")
            req.body.imagePath = `public/images/${req.file.filename}`;
            const dimensions = sizeOf(req.body.imagePath);
            console.log(dimensions.height)
            req.body.height = dimensions.height
            req.body.width =  dimensions.width
            req.body.size = req.file.size
            req.body.extension = extension[1]
            req.body.personName = req.body.personName
            req.body.location = req.body.location


        }
          var data = await Image(req.body).save()
        return res.json( data ) ;
    } catch (error) {
        next(error);
    }
};
module.exports.getFile = async (req, res, next) => {
    try {
      const imageInfo = await Image.findOne({_id:req.params.id})
        return res.json( imageInfo ) ;
    } catch (error) {
        next(error);
    }
};
module.exports.getAllFile = async (req, res, next) => {
    try {
      const imageInfo = await Image.find({})
        return res.json( imageInfo ) ;
    } catch (error) {
        next(error);
    }
};

