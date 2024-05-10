import { CDSDispatcher } from '@dxfrontier/cds-ts-dispatcher';

import { Entity1Handler } from './handler/Entity1Handler';
import { UnboundActionsHandler } from './handler/UnboundActionsHandler';

export = new CDSDispatcher([Entity1Handler, UnboundActionsHandler]).initialize();
