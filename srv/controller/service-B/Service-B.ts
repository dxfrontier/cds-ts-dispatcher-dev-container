import { CDSDispatcher } from '@dxfrontier/cds-ts-dispatcher';

import { Entity2Handler } from './handler/Entity2Handler';
import { UnboundActionsHandler } from './handler/UnboundActionsHandler';

export = new CDSDispatcher([Entity2Handler, UnboundActionsHandler]).initialize();
