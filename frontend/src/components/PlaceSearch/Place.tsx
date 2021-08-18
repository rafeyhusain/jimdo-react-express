import React, { Component } from 'react'

type Props = {
    place: any
};

export default class Place extends Component<Props> {
    render() {
        return (
            <div>
                <h3>{this.props.place.name}</h3>
                <p>{this.props.place.formatted_address}</p>
            </div>
        )
    }
}
