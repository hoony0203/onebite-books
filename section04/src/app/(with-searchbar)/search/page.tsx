import BookItem from "@/components/book-item";
import { BookData } from "@/types";
const Search = async ({ searchParams }: { searchParams: { q?: string } }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`
  );

  if (!response.ok) return <div>오류가 발생</div>;

  const books: BookData[] = await response.json();

  return (
    <div>
      Search 페이지 {searchParams.q}
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export default Search;
