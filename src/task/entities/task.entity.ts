import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Task extends BaseEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column({ name: 'title', type: 'varchar', length: 100 })
 title: string;

 @Column({ name: 'description', type: 'varchar', nullable: true, length: 255 })
 description?: string;

 @Column({ name: 'priority', type: 'varchar', length:10 })
 priority: string;
}
