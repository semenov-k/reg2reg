import { Decimal } from 'decimal.js';

export enum NDSType {
  none = 'none',
  vat120 = 'vat120'
}

export class NDSCalc {
  static calcFor(type: NDSType, amount: number) {
    switch(type) {
      case NDSType.vat120:
        return this._calcVat120(amount);
    }
  }

  private static _calcVat120(amount: number): Decimal {
    return new Decimal(amount).mul(new Decimal(20).div(new Decimal(120)))
  }
}