import { NDSCalc, NDSType } from "../nds-calc";

test('calcFor', () => {
  const amount = 100.20;
  const _calcVat120Spy = jest.spyOn(NDSCalc as any, '_calcVat120');

  NDSCalc.calcFor(NDSType.vat120, amount);

  expect(_calcVat120Spy).toBeCalledWith(amount);

  _calcVat120Spy.mockRestore();
})

test('_calcVat120', () => {
  const testAmount = 13576.86;
  const expectedNDSAmount = 2262.81;

  const resultNDS = (NDSCalc as any)._calcVat120(testAmount);

  expect(+resultNDS).toBe(expectedNDSAmount);
})