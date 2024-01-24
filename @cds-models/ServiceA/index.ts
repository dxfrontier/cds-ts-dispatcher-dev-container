// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';
import * as _ from './..';
export default { name: 'ServiceA' }
export function _Entity1Aspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Entity1 extends Base {
        ID?: number;
        descr?: string | null;
      static actions: {
    }
  };
}
export class Entity1 extends _._managedAspect(_Entity1Aspect(__.Entity)) {}
export class Entity1_ extends Array<Entity1> {}
Object.defineProperty(Entity1, 'name', { value: 'ServiceA.Entity1' })
Object.defineProperty(Entity1_, 'name', { value: 'ServiceA.Entity1' })
