import { Inject, Service, SRV, UnboundActions } from '@dxfrontier/cds-ts-dispatcher';

@UnboundActions()
export class UnboundActionsHandler {
  @Inject(SRV) private readonly srv: Service;

  // @OnError, @OnEvent, @OnAction, @OnFunction
}
