import type { MiddlewareImpl, Next, TypedRequest } from '@dxfrontier/cds-ts-dispatcher';
import type { Entity2 } from '../../@cds-models/ServiceB';

export class MiddlewareEntity2 implements MiddlewareImpl {
  public async use(req: TypedRequest<Entity2>, next: Next): Promise<void> {
    console.log('Middleware entity 2 : EXECUTED');

    next();
  }
}
