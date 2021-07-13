import { Entity, Column, PrimaryGeneratedColumn, OneToMany , JoinColumn} from 'typeorm';


@Entity('denuncias')
export default class RequestAdoption{
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    title: string;

    @Column()
    email: string;

    @Column()
    about: string;

}