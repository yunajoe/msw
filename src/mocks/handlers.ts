import { http, HttpResponse } from "msw";

const workersDatabase = [
  { id: "1", name: "John Doe", position: "Software Engineer" },
  { id: "2", name: "Jane Doe", position: "Product Manager" },
  { id: "3", name: "Alice Smith", position: "UX Designer" },
  { id: "4", name: "Bob Johnson", position: "Data Scientist" },
  { id: "5", name: "Charlie Brown", position: "DevOps Engineer" },
];
export const handlers = [
  // 모든 workers의 정보를 가져오는 api
  http.get("https://msw/workers/list", ({ request }) => {
    return HttpResponse.json({
      data: workersDatabase,
      status: 200,
    });
  }),

  //  특정 worker의 정보를 가져오는 api
  http.get("/worker/:id", ({ params }) => {
    const { id } = params;
    const worker = workersDatabase.find((worker) => worker.id === id);
    if (!worker) {
      return HttpResponse.json(
        { message: "해당 직원을 찾을 수 없습니다" },
        { status: 404 }
      );
    }
    return HttpResponse.json(worker);
  }),

  // 특정 worker의 정보를 저장하는 api
  http.post("/worker", async ({ request }) => {
    const data = await request.json();
    const newWorker = { id: String(workersDatabase.length + 1) };
  }),

  //   특정 worker의 정보를 수정하는 api
  http.put("/worker/:id", async ({ request, params }) => {
    const { id } = params;
  }),

  //  특정 worker의 정보를 삭제하는 api
  http.delete("/worker/:id", ({ params }) => {
    const { id } = params;
    const workerIndex = workersDatabase.findIndex((worker) => worker.id === id);
    if (workerIndex === -1) {
      return HttpResponse.json({ error: "Worker not found" }, { status: 404 });
    }
    workersDatabase.splice(workerIndex, 1);
    return HttpResponse.json({
      message: "해당 직원이 삭제 되었습니다",
      status: 200,
    });
  }),
];
