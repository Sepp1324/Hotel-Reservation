import React, { Component } from 'react'
import default_background from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: this.props.match.params.slug,
            default_background
        };
    }

    static contextType = RoomContext;

    // componentDidMount() {

    // }

    render() {
        const { get_room } = this.context;
        const room = get_room(this.state.slug);

        if (!room) {
            return <div className="error">
                <h3>no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>
        }

        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;

        return <Hero hero='roomsHero'>
            <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </Banner>
        </Hero>
    }
}
