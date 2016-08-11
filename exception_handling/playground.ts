
import * as E from './exceptionsWrapper';

function throwException() {
  throw new E.LocalStorageExceptions.SessionKeyNotFound(true);  
}

try {
  throwException();
}
catch(e) {
  if (e instanceof E.CustomException) console.log('It is instanceof CustomException.');
  if (e instanceof E.LocalStorageException) console.log('It is instanceof LocalStorageException.');
  if (e instanceof E.LocalStorageExceptions.SessionKeyNotFound) console.log('It is instanceof SessionKeyNotFound.');
  console.log('######################### Below is Error payload #########################');
  console.error(e.log);
}

// namespace ClassNamespace {
//   export class A {}
//   class B {}
// }

// let a = new ClassNamespace.