import { SNOTypes } from '../../core/atol-xml-builder';

export interface Org {
  name: string
  email: string
  checkEmail: string
  inn: string
  sno: SNOTypes 
  paymentAddress: string
}
