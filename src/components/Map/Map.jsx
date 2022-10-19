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
        if (data.status == 200 || data.status === "OK") {
          console.log("OK");
          const element = document.querySelector(".elem");
          element.style.opacity = "0";
          setClientCoord({
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
          });
        } else if (data.status === "ZERO_RESULTS") {
          console.log("BAD REQUEST");
          const element = document.querySelector(".elem");
          element.style.opacity = "1";
        }
      });
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
    fillOpacity: 0.1,
    strokeOpacity: 0.1,
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
    fillOpacity: 0.1,
    strokeOpacity: 0.1,
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
    fillOpacity: 0.1,
    strokeOpacity: 0.1,
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
    fillOpacity: 0.1,
    strokeOpacity: 0.1,
  };

  // Others
  const cambe = [
    { lng: -51.264267, lat: -23.2504942 },
    { lng: -51.2862396, lat: -23.2508096 },
    { lng: -51.3044357, lat: -23.2627958 },
    { lng: -51.3054657, lat: -23.2820345 },
    { lng: -51.2982559, lat: -23.3025318 },
    { lng: -51.2735367, lat: -23.3100992 },
    { lng: -51.2306213, lat: -23.3179814 },
    { lng: -51.2158585, lat: -23.3116757 },
    { lng: -51.2072754, lat: -23.2971713 },
    { lng: -51.2189484, lat: -23.2725732 },
    { lng: -51.2374878, lat: -23.2612188 },
    { lng: -51.2649536, lat: -23.2511251 },
  ];

  const jataizinho = [
    { lng: -50.9749317, lat: -23.2465511 },
    { lng: -50.9802532, lat: -23.2493113 },
    { lng: -50.9855747, lat: -23.2531754 },
    { lng: -50.9888363, lat: -23.2574337 },
    { lng: -50.9838581, lat: -23.2643729 },
    { lng: -50.9787083, lat: -23.2687885 },
    { lng: -50.9751892, lat: -23.2732828 },
    { lng: -50.970211, lat: -23.2759636 },
    { lng: -50.9637737, lat: -23.2739136 },
    { lng: -50.9570789, lat: -23.2684731 },
    { lng: -50.9526157, lat: -23.2633478 },
    { lng: -50.9516716, lat: -23.2562509 },
    { lng: -50.9624863, lat: -23.2493902 },
    { lng: -50.9668636, lat: -23.2468666 },
    { lng: -50.9715843, lat: -23.2456836 },
    { lng: -50.9747601, lat: -23.2469454 },
  ];

  const options2HR = {
    fillColor: "purple",
    strokeColor: "purple",
    fillOpacity: 0.1,
    strokeOpacity: 0.1,
  };

  const ibipora = [
    { lng: -51.0845375, lat: -23.282823 },
    { lng: -51.0823059, lat: -23.2714694 },
    { lng: -51.0774994, lat: -23.2670538 },
    { lng: -51.0756111, lat: -23.2627958 },
    { lng: -51.0687447, lat: -23.2577491 },
    { lng: -51.0654831, lat: -23.2542794 },
    { lng: -51.0569, lat: -23.2474975 },
    { lng: -51.046772, lat: -23.2449739 },
    { lng: -51.0400772, lat: -23.247182 },
    { lng: -51.036129, lat: -23.2497056 },
    { lng: -51.0320091, lat: -23.2495479 },
    { lng: -51.0278893, lat: -23.2504942 },
    { lng: -51.0266876, lat: -23.2542794 },
    { lng: -51.026001, lat: -23.2596417 },
    { lng: -51.0237694, lat: -23.2638998 },
    { lng: -51.0150146, lat: -23.2659499 },
    { lng: -51.0091782, lat: -23.2721001 },
    { lng: -51.0102081, lat: -23.2785655 },
    { lng: -51.0124397, lat: -23.2873957 },
    { lng: -51.0193062, lat: -23.2935449 },
    { lng: -51.0411072, lat: -23.2973289 },
    { lng: -51.0617065, lat: -23.2949639 },
    { lng: -51.0721779, lat: -23.2954369 },
    { lng: -51.0800743, lat: -23.2921259 },
    { lng: -51.0840225, lat: -23.2859766 },
    { lng: -51.0843658, lat: -23.2829806 },
  ];

  const optionsIBI = {
    fillColor: "orange",
    strokeColor: "orange",
    fillOpacity: 0.1,
    strokeOpacity: 0.1,
  };

  return (
    <>
      <h1 className="elem">ENDEREÇO INVÁLIDO!!</h1>
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
            <Polygon paths={cambe} options={options2HR} />
            <Polygon paths={jataizinho} options={options2HR} />
            <Polygon paths={ibipora} options={optionsIBI} />
          </GoogleMap>
        ) : (
          <>
            <p>ERRO DE REQUISIÇÃO!</p>
          </>
        )}
      </div>
    </>
  );
}
