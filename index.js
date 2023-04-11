function receivesAFunction(a) {
  a();
}

function returnsANamedFunction() {
  return function namdFunction(){
    return "hi";
  }
}

function returnsAnAnonymousFunction() {
  return function (){
    return "hi";
  }
}