import { AfterRead, EntityHandler, Inject, SRV, Service, TypedRequest } from '@dxfrontier/cds-ts-dispatcher';
import { Entity1 } from '../../../../@cds-models/ServiceA';

@EntityHandler(Entity1)
export class Entity1Handler {
  @Inject(SRV) private readonly srv: Service;
  // @OnRead, @BeforeRead, @AfterRead, @OnUpdate ...

  @AfterRead()
  public async afterRead(results: Entity1, req: TypedRequest<Entity1>): Promise<Entity1> {
    // TODO: ...
    return results;
  }
}
