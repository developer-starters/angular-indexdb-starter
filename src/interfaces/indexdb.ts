import { DBSchema } from "idb"

export interface Indexdb extends DBSchema {
    'store' :{
    key: String,
    value: String
  }
}
