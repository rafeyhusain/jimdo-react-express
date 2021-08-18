import React, { Component } from 'react'
import { connect } from 'react-redux';
import AppState from '../../AppState'
import Place from './Place'

type Props = {
    places: any
};

class Places extends Component<Props> {
    render() {
        const placeItems = this.props.places.places.map((place: any) => (
            <Place key={place.place_id} place={place} />
        ));
        return (
            <div>
                <h1>Places</h1>
                {placeItems}
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    places: state.places
});

export default connect(mapStateToProps, {})(Places)