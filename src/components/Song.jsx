import React from 'react'
import '../index.css'
import {Row,Col,Card,Button, CardImg, CardSubtitle, CardTitle, CardBody} from 'reactstrap'
import Track from './Track'
import { ClapSpinner } from "react-spinners-kit";

class Song extends React.Component{
    state = {
        albumInfo: '',
        loading: true,
    }
    render() {
        console.log("state",this.state.albumInfo)

        return (
            <div className="song-container">
                    {this.state.loading ? <div style = {{position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)"}}><ClapSpinner  className="spinner-spotify" size={60} /></div> :                     <Row className="page-row">
                    <Col className="col-3 page-col">
                    <Card className="my-3 card-page">
                        <CardImg top src={this.state.cover} alt="Card image cap" />
                        <CardBody className="card-body-page">
                            <CardTitle className="song-title-page">{this.state.title}<br/></CardTitle>
                            <CardTitle className="song-artist-page">{this.state.artist}<br/></CardTitle>
                            <Button className="song-btn">Play</Button>
                            <CardSubtitle className="date-and-number">{this.state.date} : {this.state.songs} songs</CardSubtitle>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col md="9">
                        <Row className="track-col">
                        {this.state.albumInfo && this.state.albumInfo.data
                            .map((el,index)=> <Track trackInfo={el} key={index} />)}
                        </Row>
                    </Col>
                </Row>}
            </div>
        )
    }
    componentDidMount = async() => {
        setTimeout(async() => {
            await this.fetchAlbum()
        }, 500);
    }
    fetchAlbum = async() => {
        this.setState({
            loading: true
        })
        try{
            let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + this.props.match.params.songId,{
                headers: {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "0a7c4f4526msh6902f1bae09781cp153e87jsn282580f5babf"
                },
                method: "GET"
            })
            let infoAlbum = await response.json()
            let date = infoAlbum.release_date.split("-")
            console.log("infoAlbum",infoAlbum.tracks.data.length)
            this.setState({
                cover: infoAlbum.cover_medium,
                title: infoAlbum.title,
                date: date[0],
                songs: infoAlbum.tracks.data.length,
                artist: infoAlbum.artist.name,
                albumInfo: infoAlbum.tracks,
                loading: false
            })

        }catch(error){
            console.log('Error', error);
        };
    }
}

export default Song