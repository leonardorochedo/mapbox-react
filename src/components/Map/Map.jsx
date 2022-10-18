import React, { useState, useEffect } from "react";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polygon,
} from "@react-google-maps/api";

import "./Map.css";

export function Map({ ...props }) {
  const [clientCoord, setClientCoord] = useState({
    lat: -23.3197,
    lng: -51.1662,
  });

  // Maps Properthy
  const APIKey = "AIzaSyAdBoUyPOSs38DpDX7l4INc_jF5kfKbsj4";

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: APIKey,
  });

  const containerStyle = {
    width: "35rem",
    height: "27rem",
  };

  const cityPosition = {
    lat: -23.3197,
    lng: -51.1662,
  };

  const clientPosition = {
    lat: clientCoord.lat,
    lng: clientCoord.lng,
  };

  const address = props.address;

  // Mudança de endereço
  useEffect(() => {
    console.log(`Endereço buscado: ${address}`);

    fetch(
      `https://maps.google.com/maps/api/geocode/json?key=${APIKey}&address=${address}&sensor=false`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results[0].geometry.location)
        setClientCoord({
          lat: data.results[0].geometry.location.lat,
          lng: data.results[0].geometry.location.lng,
        });
      })
      .catch((err) => console.log(err));
  }, [address]);

  // Polygon
  const zonaSulLeste = [
    { lng: -51.1592102, lat: -23.3116757 },
    { lng: -51.1592102, lat: -23.3810226 },
    { lng: -51.1513138, lat: -23.3813378 },
    { lng: -51.1459923, lat: -23.3791318 },
    { lng: -51.1417007, lat: -23.3778713 },
    { lng: -51.1368942, lat: -23.3814953 },
    { lng: -51.1418724, lat: -23.3892158 },
    { lng: -51.1420441, lat: -23.395833 },
    { lng: -51.1377525, lat: -23.3985113 },
    { lng: -51.1216164, lat: -23.399299 },
    { lng: -51.1114883, lat: -23.397566 },
    { lng: -51.1077118, lat: -23.3928395 },
    { lng: -51.111145, lat: -23.3876402 },
    { lng: -51.122303, lat: -23.3802348 },
    { lng: -51.123333, lat: -23.375035 },
    { lng: -51.1217022, lat: -23.371332 },
    { lng: -51.1206722, lat: -23.368338 },
    { lng: -51.123333, lat: -23.3632953 },
    { lng: -51.1255646, lat: -23.359986 },
    { lng: -51.1254787, lat: -23.3569129 },
    { lng: -51.1248779, lat: -23.3544702 },
    { lng: -51.1211014, lat: -23.3547066 },
    { lng: -51.1183548, lat: -23.3532882 },
    { lng: -51.1183548, lat: -23.3474569 },
    { lng: -51.1168098, lat: -23.3424923 },
    { lng: -51.1149216, lat: -23.3384337 },
    { lng: -51.1127758, lat: -23.3362271 },
    { lng: -51.1066818, lat: -23.3353207 },
    { lng: -51.1024332, lat: -23.3352419 },
    { lng: -51.0990429, lat: -23.3339022 },
    { lng: -51.0956955, lat: -23.3318531 },
    { lng: -51.0922623, lat: -23.3255479 },
    { lng: -51.0941505, lat: -23.3162474 },
    { lng: -51.0853958, lat: -23.3116757 },
    { lng: -51.1592102, lat: -23.3116757 },
  ];

  const optionsZSL = {
    fillColor: "blue",
    strokeColor: "blue",
  };

  const zonaSulOeste = [
    { lng: -51.1592102, lat: -23.3116757 },
    { lng: -51.1592102, lat: -23.3810226 },
    { lng: -51.1786079, lat: -23.3789743 },
    { lng: -51.188221, lat: -23.375035 },
    { lng: -51.2010956, lat: -23.372829 },
    { lng: -51.2122536, lat: -23.3676289 },
    { lng: -51.2223816, lat: -23.3640045 },
    { lng: -51.2234116, lat: -23.3577009 },
    { lng: -51.2240982, lat: -23.3523426 },
    { lng: -51.2263298, lat: -23.3461961 },
    { lng: -51.2278748, lat: -23.3395764 },
    { lng: -51.2261581, lat: -23.3361088 },
    { lng: -51.2330246, lat: -23.3285429 },
    { lng: -51.2345695, lat: -23.3236564 },
    { lng: -51.2338829, lat: -23.3184543 },
    { lng: -51.2313938, lat: -23.314198 },
    { lng: -51.2289047, lat: -23.3116757 },
  ];

  const optionsZSO = {
    fillColor: "red",
    strokeColor: "red",
  };

  const zonaNorteOeste = [
    { lng: -51.1592102, lat: -23.3116757 },
    { lng: -51.2289047, lat: -23.3116757 },
    { lng: -51.223315, lat: -23.3046256 },
    { lng: -51.225788, lat: -23.3018075 },
    { lng: -51.2270647, lat: -23.3004034 },
    { lng: -51.2283468, lat: -23.2992307 },
    { lng: -51.2302566, lat: -23.297664 },
    { lng: -51.2273169, lat: -23.2948752 },
    { lng: -51.2303102, lat: -23.2905689 },
    { lng: -51.2290335, lat: -23.2864792 },
    { lng: -51.2268448, lat: -23.2815615 },
    { lng: -51.2230682, lat: -23.2769097 },
    { lng: -51.210537, lat: -23.2759636 },
    { lng: -51.2088203, lat: -23.2743078 },
    { lng: -51.2083054, lat: -23.2595628 },
    { lng: -51.2017822, lat: -23.2577491 },
    { lng: -51.1966324, lat: -23.2568029 },
    { lng: -51.1944008, lat: -23.248917 },
    { lng: -51.19277, lat: -23.2415827 },
    { lng: -51.1843586, lat: -23.2409518 },
    { lng: -51.1712265, lat: -23.2415038 },
    { lng: -51.1592102, lat: -23.2415038 },
  ];

  const optionsZNO = {
    fillColor: "yellow",
    strokeColor: "yellow",
  };

  const zonaNorteLeste = [
    { lng: -51.1592102, lat: -23.3116757 },
    { lng: -51.0853958, lat: -23.3116757 },
    { lng: -51.0864687, lat: -23.2929536 },
    { lng: -51.0870695, lat: -23.2841632 },
    { lng: -51.0970688, lat: -23.2847151 },
    { lng: -51.0987854, lat: -23.2806154 },
    { lng: -51.101017, lat: -23.275254 },
    { lng: -51.1117029, lat: -23.2695376 },
    { lng: -51.1120462, lat: -23.2657528 },
    { lng: -51.1121321, lat: -23.2631507 },
    { lng: -51.1120892, lat: -23.2568817 },
    { lng: -51.1315727, lat: -23.2542794 },
    { lng: -51.1322594, lat: -23.2397688 },
    { lng: -51.1592102, lat: -23.2369296 },
  ];

  const optionsZNL = {
    fillColor: "black",
    strokeColor: "black",
  };

  return (
    <div className="map">
      {isLoaded ? (
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
                className: "marker",
              },
            }}
          />
          <Polygon paths={zonaSulLeste} options={optionsZSL} />
          <Polygon paths={zonaSulOeste} options={optionsZSO} />
          <Polygon paths={zonaNorteOeste} options={optionsZNO} />
          <Polygon paths={zonaNorteLeste} options={optionsZNL} />
        </GoogleMap>
      ) : (
        <>
          <p>ERRO DE REQUISIÇÃO!</p>
        </>
      )}
    </div>
  );
}
