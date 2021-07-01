import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Adoption from '../models/Adoption';
import RequestAdoption from '../models/RequestAdoption';
import * as Yup from 'yup';

export default{
    
    async create(request : Request, response : Response){
        const {
            name,
            email,
            telefone,
        } = request.body;

        console.log(request.params)
        
        const requestAdoptionRepository = getRepository(RequestAdoption);

        const data ={
            name,
            email,
            telefone
        }

        

        const schema = Yup.object().shape({
            name: Yup.string().required('Nome Obrigatório'),
            email: Yup.string().required('Email Obrigatória'),
            telefone: Yup.string().required('Telefone Obrigatório'),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const request_adoption = requestAdoptionRepository.create(data);
        await requestAdoptionRepository.save(request_adoption);

        return response.status(201).json({message: 'Tudo certo!, agora aguarde entrarmos em contato'})

    },

  
}