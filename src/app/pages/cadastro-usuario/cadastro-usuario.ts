import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../model/usuario';
@Component({
    selector:'cadastro-usuario',
    templateUrl:'cadastro-usuario.html',
    styleUrls:['cadastro-usuario.scss']
})
export class CadastroUsuario implements OnInit {

    public formGroup:FormGroup;
    public usuario:Usuario = new Usuario();
    constructor(private formBuilder:FormBuilder){
    }
    ngOnInit(){
        this.formGroup = this.formBuilder.group({
            codigo:[null ],
            nome:[null, Validators.required],
            cpf:[''],
            email:[null, Validators.required],
            login:[null, Validators.required],
            senha:[null, Validators.required],
            confirmesenha:[null, Validators.required],
            apelido:[null, Validators.required],
            telefone:[null, Validators.required],
            celular:[null, Validators.required],
            grupousuario:[null, Validators.required]
        });
    }
    public salvar(){
        if (this.formGroup.invalid){
            return;
        }
        alert('Salvo com sucesso!');
    }

    public cancelar(){
        alert('Foi Cancelado!');
    }


    public onChangeNewSenha(){
        if ( this.usuario.confirmesenha != null && this.usuario.senha != null){
            if (this.usuario.confirmesenha != this.usuario.senha ){
                this.formGroup.controls.confirmesenha.setErrors({ senhaNaoConfere: true} );
            }else {
                this.formGroup.controls.confirmesenha.setErrors(null);
            }
        }
    }

}