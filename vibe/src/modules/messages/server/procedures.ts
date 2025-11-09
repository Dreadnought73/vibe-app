import { inngest } from "@/inngest/client";
import { prisma } from "@/lib/prisma";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import {z} from "zod";
// this will be access via message.create()
export const messagesRouter = createTRPCRouter({
    getMany: baseProcedure
        .query(async() => {
            const messages = await prisma.message.findMany({
                orderBy: {
                    updatedAt: "desc",
                },
            });
        
            return messages
        }),
    create: baseProcedure
        .input(
            z.object({
                value: z.string()
                    .min(1, {message: "Value is required"})
                    .max(10000, {message: "Value is too long"}),
                projectId: z.string().min(1, {message: "Project ID is required"}),
            }),
        )
        .mutation(async ({input}) => {
            const createdMessage = await prisma.message.create({
                data: {
                    // each project would have a new ID
                    projectId: input.projectId,
                    content: input.value,
                    role: "USER",
                    type: "RESULT",
                }
            });
            await inngest.send({
                name: "code-agent/run",
                data: {
                    value: input.value,
                    projectId: input.projectId,
                }
            });
            return createdMessage;
        })
})