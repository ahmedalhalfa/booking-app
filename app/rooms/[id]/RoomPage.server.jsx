import { getSingleRoom } from '@/app/actions/getSingleRoom';
import RoomPage from './RoomPage';

const RoomPageServer = async ({ params }) => {
    const { id } = params;
    const room = await getSingleRoom(id);

    if (!room) {
        return <Heading title="Room not found" />;
    }

    return <RoomPage room={room} />;
}

export default RoomPageServer;