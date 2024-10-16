import Heading from '@/components/Heading';
import { getMyBookings } from '../actions/getMyBookings';
import BookedRoomCard from '@/components/BookedRoomCard';
const BookingsPage = async () => {
    const bookings = await getMyBookings();
    return (
        <>
            {bookings.length === 0 ? (
                <p className="text-gray-600 mt-4">You have no bookings</p>
            ) : (
                <>
                    <Heading title="My Bookings" />
                    {bookings.map((booking) => (
                        <div key={booking.$id}>
                            <BookedRoomCard booking={booking} />
                        </div>
                    ))}
                </>
            )}
        </>
    );
}

export default BookingsPage;