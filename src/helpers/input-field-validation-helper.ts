export class InputFieldValidationHelper {
    /**
     *
     * @param $event
     * @returns
     */
  
    //for handling e, + , - in input number field,   usage:(keydown)="onKeyPresseddown($event)"
    static onKeydown(event: { keyCode: number }): boolean {
      let invalidChars = [69, 187, 189];
      return !invalidChars.includes(event.keyCode);
    }
  
    // for handling 2 decimal place returns event usage : setTwoNumberDecimal($event);
    static setTwoNumberDecimal(event: { target: { value: number } }) {
      if (event.target.value) {
        event.target.value =
          Math.trunc(+parseFloat(event.target.value.toString()) * 100) / 100;
      }
    }
  
    // for handling multiple zeros eg converts 00000 => 0  usage : (change)="onInputChange($event)";
    static convertToNumber(event: { target: { value: string } }) {
      if (event.target.value) {
        event.target.value = (+event.target.value).toString();
      }
    }
  }
  