/** IUnbox<T> */
export interface IUnbox<V> {
  /** Unboxes the value `V` from inside **this** _Functor_ */
  unbox(): V;
}
