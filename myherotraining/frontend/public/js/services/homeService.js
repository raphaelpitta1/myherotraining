angular.module('myHeroTraining').factory('myHeroTraining', function ($http) {
  var carregaTreinos = function (id) {
    return $http.get('http://localhost:8080/treinos', {
      params: {
        id: id,
      },
    });
  };

  var carregaFaseData = function (id) {
    return $http.get('http://localhost:8080/fasedia',
      {
        params: {
          id: id,
        },
      });
  }

  /*var atualizahistorico = function (model) {
    return $http.put('http://localhost:8080/treinousuario/delete',{
      params: {
        model : model,
      },
    });

  };*/

  var atualizahistorico = function (model) {
    return $http.put('http://localhost:8080/treinousuario/delete', model)
  };

  var getTimeCronometroService = function (id_usuario, id_fase) {
    return $http.get('http://localhost:8080/treinos', {
      params: {
        id_usuario: id_usuario,
        id_fase: id_fase,
      },
    });
  };
  return {
    getTimeCronometroService: getTimeCronometroService,
    carregarTreinos: carregaTreinos,
    carregaFaseData : carregaFaseData,
    atualizahistorico : atualizahistorico
  };
});
