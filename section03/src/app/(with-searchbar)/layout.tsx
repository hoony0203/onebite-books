import { ReactNode } from "react";
import Searchbar from "@/components/searchbar";

const searchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>
        <Searchbar />
      </div>
      {children}
    </div>
  );
};

export default searchLayout;
