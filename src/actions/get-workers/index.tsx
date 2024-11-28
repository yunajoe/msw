export const getWorkers = async () => {
  try {
    const url = "https://msw/workers/list";
    const response = await fetch(url);
    if (!response.ok) {
      return {
        status: "error",
        error: "데이터를 가져오는데 실패했습니다.",
      };
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: "error",
        error: error.message,
      };
    }
    return {
      status: "error",
      error: "알 수 없는 오류가 발생했습니다.",
    };
  }
};
