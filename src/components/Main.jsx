import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navi from './Navi'
import Home from './Home'
import Song from './Song'


const Main = () => {
    return (
        <Router>
            <Navi />
            <Route path="/" exact component={Home} />
            <Route path="/details-song:songId" component={Song} />
        </Router>
    )
}

export default Main