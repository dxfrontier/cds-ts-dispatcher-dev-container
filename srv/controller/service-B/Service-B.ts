import { CDSDispatcher } from '@dxfrontier/cds-ts-dispatcher';
import { UnboundActionsHandler } from './handler/UnboundActionsHandler';
import { Entity2Handler } from './handler/Entity2Handler';

export = new CDSDispatcher([Entity2Handler, UnboundActionsHandler]).initialize();
