import { CDSDispatcher } from '@dxfrontier/cds-ts-dispatcher';
import { UnboundActionsHandler } from './handler/UnboundActionsHandler';
import { Entity1Handler } from './handler/Entity1Handler';

module.exports = new CDSDispatcher([Entity1Handler, UnboundActionsHandler]).initialize();
