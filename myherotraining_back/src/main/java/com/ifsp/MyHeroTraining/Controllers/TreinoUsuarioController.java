package com.ifsp.MyHeroTraining.Controllers;

import com.ifsp.MyHeroTraining.DTO.CadastroUsuarioDto;
import com.ifsp.MyHeroTraining.Forms.AtualizaUsuarioTreinoForms;
import com.ifsp.MyHeroTraining.Models.CadastroUsuario;
import com.ifsp.MyHeroTraining.Models.Treino;
import com.ifsp.MyHeroTraining.Models.Treino_Usuario;
import com.ifsp.MyHeroTraining.repository.TreinoUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Optional;

@RestController
@RequestMapping("/treinousuario")
public class TreinoUsuarioController {

    @Autowired
    private TreinoUsuarioRepository treinoUsuarioRepository;
    @PostMapping
    public Treino_Usuario UpdateUsuario(@RequestBody Treino_Usuario treino_usuario) {
    	try {
        treinoUsuarioRepository.save(treino_usuario);
        return treino_usuario;
    	}catch(Exception e) {
    		System.out.println(e);
            return treino_usuario;
    	}
    
    }

}
