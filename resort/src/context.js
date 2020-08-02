import React, { Component } from "react";

import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sorted_rooms: [],
    featured_rooms: [],
    loading: true,
  };

  componentDidMount() {
    let rooms = this.format_data(items);
    let featured_rooms = rooms.filter((room) => room.featured === true);

    this.setState({
      rooms,
      featured_rooms,
      sorted_rooms: rooms,
      loading: false,
    });
  }

  format_data(items) {
    let tmp_items = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tmp_items;
  }

  get_room = (slug) => {
    let tmp_rooms = [...this.state.rooms];
    const room = tmp_rooms.find((room) => room.slug === slug);
    return room;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, get_room: this.get_room }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
