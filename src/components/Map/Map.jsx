import React, { useState, useEffect } from 'react';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import './Map.css'

export function Map({ ...props }) {

    const [clientCoord, setClientCoord] = useState({ lat: -23.3197, lng: -51.1662 })

    // Maps Properthy
    const APIKey = "AIzaSyAdBoUyPOSs38DpDX7l4INc_jF5kfKbsj4"

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: APIKey
    })

    const containerStyle = {
        width: '35rem',
        height: '27rem'
    }
      
    const cityPosition = {
        lat: -23.3197,
        lng: -51.1662
    }
    
    const clientPosition = {
        lat: clientCoord.lat,
        lng: clientCoord.lng
    }

    const address = props.address

    // Mudança de endereço
    useEffect(() => {
        console.log(`Endereço buscado: ${address}`)

        fetch(`https://maps.google.com/maps/api/geocode/json?key${APIKey}=&address=${address}&sensor=false`)
        .then((response) => response.json())
        .then((data) => {
            // setClientCoord({
            //     lat: data.results[0].geometry.location.lat,
            //     lgn: data.results[0].geometry.location.lgn
            // })
        })
        .catch(err => console.log(err))
    }, [address])

    return (
        <div className='map'>
            {
            isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={cityPosition}
                zoom={11.5}
            >
                <Marker
                    position={clientPosition}
                    options={{
                        label: {
                            text: "Cliente",
                            className: "marker"
                        }
                    }}
                />
            </GoogleMap>
            ) : <><p>ERRO DE REQUISIÇÃO!</p></>
            }
        </div>
    )
}