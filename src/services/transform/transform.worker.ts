import { Org } from "../orgs/orgs.interfaces"

const timeout = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const transformRegister = async (sourceFile: File, org: Org): Promise<File> => {
  await timeout(10000);
  return sourceFile;
}