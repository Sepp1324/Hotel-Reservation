import React, { Component } from 'react'
import default_background from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'

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

        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;

        const [main_img, ...default_img] = images;

        return (
            <>
                <StyledHero img={main_img || this.state.default_background}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            back to rooms
                </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {default_img.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>

                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>

                        <article className="info">
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: {size}m²</h6>
                            <h6>
                                max capacity: {
                                    capacity > 1 ? `${capacity} people` : `${capacity} person`
                                }
                            </h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>

                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}
