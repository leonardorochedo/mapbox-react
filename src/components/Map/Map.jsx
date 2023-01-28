import React, { useState, useEffect, useRef } from "react";

// MapBoxGL
import mapboxgl from 'mapbox-gl';
import "./Map.css";

// Coordinates Polygon
import coordinates from "../../assets/coordinates";

// Londrina Coord
const cityPosition = {
  lat: -23.3116757,
  lng: -51.1592102,
};

export function Map({ ...props }) {

  const [clientCoord, setClientCoord] = useState({
    lat: cityPosition.lat,
    lng: cityPosition.lng,
  });


  const address = props.address;
  const apiKey = 'pk.eyJ1IjoibGVvbmFyZG9yb2NoZWRvIiwiYSI6ImNsZGRwN24zbTAzd3Izbmx5NzQ0ODhvMWcifQ.ygBb5egpTo10IFk1lDc_rA'

  mapboxgl.accessToken = apiKey;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom, setZoom] = useState(12);

  // Create a Map
  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [cityPosition.lng, cityPosition.lat],
      zoom: zoom,
      antialias: true
    });
  }, []);


  // Map on load
  useEffect(() => {
    if (!map.current) return;
    // wait for map to initialize
    map.current.on('load', () => {
      setZoom(map.current.getZoom().toFixed(2));

      // zonaSulLeste
      map.current.addSource('zonaSulLeste', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'geometry': {
            'type': 'Polygon',
            'coordinates': coordinates.zonaSulLeste
          }
        }
      })

      map.current.addLayer({
        'id': 'drawZoneSulLeste',
        'type': 'fill',
        'source': 'zonaSulLeste',
        'layout': {},
        'paint': {
          'fill-color':  coordinates.optionsZSL.fillColor,
          'fill-opacity': coordinates.optionsZSL.fillOpacity
        }})

        // zonaSulOeste
        map.current.addSource('zonaSulOeste', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': coordinates.zonaSulOeste
            }
          }
        })
  
        map.current.addLayer({
          'id': 'drawZonaSulOeste',
          'type': 'fill',
          'source': 'zonaSulOeste',
          'layout': {},
          'paint': {
            'fill-color':  coordinates.optionsZSO.fillColor,
            'fill-opacity': coordinates.optionsZSO.fillOpacity
        }})

        // zonaSulOeste
        map.current.addSource('zonaNorteOeste', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': coordinates.zonaNorteOeste
            }
          }
        })
  
        map.current.addLayer({
          'id': 'drawZonaNorteOeste',
          'type': 'fill',
          'source': 'zonaNorteOeste',
          'layout': {},
          'paint': {
            'fill-color':  coordinates.optionsZNO.fillColor,
            'fill-opacity': coordinates.optionsZNO.fillOpacity
        }})

        // zonaNorteLeste
        map.current.addSource('zonaNorteLeste', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': coordinates.zonaNorteLeste
            }
          }
        })
  
        map.current.addLayer({
          'id': 'drawZonaNorteLeste',
          'type': 'fill',
          'source': 'zonaNorteLeste',
          'layout': {},
          'paint': {
            'fill-color':  coordinates.optionsZNL.fillColor,
            'fill-opacity': coordinates.optionsZNL.fillOpacity
        }})

        // jataizinho
        map.current.addSource('jataizinho', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': coordinates.jataizinho
            }
          }
        })
  
        map.current.addLayer({
          'id': 'drawJataizinho',
          'type': 'fill',
          'source': 'jataizinho',
          'layout': {},
          'paint': {
            'fill-color':  coordinates.options2HR.fillColor,
            'fill-opacity': coordinates.options2HR.fillOpacity
        }})

        // greenVillage
        map.current.addSource('greenVillage', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': coordinates.greenVillage
            }
          }
        })
  
        map.current.addLayer({
          'id': 'drawGreenVillage',
          'type': 'fill',
          'source': 'greenVillage',
          'layout': {},
          'paint': {
            'fill-color':  coordinates.options2HR.fillColor,
            'fill-opacity': coordinates.options2HR.fillOpacity
        }})

        // cambe
        map.current.addSource('uniao', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': coordinates.uniao
            }
          }
        })
  
        map.current.addLayer({
          'id': 'drawUniao',
          'type': 'fill',
          'source': 'uniao',
          'layout': {},
          'paint': {
            'fill-color':  coordinates.options2HR.fillColor,
            'fill-opacity': coordinates.options2HR.fillOpacity
        }})

        // cambe
        map.current.addSource('cambe', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': coordinates.cambe
            }
          }
        })
  
        map.current.addLayer({
          'id': 'drawCambe',
          'type': 'fill',
          'source': 'cambe',
          'layout': {},
          'paint': {
            'fill-color':  coordinates.options2HR.fillColor,
            'fill-opacity': coordinates.options2HR.fillOpacity
        }})

        // ibipora
        map.current.addSource('ibipora', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': coordinates.ibipora
            }
          }
        })
  
        map.current.addLayer({
          'id': 'drawIbipora',
          'type': 'fill',
          'source': 'ibipora',
          'layout': {},
          'paint': {
            'fill-color':  coordinates.optionsIBI.fillColor,
            'fill-opacity': coordinates.optionsIBI.fillOpacity
        }})
    });
  }, [])

  // API Geocoding
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${apiKey}`
    )
    .then((response) => response.json())
    .then((data) => {
      if (data.features) { // Se view algo na response
        setClientCoord({
          lat: data.features[0].center[1],
          lng: data.features[0].center[0],
        });
      }
    });
    
    // Map Maker
    const marker = new mapboxgl.Marker({ color: 'red', rotation: 30 })
      .setLngLat([clientCoord.lng, clientCoord.lat])
      .addTo(map.current);
  }, [address]);

  return (
    <>
      <div ref={mapContainer} className="map-container"></div>
    </>
  );
}
