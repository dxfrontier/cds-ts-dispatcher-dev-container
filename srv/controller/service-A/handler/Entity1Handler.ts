import { EntityHandler, Inject, SRV, Service } from '@dxfrontier/cds-ts-dispatcher';
import { Entity1 } from '../../../../@cds-models/ServiceA';

@EntityHandler(Entity1)
export class Entity1Handler {
  @Inject(SRV) private readonly srv: Service;
}
