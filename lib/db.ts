import { PrismaClient } from '@prisma/client';

declare global {
  var cachedPrimsa: PrismaClient;
}

let prisma: PrismaClient;
