import Heading from '@/components/Heading';
import { getMyRooms } from '@/app/actions/getMyRooms';
import MyRoomCard from '@/components/myRoomCard';
const MyRoomsPage = async () => {
    const rooms = await getMyRooms();
    return (
        <div>
            <Heading title="My Rooms" />
            {rooms.length > 0 ? (
                <div>
                    {rooms.map((room) => (
                        <MyRoomCard key={room.$id} room={room} />
                    ))}
                </div>
            ) : (
                <div>No rooms found</div>
            )}
        </div>
    );
}

export default MyRoomsPage;