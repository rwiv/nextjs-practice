import axios from "axios";
import {Person} from "@/app/api/person/route";

export async function getPeople() {
  const res = await axios.get<Person[]>("http://localhost:3000/api/person")
  return res.data;
}
