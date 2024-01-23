using {example.namespace as Base} from '../../../db/schema';

service ServiceA {
  @readonly
  entity Entity1 as projection on Base.Entity1;
}
