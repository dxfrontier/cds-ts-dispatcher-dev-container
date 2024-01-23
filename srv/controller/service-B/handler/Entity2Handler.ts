import { EntityHandler, Inject, SRV, Service } from '@dxfrontier/cds-ts-dispatcher';
import { Entity2 } from '../../../../@cds-models/ServiceB';

@EntityHandler(Entity2)
export class Entity2Handler {
  @Inject(SRV) private readonly srv: Service;
}
