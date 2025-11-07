import { caller, getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary, useQuery } from "@tanstack/react-query";
import { Client } from "./client";
import { Suspense } from "react";


const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({text: "John PREFETCH"}))
  // fetch data from a server component
  // const data = await caller.createAI({text: "My server"});
  // fetch data from the api, this is the data access layer
  // const { data } = useQuery(trpc.createAI.queryOptions({text: "John"}));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
        <Client /> 
      </Suspense>
    </HydrationBoundary>
  );
}

export default Page;