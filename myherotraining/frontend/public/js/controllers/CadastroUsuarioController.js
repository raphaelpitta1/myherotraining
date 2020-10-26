angular
  .module('myHeroTraining')
  .controller('cadastroController', function ($scope, $route, cadastroService) {
    $scope.model = {};
    $scope.salvar = function () {
      if ($scope.formulario.$valid) {
        cadastroService
          .incluir($scope.model)
          .success(function (data) {
            //alert('Cadastro realizado com sucesso!');
            swal(
              'Cadastro realizado com sucesso',
              'Enviamos um e-mail de confirmação para seu endereço cadastrado. Ao acessar o e-mail, clique em "Minha Conta" para validar o cadastro'
            );
            $route.reload();
            enviarEmail();
            usuarioCadastro();
          })
          .error(function (data, status) {
            alert('Email já cadastrado!');
            $route.reload();
          });
        //fazer tratamento de erro caso não retorno com sucess
      } else if ($scope.formulario.$invalid) {
        alert('Dados inválidos');
      }
    };
    var enviarEmail = function () {
      cadastroService.email($scope.model.email).success(function (data) {});
    };
    var usuarioCadastro = function () {
      cadastroService.usuario($scope.model);
    };
  });
