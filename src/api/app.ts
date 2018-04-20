import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import { Model, Document } from "mongoose";
import { Request, Response } from "express";

import { Todo, todoSchema } from './models/todo';
import todoData from "./mockdata/todos";

class App {
	todos: Todo[] = todoData;

	constructor() {
		this.app = express();
		this.config();
		this.routes();
		mongoose.connect('mongodb://127.0.0.1:27017/test');
		const db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function () {
			console.log('We are connected!')
		})
	}

	public app: express.Application;

	private config(): void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(cors({
			origin: '*',
			optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
		}));
	}

	private routes(): void {
		const router = express.Router();
		const TodoModel = mongoose.model('todos', todoSchema);

		router.get('/api/todos', (req: Request, res: Response) => {
			TodoModel.find({}, (err, todos) => {
				if (err) {
					return console.error(err);
				}
				console.log(todos)
				res.status(200).json(todos)
			});
		});

		router.post('/api/todo', (req: Request, res: Response) => {
			TodoModel.create(req.body, function (err, todo) {
				if (err) return err;
				res.json(todo);
			});
		});

		router.put('/api/todo/:id', (req: Request, res: Response) => {
			console.log(req.body);
			console.log(req.params.id);

			TodoModel.findByIdAndUpdate(req.params.id, req.body, (err, todo) => {
				if (err) return res.status(500).send(err);
				return res.json(todo);
			});
		});

		router.delete('/api/todos/delete', (req: Request, res: Response) => {
			TodoModel.remove({ completed: true }, (err) => {
				if (err) return;

				return res.status(200).json("Db emptied");
			});
		})

		router.delete('/api/todo/delete/:id', (req: Request, res: Response) => {

			TodoModel.findByIdAndRemove(req.params.id, req.body, function (err, todo) {
				if (err) return err;
				return res.json(todo);
			});
		});

		this.app.use('/', router)

	}

}

export default new App().app;