import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
    id: string;

    email: string;

    password: string;
}

export default User;

