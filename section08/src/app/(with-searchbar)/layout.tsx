import { ReactNode, Suspense } from "react";
import Searchbar from "@/components/searchbar";

const searchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
};

export default searchLayout;
