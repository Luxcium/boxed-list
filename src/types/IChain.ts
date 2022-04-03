import { IMap } from './IMap';

/** IChain<T> extends IMap<T> */
export interface IChain<T> extends IMap<T> {
  chain<R>(fn: (value: T) => R): R;
}
