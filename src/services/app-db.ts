import Dexie, { Table } from 'dexie';
import { Todo } from '../interfaces/todo';

export class AppDb extends Dexie {
    todo!: Table<Todo, number>;

    constructor() {
        super('ngdexieliveQuery');
        this.version(3).stores({
            todo: '++id',
        });
        this.on('populate', () => this.populate());
    }

    async populate() {
        await db.todo.bulkAdd([
            {
                text: 'Feed the birds',
                completed: true,
            },
            {
                text: 'Watch a movie',
                completed: false,
            },
        ]);
    }
}

export const db = new AppDb();