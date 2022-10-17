import React from 'react';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import './Map.css'

export function Map() {

    const APIKey = "AIzaSyAdBoUyPOSs38DpDX7l4INc_jF5kfKbsj4"

    // Maps Properthy
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: APIKey
    })

    const containerStyle = {
        width: '35rem',
        height: '27rem'
    }
      
    const clientPosition = {
        lat: -23.3197,
        lng: -51.1662
    }

    return (
        <div className='map'>
            {isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={clientPosition}
                zoom={11.5}
            >
                <Marker position={clientPosition}/>
            </GoogleMap>
            ) : <><p>ERRO DE REQUISIÇÃO!</p></>}
        </div>
    )
}