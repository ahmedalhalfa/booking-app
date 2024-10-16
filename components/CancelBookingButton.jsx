'use client';

import { cancelBooking } from '@/app/actions/cancelBooking';
import { toast } from 'react-toastify';

const handleCancelBooking = async (bookingId) => {
    if (!confirm('Are you sure you want to cancel this booking?')) {
        return;
    }
    try {
        await cancelBooking(bookingId);
        toast.success('Booking cancelled successfully');
    } catch (error) {
        toast.error('Failed to cancel booking');
    }
};

const CancelBookingButton = ({ bookingId }) => {
    return (<button
        onClick={() => handleCancelBooking(bookingId)}
        className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-red-700"
    >
        Cancel Booking
    </button>);
}

export default CancelBookingButton;