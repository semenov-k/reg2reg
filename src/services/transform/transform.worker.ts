import { Org } from "../orgs/orgs.interfaces"
import { AtolXMLBuilder } from "../../core/atol-xml-builder";
import { ReportParser } from "../../core/report-parser";

export const transformRegister = async (sourceFile: File, org: Org): Promise<File> => {
  const paymentsData = await ReportParser.parse(sourceFile);
  const resultFile = new AtolXMLBuilder(org.email, org.inn, org.checkEmail, org.sno, org.paymentAddress).build(paymentsData)
  return resultFile;
}