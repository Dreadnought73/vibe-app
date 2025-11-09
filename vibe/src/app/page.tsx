"use client";

import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Variable } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "sonner";


  // const queryClient = getQueryClient();
  // void queryClient.prefetchQuery(trpc.createAI.queryOptions({text: "John PREFETCH"}))
  // fetch data from a server component
  // const data = await caller.createAI({text: "My server"});
  // fetch data from the api, this is the data access layer
  // const { data } = useQuery(trpc.createAI.queryOptions({text: "John"}));

const Page = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const trpc = useTRPC();
  const createProject = useMutation(trpc.projects.create.mutationOptions({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      // data.id is the createdProjec ID
      router.push(`/projects/${data.id}`);
    }
  }));

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex items-center flex-col gap-y-4 justify-center">
        <Input value={value} onChange={(e) => setValue(e.target.value)}/>
        <Button disabled={createProject.isPending} onClick={() => createProject.mutate({value: value})}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Page;