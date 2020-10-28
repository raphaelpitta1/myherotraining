angular
  .module('myHeroTraining')
  .controller('HomeController', function ($scope,$http,myHeroTraining,$location, $routeParams) {
    $scope.model = {};
    var IdUsuario = sessionStorage.getItem('id');
    $scope.exibirSemLogin = function () {
      if (localStorage.getItem('Bearer') == null) {
        return true;
      } 
      else {
        return false;
      }
    };
    $scope.exibircomLogin = function () {
      if (localStorage.getItem('Bearer') !== null) {
        return true;
      } else {
        return false;
      }
    }
    var faseExistente = [];
    var id;

    var faseData = [];

    var ultimaDataTreino;
    var idUltimaFase;
    var dataAtual = new Date();
 
    var carrega = function () {
      myHeroTraining.carregarTreinos().success(function (data) {
        $scope.treinos = data
        for(var i=0; i< data.length; i++ ){
          faseExistente.push(data[i].id)         
          } 
        });  
    }
    
    var carregaData = function(){
      myHeroTraining.carregaFaseData(IdUsuario).success(function(data){
        console.log(data)
        idUltimaFase = data.idfase;
          ultimaDataTreino = data.max;

          console.log(idUltimaFase)
          console.log(ultimaDataTreino)
        
      
      });
    }
     $scope.logout = function () {
      localStorage.clear();
      sessionStorage.clear();
      $location.path('/login');
    };
    function refresh() {
      setTimeout(function () {
      
      }, 1000);
    }
    var updateBase = function(id){
     // if(valor !== idUltimaFase && teste1 !== teste2){

     var model ={
      id_fase : id,
       id_usuario : IdUsuario 
     }
    
        myHeroTraining.atualizahistorico(model).success(function(data){
          console.log(model)
        });  
    }
    var teste1 = '28/10/20'
    var teste2 = '29/10/20'
      $scope.exibircard = function(valor){
     if(valor === idUltimaFase && teste1 === teste2 || idUltimaFase === undefined 
        && valor === faseExistente[0] || valor === faseExistente[0] +1 && teste1 != teste2 && valor !== idUltimaFase && ultimaDataTreino!==undefined ){
       //  updateBase(valor);
       return true;
      
          //mostra elemento quando true

      }
     else {
       //false não mostra o ducumento
      return false; 
     }
    }
    //updateBase();
    carrega();
    carregaData();
    //getTimeCronometro();
  });
