import { Injectable } from '@angular/core';
import { IDBPDatabase, openDB } from 'idb';
import { Indexdb } from '../interfaces/indexdb';

@Injectable({
  providedIn: 'root'
})
export class IndexdbService {
  db: IDBPDatabase<Indexdb> | undefined;

  constructor() { 
    this.connectToDb()
  }

  async connectToDb(){
    this.db = await openDB<Indexdb>('index-db',1,{
      upgrade(database) {
        database.createObjectStore('store');
      },
    });
  }

  async addTodo(todo: string){
    return this.db?.put("store",todo,'todo');
  }

  async getTodos(){
    return this.db?.getAll("store")
  }

}
