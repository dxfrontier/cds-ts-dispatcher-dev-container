import type { MiddlewareImpl, NextMiddleware, TypedRequest } from '@dxfrontier/cds-ts-dispatcher';
import type { Entity1 } from '../../@cds-models/ServiceA';

export class MiddlewareEntity1 implements MiddlewareImpl {
  public async use(req: TypedRequest<Entity1>, next: NextMiddleware): Promise<void> {
    console.log('Middleware entity 1 : EXECUTED');
    await next();
  }
}
