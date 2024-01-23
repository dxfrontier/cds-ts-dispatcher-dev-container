using {example.namespace as Base} from '../../../db/schema';

service ServiceB {
  entity Entity2 as projection on Base.Entity2;
}
