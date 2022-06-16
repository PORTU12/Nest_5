import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    status: string

    @Column({
        type: 'enum',
        enum: 'StatusEnum',
        default: 'StatusEnum.Suggestion'
    })

    @Column({default: 0})
    upvotes: string

    @Column('text', {default: ''})
    description: string

    @Column({default: 0})
    comments: string
}