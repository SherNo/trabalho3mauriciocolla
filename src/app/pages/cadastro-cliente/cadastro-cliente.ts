import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../model/cliente';
@Component({
    selector:'cadastro-cliente',
    templateUrl:'cadastro-cliente.html',
    styleUrls:['cadastro-cliente.scss']
})
export class CadastroCliente implements OnInit {

    public formGroup:FormGroup;
    public cliente:Cliente = new Cliente();
    constructor(private formBuilder:FormBuilder){
    }
    ngOnInit(){

        this.formGroup = this.formBuilder.group({
            codigo:[null ],
            rzsocial:[null, Validators.required],
            fantasia:[null, Validators.required],
            cpcn:[null, Validators.required],
            rg:[null, Validators.required],
            cep:[null, Validators.required],
            celular:[null, Validators.required],
            telefone:[null, Validators.required],
            dtnascimento:[null, Validators.required],
            email:[null, Validators.required],
            estado:[null, Validators.required],
            cidade:[null, Validators.required],
            bairro:[null, Validators.required],
            rua:[null, Validators.required],
            numero:[null, Validators.required],
            comple:[null, Validators.required]
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

}