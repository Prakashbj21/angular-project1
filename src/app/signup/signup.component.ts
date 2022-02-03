import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupFrom !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router){}

  ngOnInit(): void {
    this.signupFrom = this.formBuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      mobile:['',Validators.required]
    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signupFrom.value)
    .subscribe(res=>{
      alert("Signup successful");
      this.signupFrom.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Some thing went wrong")
    })

  }
}
