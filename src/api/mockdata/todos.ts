import { Todo } from "../models/todo";

const todos: Todo[] = [
	{
		id: 1,
		title: 'Learn Redux',
		description: 'Spend a few days on learning Redux.',
		completed: false
	},
	{
		id: 2,
		title: 'Learn Express',
		description: 'Spend a few days on building REST API:s with Express.',
		completed: false
	},
	{
		id: 3,
		title: "What's Mongoose?",
		description: 'Study using Mongoose module with MongoDB.',
		completed: false
	},
	{
		id: 4,
		title: 'Beers on Friday!',
		description: 'Remember to have a couple of cold ones on Friday!',
		completed: false
	}
];

export default todos;