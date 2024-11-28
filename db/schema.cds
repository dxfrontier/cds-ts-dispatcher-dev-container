using {managed, } from '@sap/cds/common';

namespace example.namespace;

entity Entity1 : managed {
  key ID    : Integer;
      descr : localized String(111);
}
