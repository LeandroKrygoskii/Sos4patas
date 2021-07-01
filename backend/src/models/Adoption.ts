import { Entity, Column, PrimaryGeneratedColumn, OneToMany , JoinColumn} from 'typeorm';
import Image from './Image';


@Entity('adoption')
export default class Adoption{
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;

    @Column()
    about: string;

    @Column()
    sexo: string;

    @Column()
    porte: string;

    @OneToMany(() => Image, img => img.adoption , {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'adoption_id'})
    images: Image[];

}