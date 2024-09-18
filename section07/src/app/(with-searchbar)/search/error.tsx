"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h3>검색과정에서 오류가 발생했습니다</h3>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}>
        다시 시도
      </button>
    </div>
  );
};

export default Error;
