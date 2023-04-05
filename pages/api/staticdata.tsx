import { promises as fs } from 'fs';

export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) {
  //Find the absolute path of the json directory
  const jsonDirectory = process.cwd();
  //Read the json data file data.json

  // console.log(process.cwd())
  console.log(jsonDirectory)
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}