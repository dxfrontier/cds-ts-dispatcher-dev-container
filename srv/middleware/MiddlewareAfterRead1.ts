import type { Entity1 } from '#cds-models/ServiceA';
import type { MiddlewareImpl, NextMiddleware, TypedRequest } from '@dxfrontier/cds-ts-dispatcher';

export class MiddlewareMethodAfterRead1 implements MiddlewareImpl {
  public async use(req: TypedRequest<Entity1>, next: NextMiddleware): Promise<void> {
    console.log('Middleware 1: @AfterRead');
    await next();
  }
}
