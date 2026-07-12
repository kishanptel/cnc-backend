const multer = require("multer")
const path = require("path")

const FileStore = multer.memoryStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "..", "uploads"))
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext)
    }
})

const upload = multer({ storage: FileStore })

module.exports = upload