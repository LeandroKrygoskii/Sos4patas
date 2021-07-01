import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Adoption from '../models/Adoption';
import RequestAdoption from '../models/RequestAdoption';
import AdoptionView from '../views/AdoptionViews';
import * as Yup from 'yup';

export default{


   //LISTA TODAS AS ADOÇOES CRIADAS
    async index(request : Request, response : Response){
        const adoptionRepository = getRepository(Adoption);

        const showDogs = await adoptionRepository.find({
            relations: ['images']
        });
         
        return response.json(AdoptionView.renderMany(showDogs));
    },


    //LISTA A ADOÇÃO PELO ID
    async show(request : Request, response : Response){
        
        const { id } = request.params; 
        
        const adoptionRepository = getRepository(Adoption);
        
        const showDog = await adoptionRepository.findOneOrFail(id, {
            relations: ['images']
        });
         
        return response.json(AdoptionView.render(showDog));
    },

    async delete(request : Request, response : Response){
        const {id} = request.params;
         
        const adoptionRepository = getRepository(Adoption);

        const test = await adoptionRepository.findOne(id)
        if(test){
            await adoptionRepository.delete(id);
            return response.json({menssage: "sucesso"});
        }else{
            return response.json({menssage: "esse Id não está cadastrado no sistema"});
        }
        
    },
    
    

     //CRIA UMA NOVA ADOÇÃO
    async create(request : Request, response : Response) {

        const {
            name,
            about,
            sexo,
            porte,
            
        } = request.body;

        console.log(request.body)
    
        const adoptionRepository = getRepository(Adoption);
        
        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        })


        const data = {  
            name,
            about,
            sexo,
            porte,
            images
        };

        console.log(data)
        
        const schema = Yup.object().shape({
            name: Yup.string().required('Titulo Obrigatório'),
            about: Yup.string().required('Descrição Obrigatória'),
            sexo: Yup.string().required('Genero Obrigatório'),
            porte: Yup.string().required('Porte Obrigatório'),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()         
             })
            )
        })

        await schema.validate(data, {
            abortEarly: false,
        });

        const adoption = adoptionRepository.create(data);
         
        await adoptionRepository.save(adoption)
    
    
        return response.status(201).json(adoption)
    }
};