import { DBSchema } from "idb"

interface StoreValue {
  key: string;
  value: string;
}
export interface Indexdb extends DBSchema {
    'store' : StoreValue
}
