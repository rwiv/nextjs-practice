import {sleep} from "@/lib/async";
import {personStore} from "@/app/api/person/route";

export async function GET() {
  await sleep(100);
  personStore.pop();
  return Response.json("ok");
}
