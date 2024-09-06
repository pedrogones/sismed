import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../../shared/services.service';
declare var $ : any;
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  ngOnInit(): void {
    this.foto = this.shared.iconProfile(this.userName);
  }

  loginForm: FormGroup;
  passwordForm: FormGroup;
  userName: string = 'John Doe';
  userDescription: string = 'Paciente .................................';
  userImage: string = '/src/assets/userAvatar.png';

  constructor(private fb: FormBuilder, private shared: ServicesService) {

    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      profile_photo_path: ['']
    });

    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Data:', this.loginForm.value);
    }
  }
  foto = ''


  openModal(){
    $('#modalAlterarSenha').modal('show');
  }
 closeModal(){
  $('#modalAlterarSenha').modal('hide');
 }
  changePassword() {
    if (this.passwordForm.valid) {
      const { password, confirmPassword } = this.passwordForm.value;
      if (password === confirmPassword) {
        console.log('Password Change Data:', this.passwordForm.value);
        $('#modalAlterarSenha').modal('hide');

      } else {
        console.error('Passwords do not match');
      }
    }
  }
}
