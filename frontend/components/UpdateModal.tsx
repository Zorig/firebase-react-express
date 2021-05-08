import { useRouter } from "next/router";
import { useState, FormEvent, useMemo } from "react";
import ReactModal from "react-modal";
import Button from "./Button";
import InputWithLabel from "./InputWithLabel";
import { OrderType } from "./OrderItem";

ReactModal.setAppElement("#__next");

export function UpdateModal({
  showModal,
  handleModal,
  content,
  setOrder,
}: {
  showModal: boolean;
  handleModal: () => void;
  content: OrderType | undefined;
  setOrder: (obj: OrderType) => void;
}) {
  const [title, setTitle] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  const router = useRouter();
  const { id } = router.query;
  const [error, setError] = useState(null);

  const body = useMemo(() => {
    const data: { title?: string; bookingDate?: number } = {};
    if (title !== "") {
      data["title"] = title;
    }
    if (bookingDate !== "") {
      data["bookingDate"] = Date.parse(bookingDate);
    }
    return JSON.stringify(data);
  }, [title, bookingDate]);

  const fetchAPI = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/orders/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        }
      );
      if (response.status === 200) {
        const order = await response.json();
        handleModal();
        setOrder(order);
      }
    } catch (err) {
      setError(err);
    }
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    fetchAPI();
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="Update order"
      shouldCloseOnOverlayClick={true}
      onRequestClose={handleModal}
      className="fixed inset-0 overflow-y-auto"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <form method="POST" onSubmit={(e) => handleSubmit(e)}>
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  !
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Update order
                  </h3>
                  <div className="mt-2">
                    <InputWithLabel
                      label="Title"
                      name="title"
                      type="text"
                      placeholder={content?.title}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />

                    <InputWithLabel
                      label="Booking Date"
                      name="bookingDate"
                      type="datetime-local"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <Button type="submit" text="Update" />
                <Button text="Cancel" onClick={handleModal} color="gray" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}

export default UpdateModal;
