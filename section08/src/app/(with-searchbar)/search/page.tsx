import BookItem from "@/components/book-item";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import { BookData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";

const SearchResult = async ({ q }: { q: string }) => {
  await delay(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    {
      cache: "force-cache",
    }
  );

  if (!response.ok) return <div>오류가 발생</div>;

  const books: BookData[] = await response.json();

  return (
    <div>
      Search 페이지 {q}
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const Search = async ({ searchParams }: { searchParams: { q?: string } }) => {
  return (
    <Suspense
      key={searchParams.q || ""}
      fallback={<BookListSkeleton count={3} />}>
      <SearchResult q={searchParams.q || ""} />;
    </Suspense>
  );
};

export default Search;
