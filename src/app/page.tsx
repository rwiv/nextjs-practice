import {dehydrate} from "@tanstack/query-core";
import {HydrationBoundary} from "@tanstack/react-query";
import {People} from "@/app/_components/People";
import getQueryClient from "@/lib/query/getQueryClient";
import {ServerComp} from "@/components/ServerComp";
import {getPeople} from "@/client/getPeople";

function curTime() {
  return new Date().getTime();
}

export default async function Home() {

  // const cur = curTime();
  // if (cur % 2 === 0) {
  //   throw Error("hello");
  // }

  // only server component
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["people"],
    queryFn: getPeople,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div>page</div>
      <ServerComp />
      <People />
    </HydrationBoundary>
  )
}
