package com.ifsp.MyHeroTraining.repository;

import com.ifsp.MyHeroTraining.Models.Treino;
import com.ifsp.MyHeroTraining.Models.Treino_Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TreinoUsuarioRepository extends JpaRepository<Treino_Usuario, Integer> {
    List<Treino_Usuario> findByfase(int id);
    List<Treino_Usuario> findByusuario(int id);

   // @Override
    Optional<Treino_Usuario> findByUsuarioAndFase(int idusuario, int idfase);

    Optional<Treino_Usuario> findByUsuario(int id);



}
