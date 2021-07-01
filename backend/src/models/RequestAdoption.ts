import { Entity, Column, PrimaryGeneratedColumn, OneToMany , JoinColumn} from 'typeorm';


@Entity('request_adoption')
export default class RequestAdoption{
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

}