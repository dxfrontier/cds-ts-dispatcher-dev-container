import { EntityHandler, Inject, SRV, Service, Use } from '@dxfrontier/cds-ts-dispatcher';
import { Entity2 } from '../../../../@cds-models/ServiceB';
import { MiddlewareEntity2 } from '../../../middleware/MiddlewareEntity2';

@EntityHandler(Entity2)
@Use(MiddlewareEntity2)
export class Entity2Handler {
  @Inject(SRV) private readonly srv: Service;

  // @OnCreate, @BeforeUpdate, @AfterDelete ...
}
