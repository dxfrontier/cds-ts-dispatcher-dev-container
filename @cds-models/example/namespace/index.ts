// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../_';
import * as _ from './../..';
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
Object.defineProperty(Entity1, 'name', { value: 'example.namespace.Entity1' })
Object.defineProperty(Entity1_, 'name', { value: 'example.namespace.Entity1' })

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
Object.defineProperty(Entity2, 'name', { value: 'example.namespace.Entity2' })
Object.defineProperty(Entity2_, 'name', { value: 'example.namespace.Entity2' })
