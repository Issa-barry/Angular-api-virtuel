import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
})
export class ProductAddComponent implements OnInit {
/**Les variables */
product: Product[];
namePattern = "^[a-zA-Z0-9 +_-]*$";//On autorise les mot avec espace ou separer par `_ ou - ou + ou espace`
error_messages = {
  'name': [
    { type: 'required',  message: 'Nom est obligatoire.' },
    { type: 'minlength', message: 'Nom trop court.' },
    { type: 'maxlength', message: 'Nom trop long.' },
    { type: 'pattern',   message: 'Les caractéres speciaux ne sont pas accepter.' },
  ],
  'prix': [
    { type: 'required',  message: 'Le prix est obligatoire.' },
    { type: 'pattern',   message: 'Seule les nombres son autoriser.' },
  ],
  'description': [
    { type: 'required',  message: 'Nom est obligatoire.' },
    { type: 'minlength', message: 'Nom trop court.' },
    { type: 'maxlength', message: 'Nom trop long.' },
  ],

}
//Le formulaire
addForm: FormGroup =  this.fb.group({
  name: new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(150),
    Validators.pattern(this.namePattern)
  ])),
  description: new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(1000),
  ])),
  prix: new FormControl('', Validators.compose([
    Validators.required,
  ])),
})//fin formBuilder;


/*Constructeur*/
  constructor(private fb: FormBuilder,
              private productService: ProductsService,
              private router: Router)
              {
                this.product = []
              }

  ngOnInit(): void {
  }


/**************************************
*Les methodes
***************************************/

onSubmit()
  {
    const name = this.addForm.value.name.trim();
    if (!name) { return;  }

    const newProduct: Product = this.addForm.value;
    this.productService.addProduct(newProduct).subscribe(product => this.product.push(product))
    this.router.navigate(['/product-list']);
  }

}
