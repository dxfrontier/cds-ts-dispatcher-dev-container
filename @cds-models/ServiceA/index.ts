// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './..';
import * as __ from './../_';
export default { name: 'ServiceA' }
export function _Entity1Aspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Entity1 extends Base {
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
export class Entity1 extends _._managedAspect(_Entity1Aspect(__.Entity)) {}
Object.defineProperty(Entity1, 'name', { value: 'ServiceA.Entity1' })
export class Entity1_ extends Array<Entity1> {$count?: number}
Object.defineProperty(Entity1_, 'name', { value: 'ServiceA.Entity1' })
