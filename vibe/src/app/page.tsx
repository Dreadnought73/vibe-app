"use client";

import {Button} from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

const Page = () => {
  // const queryClient = getQueryClient();
  // void queryClient.prefetchQuery(trpc.createAI.queryOptions({text: "John PREFETCH"}))
  // fetch data from a server component
  // const data = await caller.createAI({text: "My server"});
  // fetch data from the api, this is the data access layer
  // const { data } = useQuery(trpc.createAI.queryOptions({text: "John"}));

  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({}));

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Button onClick={() => invoke.mutate({text: "Test"})}>
        Invoke Background Job
      </Button>
    </div>
  );
}

export default Page;