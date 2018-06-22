import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../model/usuario';
import { CustomValidators } from 'ng2-validation';
@Component({
    selector:'alterar-senha',
    styleUrls:['alterar-senha.scss'],
    templateUrl:'alterar-senha.html'
})
export class AlterarSenha implements OnInit {

    public formGroup:FormGroup;
    public usuario:Usuario = new Usuario();
    public newsenha:string;
    public programador:string='Mauricio';
    public confsenha:string;

    constructor(private fb:FormBuilder){

    }

    ngOnInit(){
        /**
         * Criando as validações para os campos da tela (Campo Obrigatório)
         */
        const senha = new FormControl('', Validators.required);
        const newsenha = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(50)]));
        const confsenha = new FormControl('',CustomValidators.equalTo(newsenha));
        
        this.formGroup = this.fb.group({
            usuario: ['', Validators.compose([Validators.required])],
            senha: senha,
            newsenha: newsenha,
            confsenha: confsenha
        });
        /**
         * Vai ser carregado o storage do navegador os dados do usuário
         */
        let user = localStorage.getItem('usuario');
        if (user != null){
            /**
             *  Caso já tenha um usuário no storage vai ser convertido 
             * de obj para Usuario
             */
            this.usuario = JSON.parse(user);
        }
    }

    public onChangeNewSenha(){
        if ( this.confsenha != null && this.newsenha != null){
            if (this.confsenha != this.newsenha ){
                this.formGroup.controls.confsenha.setErrors({ senhaNaoConfere: true} );
            }else {
                this.formGroup.controls.confsenha.setErrors(null);
            }
        }
    }


    public altera(){
        console.log(this.altera);
        let user = JSON.stringify(this.altera);
        localStorage.setItem('altera', user);
        alert('altera o Usuário nos logs');
    }

    public cancelar(){
        console.log('Foi cancelado a alteração de senha');
    }
}