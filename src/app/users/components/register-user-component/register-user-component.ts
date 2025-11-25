import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-register-user-component',
  imports: [ReactiveFormsModule],
  templateUrl: './register-user-component.html',
  styleUrl: './register-user-component.css',
})
export class RegisterUserComponent {


  private readonly formBuilder = inject(FormBuilder);
  private readonly userService = inject(UserService);

  protected readonly form = this.formBuilder.nonNullable.group({
    userName : ['',[Validators.required]],
    email : ['',[Validators.required]],
    password : ['',[Validators.required]],
    passwordConfirm : ['',[Validators.required]],
    user_profile : this.formBuilder.nonNullable.group({
      name : ['',[Validators.required]],
      lastName : ['',[Validators.required]],
      identificationNumber : [0,[Validators.required]],
      dateOfBirth : ['',[Validators.required]],
      address : ['',[Validators.required]]
    })
  });

  get userName(){
    return this.form.controls.userName;
  }
  get email(){
    return this.form.controls.email;
  }
  get password(){
    return this.form.controls.password;
  }
  get passwordConfirm(){
    return this.form.controls.passwordConfirm;
  }
  get name(){
    return this.form.controls.user_profile.controls.name;
  }
  get lastName(){
    return this.form.controls.user_profile.controls.lastName;
  }
  get identificationNumber(){
    return this.form.controls.user_profile.controls.identificationNumber;
  }
  get dateOfBirth(){
    return this.form.controls.user_profile.controls.dateOfBirth;
  }
  get address(){
    return this.form.controls.user_profile.controls.address;
  }

  handleSubmit() {
    if (this.form.invalid) {
      alert('formulario invalido');
      return;
    }
    if (confirm('Desea confirmar los datos?')) {
      const user = this.form.getRawValue();
      if(user){
        this.userService.addUser(user).subscribe((u)=>{
          alert(`usuario: ${user.userName} agregado correctamente!`);
        });
      }
      
    }
  }


}
