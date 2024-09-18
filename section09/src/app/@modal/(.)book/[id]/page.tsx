import Book from "@/app/book/[id]/page";
import Modal from "@/components/modal";

const Intercept = (props: any) => {
  return (
    <Modal>
      <Book {...props} />
    </Modal>
  );
};

export default Intercept;
