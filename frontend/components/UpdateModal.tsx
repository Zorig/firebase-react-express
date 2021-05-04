import { useState } from "react";
import ReactModal from "react-modal";
import Button from "./Button";
import InputWithLabel from "./InputWithLabel";
import { OrderType } from "./OrderItem";

ReactModal.setAppElement("#__next");

export function UpdateModal({
	showModal,
	handleModal,
	content
}: {
	showModal: boolean;
	handleModal: () => void;
	content: OrderType;
}) {
	const [title, setTitle] = useState(content?.title);
	const [bookingDate, setBookingDate] = useState(content?.bookingDate);

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
						<div className="sm:flex sm:items-start">
							<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
								!
							</div>
							<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
								<h3 className="text-lg leading-6 font-medium text-gray-900">
									Update order
								</h3>
								<div className="mt-2">
									<form method="POST">
										<InputWithLabel
											label="Title"
											name="title"
											required
											type="text"
											placeholder={title}
											value={title}
											onChange={({ target }) => setTitle(target.value)}
										/>

										<InputWithLabel
											label="Booking Date"
											name="bookingDate"
											required
											type="date"
											value={bookingDate}
											placeholder={bookingDate}
											onChange={({ target }) => setBookingDate(target.value)}
										/>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<Button text="Update" onClick={handleModal} />
						<Button text="Cancel" onClick={handleModal} color="gray" />
					</div>
				</div>
			</div>
		</ReactModal>
	);
}

export default UpdateModal;
