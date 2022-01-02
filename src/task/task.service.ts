import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
 constructor(@InjectRepository(Task) private readonly repository: Repository<Task>) { }

 create(createTaskDto: CreateTaskDto): Promise<Task> {
   const task = this.repository.create(createTaskDto);
   return this.repository.save(task);
 }

 findAll(): Promise<Task[]> {
   return this.repository.find();
 }

 findOne(id: string): Promise<Task> {
   return this.repository.findOne(id);
 }

 async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
   const task = await this.repository.preload({
     id: id,
     ...updateTaskDto,
   });
   if (!task) {
     throw new NotFoundException(`Task ${id} not found`);
   }
   return this.repository.save(task);
 }

 async remove(id: string) {
   const task = await this.findOne(id);
   return this.repository.remove(task);
 }
}
