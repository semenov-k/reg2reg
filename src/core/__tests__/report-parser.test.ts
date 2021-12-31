import path from 'path'
import { readFileSync } from 'fs';
import { ReportParser } from '../report-parser';

const dataDir = path.join(__dirname, 'data')

test('Parse xlsx-file correctly', async () => {
  const expectedData = [
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
    }
  ];

  const testFilePath = path.join(dataDir, 'test-report.xlsx');
  const testFile = readFileSync(testFilePath)
  const testFileBlob = new Blob([testFile], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});

  const parsingResult = await ReportParser.parse(testFileBlob as File);

  expect(parsingResult).toEqual(expectedData)
})