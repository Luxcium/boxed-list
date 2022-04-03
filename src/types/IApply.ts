import { IMap } from './IMap';
import { IUnbox } from './IUnbox';

/** IApply<T> extends IMap<T> */
export interface IApply<T> extends IMap<T> {
  /**
   *
   * @remarks
   * A value that implements the Apply specification must also
   * implement the IMap<T> specification.
   *
   */
  ap<R>(c: IMap<(val: T) => R>): IApply<R> & IUnbox<R> & IMap<R>;
}
