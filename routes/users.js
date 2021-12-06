const Image = require("../model/image")
const router = require("express").Router();
const multer = require("multer");
const Controller = require("../controller/user");
const storage = multer.diskStorage({
    destination: "public/images",
    filename: function (req, file, cb) {
        const extension = "".concat(file.originalname).split(".").pop();
        cb(null, Date.now().toString(36) + "." + extension);
    },
});
const Upload = multer({ storage });
router.post("/uploadFile",Upload.single("file"), Controller.uploadFile);
router.get("/getFile/:id",Controller.getFile)
router.get("getAllFile",Controller.getAllFile)

module.exports = router;
