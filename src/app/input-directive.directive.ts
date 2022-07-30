import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[input-directive]',
    providers: [{provide: NG_VALIDATORS, useExisting: InputDirective, multi: true}]
})
export class InputDirective  implements Validator {
  // @Input()
  // allowNegative: string = 'false';
  @Input()
  allowDecimal: string = 'false';
  @Input()
  minVal: number = 0;
  @Input()
  maxVal: number | undefined;
  @Input()
  maxLength: number;
  @Input()
  allowMobile: string = 'false';
  @Input()
  type: string;
  
  constructor(private el: ElementRef) {
  }
  validate(control: AbstractControl) {
    const allowDecimal = this.allowDecimal === 'true' ? true : false;
    if(control.value){
      if(Number(control.value.toString().length) > this.maxLength){
        return {
          msg: 'Max character should be '+this.maxLength
        }
      }
      if(allowDecimal === false && !(control.value.toString().indexOf(".") == -1)){
        return {
          msg: 'Decimal not allowed'
        }
      }
    }
    
    if(this.type =="tel" && control.value ){  
      if(control.value.indexOf('+92')=== 0){
        if(control.value.substring(1).match(/[^0-9]/gi)?.length >0){
          return {
            msg: 'Please add only numbers'
          }
        }     
         if(control.value.length < 13){
          return {
            msg: 'Please enter 13 digits including +92'
          }
        }
      }
      else{
        return {
          msg: 'Please enter correct format: +92xxxxxxxxxx'
        }
      }
    }

    if(this.minVal){
      if(control.value < this.minVal || (control.value == null && this.minVal == 0)){
        return {
          msg: 'Min value should be '+(this.minVal)
        }
      }
    }
    
    if(this.maxVal){
      if(control.value > this.maxVal){
        return {
          msg: 'Max value should be '+(this.maxVal)
        }
      }
    }

    return null;
  }
}