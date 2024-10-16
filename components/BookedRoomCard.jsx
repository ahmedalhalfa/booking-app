import Link from 'next/link';
import CancelBookingButton from './CancelBookingButton';

const BookedRoomCard = ({ booking }) => {
    const { room_id: room } = booking;
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        return formattedDate;
    };
    
    return (
        <div
            className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
        >
            <div>
                <h4 className="text-lg font-semibold">{room.name}</h4>
                <p className="text-sm text-gray-600">
                    <strong>Check In:</strong> {formatDate(booking.check_in)}
                </p>
                <p className="text-sm text-gray-600">
                    <strong>Check Out:</strong> {formatDate(booking.check_out)}
                </p>
            </div>
            <div
                className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0"
            >
                <Link
                    href={`/rooms/${booking.room_id.$id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
                >
                    View Room
                </Link>
                <CancelBookingButton bookingId={booking.$id} />
            </div>
        </div>
    );
}

export default BookedRoomCard;