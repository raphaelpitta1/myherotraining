package com.ifsp.MyHeroTraining.Controllers;
import com.ifsp.MyHeroTraining.DTO.CadastroUsuarioDto;
import com.ifsp.MyHeroTraining.Forms.AtualizaUsuarioTreinoForms;
import com.ifsp.MyHeroTraining.Models.CadastroUsuario;
import com.ifsp.MyHeroTraining.Models.Fase;
import com.ifsp.MyHeroTraining.Models.Treino;
import com.ifsp.MyHeroTraining.Models.Treino_Usuario;
import com.ifsp.MyHeroTraining.repository.TreinoUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.net.URI;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/treinousuario")
public class TreinoUsuarioController {
    @Autowired
    private TreinoUsuarioRepository treinoUsuarioRepository;
    @Transactional
    @PutMapping
    public Treino_Usuario UpdateUsuario(@RequestBody Treino_Usuario treino_usuario) {
        Optional<Treino_Usuario> usuarioFase = treinoUsuarioRepository.findByUsuario(treino_usuario.getId_usuario());
        if (usuarioFase.isPresent()) {
            Treino_Usuario treino_usuario1 = usuarioFase.get();
            treino_usuario1.setId_fase(treino_usuario.getId_fase());
            treino_usuario1.setId_usuario(treino_usuario.getId_usuario());

            return treino_usuario1;
        } else {
            treinoUsuarioRepository.save(treino_usuario);
            return treino_usuario;
        }
    }
    @GetMapping("/recupera")
    public List<Treino_Usuario> recuperaFase(int id) {
        List<Treino_Usuario> fase = treinoUsuarioRepository.findByusuario(id);
        return fase;
    }
    @Transactional
    @PutMapping("/delete")
    public Treino_Usuario desmarcarPastaFeita(@RequestBody Treino_Usuario treino_usuarios) {
        int idUsuario = treino_usuarios.getId_usuario();
        int id = treino_usuarios.getId_fase();

        Optional<Treino_Usuario> treino_usuario = treinoUsuarioRepository.findByUsuarioAndFase(idUsuario,id);
        if (treino_usuario.isPresent()) {
            Treino_Usuario treino_usuario1 = treino_usuario.get();
            treino_usuario1.setId_fase(0);

            return  treino_usuario1;
        }
        return  treino_usuarios;
    }
}
