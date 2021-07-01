import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany , JoinColumn} from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('user')
export default class RequestAdoption{
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;

    @Column()
    password: string;


    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
     this.password = bcrypt.hashSync(this.password, 8);
 }
}