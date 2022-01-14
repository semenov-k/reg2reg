/**
 * @jest-environment ./src/test-env.js
 */

import path from 'path';
import Zip from 'jszip';
import { readFileSync } from 'fs';
import { AtolXMLBuilder, SNOTypes } from '../atol-xml-builder';

const dataDir = path.join(__dirname, 'data');

test('Creates ATOL XML correctly', async () => {
  const expectedXml = readFileSync(path.join(dataDir, './expected-atol-xml.xml')).toString();
  const testPaymentsData = [
    {
      date: new Date('10/19/2021'),
      fullAmount: 4000,
      servicesAmount: 4000,
      peniAmount: undefined,
      operationId: "601859138363"
    },
    {
      date: new Date('10/19/2021'),
      fullAmount: 1000,
      servicesAmount: 920.5,
      peniAmount: 79.5,
      operationId: "401881339899"
    },
    {
      date: new Date('10/19/2021'),
      fullAmount: 79.5,
      servicesAmount: undefined,
      peniAmount: 79.5,
      operationId: "221881339822"
    }
  ];

  const builder = new AtolXMLBuilder('test@test.ru', '39874398274', 'check@test.ru', SNOTypes.OSN, 'https://test.com/pay');

  const resultFile = await builder.build(testPaymentsData);
  const resultZip = new Zip();
  await resultZip.loadAsync(resultFile)
  const resultFileContent = await resultZip.file('1.xml')?.async('text')

  expect(resultFileContent).toBe(expectedXml);
})