import Adoption from '../models/Adoption';
import ImagesView from '../views/ImagesView';

export default{
    render(adoption: Adoption){
         
        return{
            id: adoption.id,
            name: adoption.name,
            about: adoption.about,
            sexo: adoption.sexo,
            porte: adoption.porte,
            images: ImagesView.renderMany(adoption.images)
        };
    },
    renderMany(adoptions: Adoption[]){
        return adoptions.map(adoption => this.render(adoption));
    }
};