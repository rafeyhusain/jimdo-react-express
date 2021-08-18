import React, { Component } from 'react'
import { connect } from 'react-redux';

import Loading from '../Loading/Loading';

import Places from './Places';
import { getPlaces } from './State/Actions';
import AppState from '../../AppState'
import { Container, Row, Col } from 'react-bootstrap';

type Props = {
    getPlaces: Function,
    loading: boolean
};

type State = {
    searchText: string
};

class PlaceSearch extends Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            searchText: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.getPlaces(this.state.searchText);
    };

    onChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({ searchText: e.currentTarget.value });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {this.props.loading && <Loading />}
                        <form action="/" method="get" onSubmit={this.onSubmit}>
                            <label htmlFor="searchText">
                                <span className="visually-hidden">
                                    Search places:
                                </span>
                            </label>
                            <input
                                onChange={this.onChange}
                                value={this.state.searchText}
                                type="text"
                                id="searchText"
                                placeholder="Search places"
                                name="searchText"
                            />

                            <button type="submit">Search</button>
                        </form>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Places />
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    loading: state.loading
});

export default connect(mapStateToProps, { getPlaces })(PlaceSearch);
