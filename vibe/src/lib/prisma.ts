import { PrismaClient } from "../generated/prisma/client";

// Store prisma in a global since it is not affected by hot reload
// only one instance of the client is created in your application
const globalForPrisma = global as unknown as { 
    prisma: PrismaClient
}

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
