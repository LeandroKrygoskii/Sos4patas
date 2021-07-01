import { Request , Response , NextFunction} from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayLoad {
    id : number;
    name : string;
    iat : number;
    exp : number;
}

export default function authMiddleware( req : Request, res: Response, next : NextFunction) {
     
    const { authorization } = req.headers;

    if(!authorization) {
        return res.sendStatus(401);
    }

    const token = authorization.replace('Bearer' , '').trim();


    try {
        const data = jwt.verify(token , 'secret');
        
        console.log(data)

        const { id , name } = data as TokenPayLoad;
        req.id = id;
        req.name = name;
        req.token = token;
        next();
    } catch {
        
        return res.sendStatus(401);
    }
}