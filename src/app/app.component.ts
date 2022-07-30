import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ClientForm: FormGroup;

  constructor(   public form: FormBuilder){}
  title = 'custom-input';

  public ngOnInit() {
    this.ClientForm = this.form.group({
      mobileno: [''],
      protein: ['']
    });

  }
}
