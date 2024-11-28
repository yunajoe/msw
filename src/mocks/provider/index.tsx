import { initMSW } from "@/mocks/init";
import { PropsWithChildren } from "react";

function MockProvider({ children }: PropsWithChildren) {
  // MSW를 개발 단계에서만 사용해야 하므로 개발 모드 판단해주기
  if (process.env.NODE_ENV !== "production") {
    initMSW();
  }
  return <div>{children}</div>;
}

export default MockProvider;
