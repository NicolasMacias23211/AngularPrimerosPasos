import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { producto } from '../../Models/Producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  //aca va el codigo
  productoForm: FormGroup;
  
  //manejar los formularios
  constructor(private fb: FormBuilder, private router:Router, private toastr: ToastrService){
    this.productoForm = this.fb.group({
      producto:['', Validators.required],
      categoria:['', Validators.required],
      ubicacion:['', Validators.required],
      precio:['', Validators.required],
  
    })
  }
    ngOnInit(): void {
  
    }
  
    agregarProducto(){
  
  
      const PRODUCTO: producto = {
        Nombre: this.productoForm.get('producto')?.value,
        Categoria: this.productoForm.get('categoria')?.value,
        Ubicacion: this.productoForm.get('ubicacion')?.value,
        Precio: this.productoForm.get('precio')?.value,
  
      }
      console.log(PRODUCTO);
      this.toastr.success('El producto fue resgistrado con exito', 'producto registrado');
      this.router.navigate(['/']);
    }
  
  }
  