import './explore.scss';
import Genres from '../genres/genres.js';
import SongsList from '../songs-list/songs-list.js';
import Nav from '../nav/nav.js';
import Loader from '../loader/loader.js';

import React from 'react';



export default class Explore extends React.Component {
    constructor() {
        super();

        this.state = {
            songs: []
        }

        this.dataHandler = this.dataHandler.bind(this);
    }

    componentDidMount() {
        const genre = this.props.match.params.genre;
        this.getSong(genre);
    }

    componentWillReceiveProps() {
        const genre = this.props.match.params.genre;
        this.getSong(genre);
    }

    dataHandler(event) {
        const data = JSON.parse(event.target.responseText);
        console.log(data);

        this.setState({
            songs: data
        });

    }


    getSong(genre) {
        console.log(genre);
        const url = `https://api.soundcloud.com/tracks?client_id=nviGqqUJ1aoaFVSMA7EdLE3IZJLwYFKU&limit=15&offset=0&tags=${genre}`;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', this.dataHandler);
        xhr.send();
    }

    render() {
        const genre = this.props.match.params.genre;

        return (
            <div>

                <Genres />
                <h2>Genres: {genre}</h2>
                <SongsList songs={this.state.songs} />

            </div>
        );
    }
}