const Book = ({ params }: { params: { id: string | string[] } }) => {
  return <div>book 페이지 / [id] {params.id}</div>;
};

export default Book;
