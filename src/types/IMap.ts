import { IUnbox } from './IUnbox';

/** IMap<T> */
export interface IMap<T> extends IUnbox<T> {
  map<R>(fn: (value: T) => R): IMap<R> & IUnbox<R>;
}
