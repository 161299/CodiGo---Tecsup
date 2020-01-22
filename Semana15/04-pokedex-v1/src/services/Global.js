export var GLobal = (function() {
  var instance;

  function createInstance() {
    var object = {
      pokemonId: 0
    };
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();



