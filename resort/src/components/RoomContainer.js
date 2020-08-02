import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { with_room_consumer } from '../context'
import Loading from './Loading'

function RoomContainer({ context }) {
    const { loading, sorted_rooms, rooms } = context;

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sorted_rooms} />
        </>
    );
}

export default with_room_consumer(RoomContainer);
