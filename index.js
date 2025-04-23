function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction(){
   function namedFunction(){
    console.log("This is a named function")
   }
   return namedFunction;
  }

  function returnsAnAnonymousFunction (){
    return function(){
        console.log("am an anonymous function")
    }

  }