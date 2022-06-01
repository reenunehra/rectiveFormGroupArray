import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';



@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent implements OnInit {
  
  userForm: any;
  companyForm: any;
  isSubmitted: any; 
  post: any = '';
  hide = true;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    ;
   }


  createForm() {
    this.userForm = this.formBuilder.group({

      username: ['', Validators.required],        
      emails: [' '],
      password:[' '],
      contact:[' '],
      status:[' '],
      pincode:[' '],
      task: this.formBuilder.array([
        this.formBuilder.group({
          status: [''],
          description: [''],
        }),
      ]),
    });
  }

  
  onSubmit(post:any, isValid:any) {
    this.isSubmitted = true;

    // if (!isValid) return;
    console.log(this.post);
    this.post = post;
  }


  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
