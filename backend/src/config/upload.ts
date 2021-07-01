import Multer from 'multer';
import path from 'path';


export default {
    
    storage: Multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) =>{
            const filename = `${Date.now()}-${file.originalname}`;

            cb(null, filename)
        }
    })

};