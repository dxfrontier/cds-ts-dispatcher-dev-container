import { Inject, SRV, Service, ServiceLogic } from '@dxfrontier/cds-ts-dispatcher';
import { Entity2Repository } from '../repository/Entity2Repository';

@ServiceLogic()
export class Entity2Service {
  @Inject(SRV) private readonly srv: Service;
  @Inject(Entity2Repository) private readonly entity1Service: Entity2Repository;
}
