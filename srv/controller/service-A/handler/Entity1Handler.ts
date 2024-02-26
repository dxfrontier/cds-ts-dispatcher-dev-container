import { AfterRead, EntityHandler, Inject, SRV, Service, TypedRequest, Use } from '@dxfrontier/cds-ts-dispatcher';
import { Entity1 } from '../../../../@cds-models/ServiceA';
import { MiddlewareEntity1 } from '../../../middleware/MiddlewareEntity1';
import { MiddlewareMethodAfterRead1 } from '../../../middleware/MiddlewareAfterRead1';
import { MiddlewareMethodAfterRead2 } from '../../../middleware/MiddlewareAfterRead2';

@EntityHandler(Entity1)
@Use(MiddlewareEntity1)
export class Entity1Handler {
  @Inject(SRV) private readonly srv: Service;
  // @OnRead, @BeforeRead, @AfterRead, @OnUpdate ...

  @AfterRead()
  @Use(MiddlewareMethodAfterRead1, MiddlewareMethodAfterRead2)
  public async afterRead(results: Entity1, req: TypedRequest<Entity1>): Promise<Entity1> {
    // ...
    return results;
  }
}
