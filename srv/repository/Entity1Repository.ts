import { Repository } from '@dxfrontier/cds-ts-dispatcher';
import { BaseRepository } from '@dxfrontier/cds-ts-repository';

import { Entity1 } from '#cds-models/ServiceA';

@Repository()
export class Entity1Repository extends BaseRepository<Entity1> {
  constructor() {
    super(Entity1);
  }
  // ... define custom CDS-QL actions if BaseRepository ones are not satisfying your needs !
}
