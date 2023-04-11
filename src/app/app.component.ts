import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { InputFieldValidationHelper } from "src/helpers/input-field-validation-helper";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      calories: ['',Validators.required],
      mobileno : ['',Validators.required],
      weight : ['',Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.controls);
  }

  onKeydownPress(event: { keyCode: number; }){
    return InputFieldValidationHelper.onKeydown(event);
 }

 onInputChange(event:any){
   return InputFieldValidationHelper.convertToNumber(event);
}

setTwoNumberDecimal(event: { target: { value: number; }; }){
  if(event.target.value){
    return InputFieldValidationHelper.setTwoNumberDecimal(event);
  }
}

  
}
