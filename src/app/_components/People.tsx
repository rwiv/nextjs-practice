"use client"

import axios from "axios";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getPeople} from "@/client/getPeople";

export function People() {

  // only client component
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["people"],
    queryFn: getPeople,
    initialData: [],
  });

  async function onAdd() {
    await axios.get("http://localhost:3000/api/person/create");
    await queryClient.invalidateQueries({ queryKey: ["people"] });
  }

  async function onDelete() {
    await axios.get("http://localhost:3000/api/person/delete");
    await queryClient.invalidateQueries({ queryKey: ["people"] });
  }

  return (
    <div className="p-3">
      {data.map((person, idx) => (
        <div key={idx}>
          {person.name} {person.age}
        </div>
      ))}
      <div>
        <button onClick={onAdd}>add</button>
      </div>
      <div>
        <button onClick={onDelete}>delete</button>
      </div>
    </div>
  )
}
