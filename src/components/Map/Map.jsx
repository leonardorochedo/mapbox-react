import React, { useEffect } from 'react';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import './Map.css'

export function Map({ ...props }) {

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
      
    const cityPosition = {
        lat: -23.3197,
        lng: -51.1662
    }

    const clientPosition = {
        lat: -23.3197,
        lng: -51.1662
    }
    
    const address = props.address

    // Mudança de endereço
    useEffect(() => {
        console.log(address)
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