import { initMSW } from "@/mocks/init";
import { PropsWithChildren, useState } from "react";

function MockProvider({ children }: PropsWithChildren) {
  // MSW를 개발 단계에서만 사용해야 하므로 개발 모드 판단해주기
  const [isMSWReady, setIsMSWReady] = useState(false);

  //   useEffect(() => {
  //     setIsClient(true);
  //   }, []);

  const fetchInitMSW = async () => {
    await initMSW();
    setIsMSWReady(true);
  };

  if (process.env.NODE_ENV !== "production") {
    fetchInitMSW();
  }

  if (!isMSWReady) {
    return;
  }
  return <div>{children}</div>;
}

export default MockProvider;
