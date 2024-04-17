import type { MiddlewareImpl, NextMiddleware, TypedRequest } from '@dxfrontier/cds-ts-dispatcher';
import type { Entity1 } from '../../@cds-models/ServiceA';

export class MiddlewareMethodAfterRead2 implements MiddlewareImpl {
  public async use(req: TypedRequest<Entity1>, next: NextMiddleware): Promise<void> {
    console.log('Middleware 2: @AfterRead');
    await next();
  }
}
