import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async findAll() {
    return this.taskModel.find().exec();
  }

  async create(createTaskDto: { title: string; description: string }) {
    const newTask = new this.taskModel(createTaskDto);
    return newTask.save();
  }
}
