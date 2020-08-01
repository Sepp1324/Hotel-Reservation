import React, { Component } from "react";

import { RoomContext } from "../context";

export default class Featured_Rooms extends Component {
  static contextType = RoomContext;

  render() {
    const {featured_rooms : rooms} = this.context;
    console.log(rooms);

    return <div>from featured_rooms.js</div>;
  }
}
