"use client";

import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectForm } from "@/modules/home/ui/components/project-form";
import { ProjectsList } from "@/modules/home/ui/components/projects-list";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Variable } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";


  // const queryClient = getQueryClient();
  // void queryClient.prefetchQuery(trpc.createAI.queryOptions({text: "John PREFETCH"}))
  // fetch data from a server component
  // const data = await caller.createAI({text: "My server"});
  // fetch data from the api, this is the data access layer
  // const { data } = useQuery(trpc.createAI.queryOptions({text: "John"}));

const Page = () => {

  return (
    <div className="flex flex-col max-w-5xl max-auto w-full">
      <section className="space-y-6 py-[16vh] 2xl:py-48">
        <div className="flex flex-col items-center">
          <Image 
            src="/logo.svg"
            alt="Vibe"
            width={50}
            height={50}
            className="hidden md:block" />
        </div>
        <h1 className="text-2xl md:text-5xl font-bold text-center">Build something with Vibe</h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center">Create apps and websites by chatting with AI</p>
        <div className="max-w-3xl mx-auto w-full">
          <ProjectForm />
        </div>
      </section>
      <ProjectsList />
    </div>
  );
}

export default Page;