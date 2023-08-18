import { BeforeInsert, BeforeUpdate, Column, Entity} from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import {getRounds, hashSync} from "bcryptjs"


@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 45})
    name: string;

    @Column({type: "varchar", length: 45, unique: true})
    email: string;

    @Column({type: "varchar", length: 45})
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPass() {
        const isEncrypted: number = getRounds(this.password);
        if (!isEncrypted) {
        this.password = hashSync(this.password, 10);
        }
    }
}