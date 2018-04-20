import * as mongoose from 'mongoose';

export interface Todo {
	id: number;
	title: string;
	description: string;
	completed: boolean;
}

export const todoSchema = new mongoose.Schema({
	title: String,
	description: String,
	completed: Boolean,
});