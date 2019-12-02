import React from 'react'
import {Card, CardImg, Col, CardSubtitle, CardTitle, CardBody} from 'reactstrap'
import '../index.css'
import {Link} from 'react-router-dom'

class SingleTrack extends React.Component{
    render() {
        return (
            <Col className="col-2 card-col">
                <Card className="my-3 card-single">
                <CardImg top width="180px" src={this.props.tracks.album.cover_medium} alt="Card image cap" />
                    <CardBody>
                        <Link to={"/details-song"+this.props.tracks.album.id} >
                            <CardTitle className="text-truncate card-title-single">{this.props.tracks.title}</CardTitle>
                        </Link>
                        <CardSubtitle className="card-subtitle-single">{this.props.tracks.artist.name}</CardSubtitle>
                </CardBody>
                </Card>
            </Col>
        )
    }
}

export default SingleTrack