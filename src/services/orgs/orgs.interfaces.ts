import { SNOTypes } from '../../core/atol-xml-builder';

export interface Org {
  name: string
  email: string
  inn: string
  sno: SNOTypes 
  paymentAddress: string
}
