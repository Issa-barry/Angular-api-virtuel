import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
})
export class ProductEditComponent implements OnInit {
/**Les variables */
product  : any =  null;
addForm: FormGroup;
namePattern = "^[a-zA-Z0-9 +_-]*$";//On autorise les mot avec espace ou separer par `_ ou - ou + ou espace`
// prixPattern = "^[0-9]*$";//On autorise

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


/*Constructeur*/
  constructor(private formBuilder: FormBuilder,
              private productsService: ProductsService,
              private router: Router,
              private route: ActivatedRoute)
              {
                this.product = []
                //Formulaire
                this.addForm =  this.formBuilder.group({
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
                })//fin formBuilder
              }
              
              ngOnInit(): void {
                this.recupProduct();
             }
             recupProduct()
             {
                let id = this.route.snapshot.params['id'];
                this.productsService.getProductById(id).subscribe(product => this.product = product);
             }

/*Les methodes*/

onSubmit()
  {
    const name = this.addForm.value.name.trim();
    const prix = this.addForm.value.prix;
    const description = this.addForm.value.description.trim();
    if (!name || !prix || !description) //On verifie si l'un des element est vide
    {
      return;
   }

    this.productsService.editProduct(this.product).subscribe(product => this.product.push(product))
    this.router.navigate(['/product-list']);
  }

}
