import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomConsumer } from '../context'
import Loading from './Loading'

export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const { loading, sorted_rooms, rooms } = value;
                    return (<div>
                        Hello from RoomsCOntainer.js
                        <RoomFilter rooms={rooms} />
                        <RoomList />
                    </div>
                    );
                }
            }
        </RoomConsumer>
    );
}
