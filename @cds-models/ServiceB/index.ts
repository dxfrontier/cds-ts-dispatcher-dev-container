// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './..';
import * as __ from './../_';
export default { name: 'ServiceB' }
export function _Entity2Aspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Entity2 extends Base {
        createdAt?: __.CdsTimestamp | null;
    /**
    * Canonical user ID
    */
        createdBy?: _.User | null;
        modifiedAt?: __.CdsTimestamp | null;
    /**
    * Canonical user ID
    */
        modifiedBy?: _.User | null;
        ID?: number;
        descr?: string | null;
      static readonly actions: Record<never, never>
  };
}
export class Entity2 extends _._managedAspect(_Entity2Aspect(__.Entity)) {}
Object.defineProperty(Entity2, 'name', { value: 'ServiceB.Entity2' })
export class Entity2_ extends Array<Entity2> {$count?: number}
Object.defineProperty(Entity2_, 'name', { value: 'ServiceB.Entity2' })
