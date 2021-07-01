import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Adoption from './Adoption';

@Entity('images')
export default class Image{
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    path: string;
    
    @ManyToOne(() => Adoption, adoption => adoption.images)
    @JoinColumn({name: 'adoption_id'})
    adoption: Adoption;

}