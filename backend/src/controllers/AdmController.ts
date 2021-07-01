import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Users from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import RequestAdoption from '../models/RequestAdoption';
import UserView from '../views/UserView';
import * as Yup from 'yup';

export default {

    async  checkToken(request : Request , response : Response) {
         
        return response.status(200).send({userId : request.id , name: request.name , token : request.token})
    },


    async create(request : Request , response : Response){

        const {
            name,
            password
        } = request.body;

        const userRepository = getRepository(Users);

        const data = {
            name,
            password
        } 

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            password : Yup.number().required(),

        });

        await schema.validate(data, {
            abortEarly: false,
        });


        const user = userRepository.create(data)
        await userRepository.save(user);

        return response.status(201).json(user);
    },


    async login(request : Request , response : Response){
       
        const {
            name,
            password
        } = request.body;
 
        const userRepository =  getRepository(Users)
        console.log(name, password);
        const user = await userRepository.findOne({where: { name }}); 
        

        if(!user) {
            return response.sendStatus(401);
        }

        const isValuePass = await bcrypt.compare(password , user.password);

        if(!isValuePass){
            return response.sendStatus(401);
        }        

        const token = jwt.sign({id : user.id , name : user.name}, 'secret' , {expiresIn : '8h'})
           
        return response.json({
                 user : UserView.render(user),
                token : token,      
        })

    }

  
}