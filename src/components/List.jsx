import React from 'react'
import SingleTrack from './SingleTrack'
import {Row, Col} from 'reactstrap'
import '../index.css'

class List extends React.Component {
    render(){
        return (
            <div className="div-with-music mb-5">
                <Col md="12" className="single-artist-block">
                <h2 className="title-artisr">{this.props.tracks.title}</h2>
                </Col>
                <Col md="12">
                    <Row>
                    {this.props.tracks.tracks
                        .map((m,index) => 
                        <SingleTrack tracks={m} key={index}
                        />
                    )}
                    </Row>
                </Col>
            </div>
        )
    }
}

export default List