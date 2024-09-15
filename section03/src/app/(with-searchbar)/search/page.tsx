import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
const Search = ({ searchParams }: { searchParams: { q?: string } }) => {
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
