import {getPeople} from "@/client/getPeople";

export async function ServerComp() {
  const people = await getPeople();
  console.log(people);

  return (
    <div>hello</div>
  )
}
