import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/core/models/all/response/all-responses.response';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostModelRequest } from 'src/app/core/models/all/request/all-requests.request';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostModelUseCase } from 'src/app/core/usecase/model/post-model.usecase';

@Component({
  selector: 'app-register-model',
  templateUrl: 'register-model.component.html'
})
export class RegisterModelComponent implements OnInit {
  formModelo:FormGroup;

  constructor(
    private _postModelo: PostModelUseCase,
    public _dialogref: DynamicDialogRef,
    private _formBuilder:FormBuilder
  ) {}

  ngOnInit() {
    this.createformModelo();
  }
  nombre: string | null = null;
  cilindrada:string| null = null;
  velocidades:string| null = null;
  capacidadTanque:string| null = null;
  torque:string| null = null;
  motor:string| null = null;
  potencia:string| null = null;
  precio:string| null = null;
  descripcion:string| null = null;
  anio:string| null = null;
  Foto:string| null = null;

  createformModelo(){
    this.formModelo = this._formBuilder.group({
      nombre:[null],
      cilindrada:[null],
      velocidades:[null],
      capacidadTanque:[null],
      torque:[null],
      motor:[null],
      potencia:[null],
      precio:[null],
      descripcion:[null],
      anio:[null],
      foto:[null]
    })
  }

  async addModelo() {
    const form=this.formModelo.value
    const  bodyRequestModelo: PostModelRequest ={
      nombre: form.nombre,
      cilindrada:form.cilindrada,
      velocidades:form.velocidades,
      capacidadTanque:form.capacidadTanque,
      torque:form.torque,
      motor: form.motor,
      potencia:form.potencia,
      precio:form.precio,
      descripcion:form.descripcion,
      foto:form.foto
      };
    try {
      const response: Model = await this._postModelo.execute(
        bodyRequestModelo
      );
      console.log(response);
      this.close()
    } catch (error) {
      console.error(error);
    }
  }
  close(){
    this._dialogref.close()
  }
}
