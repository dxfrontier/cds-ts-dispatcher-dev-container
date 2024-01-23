import { Inject, SRV, Service, ServiceLogic } from '@dxfrontier/cds-ts-dispatcher';
import { Entity1Repository } from '../repository/Entity1Repository';

@ServiceLogic()
export class Entity1Service {
  @Inject(SRV) private readonly srv: Service;
  @Inject(Entity1Repository) private readonly entity1Service: Entity1Repository;
}
