import {sleep} from "@/lib/async";

export interface Person {
  name: string;
  age: number;
}

export const personStore: Person[] = [];

export async function GET() {
  await sleep(100);
  return Response.json(personStore);
}
