import Spotify from 'spotify-web-api-js'
import Image from 'next/image'
import React, { Component } from 'react'

const spotifyWebApi = new Spotify();

var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = global.window && window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
export { hashParams}


class Home extends Component {

    constructor() {
        super();
        const params = hashParams

        if (params.access_token){
            spotifyWebApi.setAccessToken(params.access_token)
            
            
              
          
          }

        
    }
    render () {
            return (
                <main >
                    <h1>Home page</h1>
                </main>

       
            )
    }




}
export default Home