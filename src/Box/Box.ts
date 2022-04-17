import type { IApply, IBox, IChain, IMap, IUnbox, IValue } from '../types';

/**
 * This is the doc comment for Box class
 */
export default class Box<T>
  implements IApply<T>, IChain<T>, IMap<T>, IUnbox<T>, IBox<T>, IValue<T>
{
  #value: T;
  private boxedValue: T;

  // static ============================================-| of() |-====
  public static of<TVal>(value: TVal) {
    return new Box(value);
  }

  // static ==========================================-| from() |-====
  public static from<TVal>(box: IUnbox<TVal>) {
    return new Box(box.unbox());
  }

  // protected ================================-| constructor() |-====
  protected constructor(value: T) {
    this.boxedValue = value;
    this.#value = this.boxedValue;

    Object.defineProperty(this, 'fantasy-land/map', {
      value: this.map,
      writable: false,
      enumerable: false,
      configurable: false,
    });

    return this;
  }

  // public IApply<T> ==================================-| ap() |-====
  public ap<R>(c: IMap<(val: T) => R>) {
    return this.map<R>(val => c.map(fn => fn(val)).unbox());
  }

  // public IChain<T> ===============================-| chain() |-====
  public chain<R>(fn: (value: T) => R) {
    return this.map(fn).value;
  }

  public 'fantasy-land/map' = this.map;
  // public IMap<T> & 'fantasy-land/map' ==============-| map() |-====
  public map<R>(fn: (value: T, index?: -1) => R) {
    return Box.of(fn(this.#value, -1));
  }

  // public IUnbox<T> ===============================-| unbox() |-====
  public unbox(): T {
    return this.#value;
  }

  // get IBox<T> ========================================-| box |-====
  public get box() {
    return Box.of(this.unbox());
  }

  // get IValue<T> ====================================-| value |-====
  public get value() {
    return this.unbox();
  }
}
export { Box };
