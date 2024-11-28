"use client";
import { getWorkers } from "@/actions/get-workers";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const result = useQuery({
    queryKey: ["workers"],
    queryFn: async () => {
      const response = await getWorkers();
      if (response.status === "error") {
        throw new Error(response.error);
      }
      return response;
    },
  });

  return <div>하이</div>;
}
