import {sleep} from "@/lib/async";
import {personStore} from "@/app/api/person/route";

export async function GET() {
  await sleep(100);
  const newPerson = {
    name: "john",
    age: 21,
  }
  personStore.push(newPerson);
  return Response.json("ok");
}
