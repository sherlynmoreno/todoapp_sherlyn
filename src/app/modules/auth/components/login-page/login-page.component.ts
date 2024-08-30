import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReplaceSpacePipe } from '@shared/pipes/replace-space.pipe';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {




  constructor(private replaceSpace:ReplaceSpacePipe) { }

  ngOnInit(): void {
    // this.value = this.replaceSpace.transform(this.value,'👍')

    
  }

 

}



