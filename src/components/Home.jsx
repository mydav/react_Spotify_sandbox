import React from 'react'
import {Row} from 'reactstrap'
import List from './List'
import '../index.css'
import { ClapSpinner } from "react-spinners-kit";

var artists = ["Linkin Park", "Alan Walker", "Oxxxymiron"]

class HomePage extends React.Component{
    state = { 
        loading: true,
        tracks: ""
    }
    render() {
        console.log(this.state.tracks)
        return (
            <>
            <div className="home-container">
                <Row>
                {this.state.loading && <div style = {{position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)"}}><ClapSpinner  className="spinner-spotify" size={60} /></div>}
                {this.state.tracks && this.state.tracks
                    .map((track, index) => <List tracks={track} key={index} />)
                }
                </Row>
            </div>
            </>
        )
    }


    componentDidMount = async() => {
        setTimeout(async() => {
            await this.fetchingMusic()
        }, 2000);
    }

    fetchingMusic = async() => {
        this.setState({
            loading:true,
        })
        artists.forEach(async(artist) => {
            let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist + "&limit=5", {
                headers: {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "0a7c4f4526msh6902f1bae09781cp153e87jsn282580f5babf"
                },
                method: "GET"
            })
            let musicInfo = await response.json()
            this.setState({
                tracks: [...this.state.tracks, {
                    tracks: musicInfo.data,
                    title: artist
                }],
                loading: false
            })
        })
    }
}

export default HomePage