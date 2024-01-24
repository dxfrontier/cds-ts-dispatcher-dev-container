// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';
import * as _ from './..';
export default { name: 'ServiceB' }
export function _Entity2Aspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Entity2 extends Base {
        ID?: number;
        descr?: string | null;
      static actions: {
    }
  };
}
export class Entity2 extends _._managedAspect(_Entity2Aspect(__.Entity)) {}
export class Entity2_ extends Array<Entity2> {}
Object.defineProperty(Entity2, 'name', { value: 'ServiceB.Entity2' })
Object.defineProperty(Entity2_, 'name', { value: 'ServiceB.Entity2' })
