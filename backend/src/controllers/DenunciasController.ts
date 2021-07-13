import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import DenunciaModel from '../models/Denuncias';
import nodemailer from 'nodemailer';
import SMTP_CONFIG from '../config/smtp';
import * as Yup from 'yup';



export default{


    async index(request : Request, response : Response){
        const adoptionRepository = getRepository(DenunciaModel);

        const showDogs = await adoptionRepository.find();
         
        return response.json(showDogs);
    },


    async create(request: Request, response: Response){

        const {
            title,
            email,
            about
        } = request.body;

        const requestDenunciaRepository = getRepository(DenunciaModel);

        const data = {
            title,
            email,
            about,
        }

        const schema = Yup.object().shape({
            title: Yup.string().required('Titulo Obrigatório'),
            email: Yup.string().required('Email Obrigatória'),
            about: Yup.string().required('Assunto Obrigatório'),
        });

        await schema.validate(data ,{
            abortEarly: false,
        })

        const requestDenuncia = requestDenunciaRepository.create(data);
        await requestDenunciaRepository.save(requestDenuncia);

        //envio de email
        
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
            subject: title,
            text: about
        }).then(info =>{
            console.log(info) 
            
        }).catch(error => {
            response.send(error)
        })
         

        return response.status(201).json({menssage: 'Sua denuncia foi cadastrada no sistema, agora aguarde entrarmos em contato'})

    }
}