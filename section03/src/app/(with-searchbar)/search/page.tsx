import ClientComponent from "@/components/client-component";
const Search = ({ searchParams }: { searchParams: { q?: string } }) => {
  return (
    <div>
      Search 페이지 {searchParams.q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
};

export default Search;
