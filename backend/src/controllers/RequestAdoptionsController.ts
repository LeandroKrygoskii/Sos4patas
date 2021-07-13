import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Adoption from '../models/Adoption';
import RequestAdoption from '../models/RequestAdoption';
import nodemailer from 'nodemailer';
import SMTP_CONFIG from '../config/smtp';
import * as Yup from 'yup';

export default{
    
    async create(request : Request, response : Response){
        const {
            name,
            email,
            telefone,
            idAnimal
        } = request.body;

        console.log(request.body)
        
        const requestAdoptionRepository = getRepository(RequestAdoption);

        const data = {
            name,
            email,
            telefone,
            idAnimal
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


         //envio de email

         const allAdoption = getRepository(Adoption);
         const animal = await allAdoption.findOne(idAnimal)

         const nameAnimal = animal?.name;

         console.log(animal);
        
         const transporter = nodemailer.createTransport({
            host: SMTP_CONFIG.host,
            port: SMTP_CONFIG.port,
            secure: false,
            auth: {user: SMTP_CONFIG.user, pass: SMTP_CONFIG.pass},
            tls:{rejectUnauthorized: false},
        })

        transporter.sendMail({
            from: SMTP_CONFIG.user,
            to: SMTP_CONFIG.user,
            replyTo: email,
            subject: 'Novo Pedido de Adoção',
            text: `${name} quer adotar ${nameAnimal} email: ${email}`
        }).then(info =>{
            console.log(info) 
            
        }).catch(error => {
            response.send(error)
        })

        return response.status(201).json({message: 'Tudo certo!, agora aguarde entrarmos em contato'})

    },

  
}