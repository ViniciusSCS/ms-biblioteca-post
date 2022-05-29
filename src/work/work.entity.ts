import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Work {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    title: string

    @Column()
    publisher: string

    @Column()
    photo: string

    @Column()
    authors: string
}
