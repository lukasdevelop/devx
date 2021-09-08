import multer from "multer"
import crypto from 'crypto'


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
            if(err){
                cb(err, 'Error');
            }

            const fileName = `${hash.toString('hex')}-${file.originalname}`

            cb(null, fileName)
        }) 
    }
})

const uploads = multer({ storage: storage })


export default uploads;