import { z } from "zod";

export const workerListItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  position: z.string(),
});

export type WorkerListItem = z.infer<typeof workerListItemSchema>;
