import {Injectable} from '@angular/core';
import {CallNumber} from "@ionic-native/call-number";

/*
  Generated class for the CallApiProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CallApiProvider {

  constructor(private callNumber: CallNumber) {
  }

  /**
   * TODO adjust the then and catch block
   * Call a given phone number
   * @param {Number} phoneNumber number to call with the native phone module
   */
  public callANumber(phoneNumber: Number) {
    this.callNumber.callNumber(String(phoneNumber), true)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }
}
