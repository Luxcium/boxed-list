import { IMap } from './IMap';

/** IChain extends [[IMap]] */
export interface IChain<T> extends IMap<T> {
  chain<R>(fn: (value: T) => R): R;
}
