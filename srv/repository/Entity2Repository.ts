import { Repository } from '@dxfrontier/cds-ts-dispatcher';
import { BaseRepository } from '@dxfrontier/cds-ts-repository';

import { Entity2 } from '../../@cds-models/ServiceB';

@Repository()
export class Entity2Repository extends BaseRepository<Entity2> {
  constructor() {
    super(Entity2);
  }
  // ... define custom CDS-QL actions if BaseRepository ones are not satisfying your needs !
}
