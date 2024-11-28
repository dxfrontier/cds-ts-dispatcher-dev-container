import {
  AfterRead,
  EntityHandler,
  Inject,
  Req,
  Results,
  Service,
  CDS_DISPATCHER,
  Use,
} from '@dxfrontier/cds-ts-dispatcher';

import { Entity1 } from '#cds-models/ServiceA';
import { MiddlewareMethodAfterRead1 } from '../../../middleware/MiddlewareAfterRead1';
import { MiddlewareMethodAfterRead2 } from '../../../middleware/MiddlewareAfterRead2';
import { MiddlewareEntity1 } from '../../../middleware/MiddlewareEntity1';

@EntityHandler(Entity1)
@Use(MiddlewareEntity1)
export class Entity1Handler {
  @Inject(CDS_DISPATCHER.SRV) private readonly srv: Service;
  // @OnRead, @BeforeRead, @AfterRead, @OnUpdate ...

  @AfterRead()
  @Use(MiddlewareMethodAfterRead1, MiddlewareMethodAfterRead2)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async afterRead(@Results() results: Entity1, @Req() req: Entity1): Promise<Entity1> {
    // ...
    return results;
  }
}
