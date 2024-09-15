import { ReactNode } from "react";
import Searchbar from "@/components/searchbar";

const searchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
};

export default searchLayout;
