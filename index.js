function receivesAFunction(a) {
  a();
}

function callBack(hi){
  hi = "hello";
  return hi;
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