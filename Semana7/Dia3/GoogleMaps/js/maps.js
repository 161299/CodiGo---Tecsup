var map;
// iniciando el mapa
let initMap =()=>{
    mapaGoogle = new google.maps.Map(document.getElementById('mapa'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8,
      styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8ec3b9"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1a3646"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#4b6878"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#64779e"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#4b6878"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#334e87"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#283d6a"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#6f9ba5"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "poi.attraction",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#122038"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3C7680"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#304a7d"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#98a5be"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2c6675"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ff15d7"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#255763"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#b0d5ce"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#5ebfd0"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#98a5be"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#2d4ee8"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3a4762"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ff151c"
                }
              ]
            },
            {
              "featureType": "transit.station.airport",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#fffa15"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#0e1626"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#59e1d3"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#b685b0"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#4e6d70"
                }
              ]
            }
          ]
      
    });
    // imprime las coordenadas
    mapaGoogle.addListener("click", function(event){
        console.log(event.latLng.lat());  
        console.log(event.latLng.lng());  
        console.log(event.latLng);  
        console.log(event);  
        // TAREA, detectar cada lugar donde se hace click en el mapa e ir uniendo todos los puntos con polylines
        // getCurrentPosition -> procesa la ubicacion obtenido, a tiempo real no fake
        // watchPosition -> ubicacion en tiempo real
    })
} 

initMap();

// COLOCAR UN POLYLINE
let tecsupPlaza = new google.maps.Polyline(
    {
    path:     [
        { lat : -16.44455	, lng : -71.506783	},
        { lat : -16.44434	, lng : -71.50856	},
        { lat : -16.443871	, lng : -71.510559	},
        { lat : -16.44528	, lng : -71.510963	},
        { lat : -16.445141	, lng : -71.511711	},
        { lat : -16.44508	, lng : -71.512444	},
        { lat : -16.444441	, lng : -71.512291	},
        { lat : -16.444361	, lng : -71.513344	},
        { lat : -16.44463	, lng : -71.515251	},
        { lat : -16.44471	, lng : -71.51738	},
        { lat : -16.4452	, lng : -71.51738	},
        { lat : -16.44512	, lng : -71.51841	},
        { lat : -16.443741	, lng : -71.51799	},
        { lat : -16.4436	, lng : -71.51825	},
        { lat : -16.44323	, lng : -71.518753	},
        { lat : -16.44319	, lng : -71.51899	},
        { lat : -16.443331	, lng : -71.523033	},
        { lat : -16.442341	, lng : -71.52478	},
        { lat : -16.44223	, lng : -71.525093	},
        { lat : -16.44084	, lng : -71.525543	},
        { lat : -16.44194	, lng : -71.528923	},
        { lat : -16.44101	, lng : -71.529091	},
        { lat : -16.43083	, lng : -71.532761	},
        { lat : -16.43066	, lng : -71.53273	},
        { lat : -16.43063	, lng : -71.532669	},
        { lat : -16.42725	, lng : -71.532951	},
        { lat : -16.42688	, lng : -71.533043	},
        { lat : -16.42565	, lng : -71.533081	},
        { lat : -16.425541	, lng : -71.532944	},
        { lat : -16.42531	, lng : -71.533043	},
        { lat : -16.42528	, lng : -71.533279	},
        { lat : -16.4254	, lng : -71.53344	},
        { lat : -16.42532	, lng : -71.534851	},
        { lat : -16.42495	, lng : -71.536591	},
        { lat : -16.42474	, lng : -71.537323	},
        { lat : -16.42374	, lng : -71.539711	},
        { lat : -16.42301	, lng : -71.54158	},
        { lat : -16.42281	, lng : -71.543442	},
        { lat : -16.42255	, lng : -71.543961	},
        { lat : -16.4223	, lng : -71.544151	},
        { lat : -16.42165	, lng : -71.542374	},
        { lat : -16.42149	, lng : -71.541481	},
        { lat : -16.42124	, lng : -71.540932	},
        { lat : -16.420891	, lng : -71.540352	},
        { lat : -16.42078	, lng : -71.540062	},
        { lat : -16.42046	, lng : -71.538712	},
        { lat : -16.42017	, lng : -71.538101	},
        { lat : -16.419403	, lng : -71.536964	},
        { lat : -16.418694	, lng : -71.535919	},
        { lat : -16.418278	, lng : -71.535576	},
        { lat : -16.418142	, lng : -71.535423	},
        { lat : -16.417788	, lng : -71.534912	},
        { lat : -16.41766	, lng : -71.534691	},
        { lat : -16.41749	, lng : -71.533974	},
        { lat : -16.417154	, lng : -71.53302	},
        { lat : -16.417131	, lng : -71.532806	},
        { lat : -16.417042	, lng : -71.532761	},
        { lat : -16.416487	, lng : -71.53315	},
        { lat : -16.416378	, lng : -71.533302	},
        { lat : -16.415955	, lng : -71.533676	},
        { lat : -16.415483	, lng : -71.533966	},
        { lat : -16.413887	, lng : -71.534691	},
        { lat : -16.413223	, lng : -71.534958	},
        { lat : -16.412556	, lng : -71.535187	},
        { lat : -16.411707	, lng : -71.53447	},
        { lat : -16.411356	, lng : -71.534088	},
        { lat : -16.411037	, lng : -71.533638	},
        { lat : -16.410517	, lng : -71.5327	},
        { lat : -16.409813	, lng : -71.531342	},
        { lat : -16.409601	, lng : -71.53083	},
        { lat : -16.409271	, lng : -71.52977	},
        { lat : -16.409204	, lng : -71.529205	},
        { lat : -16.410864	, lng : -71.52877	},
        { lat : -16.410833	, lng : -71.528664	},
        { lat : -16.40904	, lng : -71.529121	},
        { lat : -16.40885	, lng : -71.52903	},
        { lat : -16.408546	, lng : -71.52861	},
        { lat : -16.40778	, lng : -71.52919	},
        { lat : -16.40654	, lng : -71.530144	},
        { lat : -16.40189	, lng : -71.524429	},
        { lat : -16.399891	, lng : -71.526253	},
        { lat : -16.3995	, lng : -71.52578	},
        { lat : -16.3983	, lng : -71.526833	},
        { lat : -16.397301	, lng : -71.52755	},
        { lat : -16.3964	, lng : -71.52832	},
        { lat : -16.39579	, lng : -71.52774	},
        { lat : -16.395241	, lng : -71.527122	},
        { lat : -16.39386	, lng : -71.528412	},
        { lat : -16.39352	, lng : -71.528732	},
        { lat : -16.39337	, lng : -71.528801	},
        { lat : -16.3934	, lng : -71.529373	},
        { lat : -16.39253	, lng : -71.529411	},
        { lat : -16.392481	, lng : -71.529442	},
        { lat : -16.39246	, lng : -71.531502	},
        { lat : -16.39192	, lng : -71.531433	},
        { lat : -16.39193	, lng : -71.531754	},
        { lat : -16.39184	, lng : -71.532372	},
        { lat : -16.392111	, lng : -71.534203	},
        { lat : -16.39225	, lng : -71.534409	},
        { lat : -16.393061	, lng : -71.535263	},
        { lat : -16.39318703	, lng :	-71.5361756	},
        { lat : -16.39269756	, lng :	-71.53684325	},
        { lat : -16.39255377	, lng :	-71.53699499	},
        { lat : -16.3926557	, lng :	-71.5371672	},
        { lat : -16.39333832	, lng :	-71.53738245	},
        { lat : -16.39259	, lng :	-71.539459	},
        { lat : -16.392441	, lng :	-71.53949	},
        { lat : -16.39238	, lng :	-71.539581	},
        { lat : -16.39242	, lng :	-71.539742	},
        { lat : -16.392281	, lng :	-71.540169	},
        { lat : -16.3918	, lng :	-71.54129	},
        { lat : -16.39028	, lng :	-71.54554	},
        { lat : -16.38958	, lng :	-71.547859	},
        { lat : -16.38917	, lng :	-71.548813	},
        { lat : -16.38818	, lng :	-71.55162	},
        { lat : -16.38813	, lng :	-71.55191	},
        { lat : -16.38789	, lng :	-71.552521	},
        { lat : -16.38773	, lng :	-71.552773	},
        { lat : -16.38413	, lng :	-71.555901	},
        { lat : -16.38307	, lng :	-71.55632	},
        { lat : -16.38093	, lng :	-71.556641	},
        { lat : -16.37781	, lng :	-71.556992	},
        { lat : -16.37657	, lng :	-71.556992	},
        { lat : -16.37636	, lng :	-71.557053	},
        { lat : -16.37606	, lng :	-71.557213	},
        { lat : -16.37443	, lng :	-71.558632	},
        { lat : -16.37394	, lng :	-71.558899	},
        { lat : -16.36117	, lng :	-71.56192	},
        { lat : -16.36043	, lng :	-71.56218	},
        { lat : -16.35994	, lng :	-71.562431	},
        { lat : -16.35943	, lng :	-71.562782	},
        { lat : -16.353491	, lng :	-71.568092	},
        { lat : -16.35244	, lng :	-71.568909	},
        { lat : -16.35215	, lng :	-71.56929	},
        { lat : -16.34346	, lng :	-71.577003	},
        { lat : -16.343241	, lng :	-71.577271	},
        { lat : -16.34293	, lng :	-71.57785	},
        { lat : -16.342791	, lng :	-71.57843	},
        { lat : -16.3426	, lng :	-71.58139	},
        { lat : -16.342661	, lng :	-71.582733	},
        { lat : -16.34259	, lng :	-71.58432	},
        { lat : -16.34247	, lng :	-71.58506	},
        { lat : -16.34227	, lng :	-71.585709	},
        { lat : -16.34182	, lng :	-71.586601	},
        { lat : -16.33997	, lng :	-71.588989	},
        { lat : -16.34326	, lng :	-71.591591	},
        { lat : -16.34339	, lng :	-71.591782	},
        { lat : -16.34502	, lng :	-71.593102	},
        { lat : -16.34717	, lng :	-71.594704	},
        { lat : -16.347731	, lng :	-71.593109	},
        { lat : -16.3482	, lng :	-71.591492	},
        { lat : -16.34836	, lng :	-71.59198	},
        { lat : -16.34866	, lng :	-71.592262	},
        { lat : -16.34944	, lng :	-71.592522	},
        { lat : -16.35363	, lng :	-71.594559	},
        { lat : -16.35384	, lng :	-71.594749	},
        { lat : -16.354521	, lng :	-71.595581	},
        { lat : -16.35774	, lng :	-71.600113	},
        { lat : -16.35799	, lng :	-71.60067	},
        { lat : -16.35829	, lng :	-71.601723	},
        { lat : -16.3587	, lng :	-71.602371	},
        { lat : -16.35903	, lng :	-71.602692	},
        { lat : -16.36025	, lng :	-71.606102	},
        { lat : -16.36054	, lng :	-71.607651	},
        { lat : -16.36072	, lng :	-71.609329	},
        { lat : -16.36097	, lng :	-71.609962	},
        { lat : -16.36142	, lng :	-71.610321	},
        { lat : -16.36219	, lng :	-71.61071	},
        { lat : -16.36274	, lng :	-71.61116	},
        { lat : -16.36356	, lng :	-71.612213	},
        { lat : -16.36224	, lng :	-71.615372	},
        { lat : -16.36043	, lng :	-71.618752	},
        { lat : -16.35956	, lng :	-71.616089	},
        { lat : -16.35924	, lng :	-71.615311	},
        { lat : -16.35873	, lng :	-71.614471	},
        { lat : -16.35845	, lng :	-71.614189	},
        { lat : -16.35763	, lng :	-71.613632	},
        { lat : -16.35355	, lng :	-71.611931	},
        { lat : -16.35244	, lng :	-71.611359	},
        { lat : -16.3515	, lng :	-71.610779	},
        { lat : -16.35055	, lng :	-71.610039	},
        { lat : -16.3465	, lng :	-71.606552	},
        { lat : -16.340891	, lng :	-71.601921	}
    ] ,
    strokeColor: 'red',
    strokeWeight: 2  
    }
);
let vueltaRuta = new google.maps.Polyline(
    {
        path: [
                { lat : -16.34911	, lng :	-71.607903	},
                { lat : -16.34973	, lng :	-71.607071	},
                { lat : -16.34598	, lng :	-71.603981	},
                { lat : -16.34749	, lng :	-71.601959	},
                { lat : -16.3456	, lng :	-71.60051	},
                { lat : -16.34552	, lng :	-71.60038	},
                { lat : -16.345831	, lng :	-71.59906	},
                { lat : -16.34717	, lng :	-71.594704	},
                { lat : -16.34716	, lng :	-71.594452	},
                { lat : -16.34717	, lng :	-71.594704	},
                { lat : -16.34502	, lng :	-71.593102	},
                { lat : -16.34339	, lng :	-71.591782	},
                { lat : -16.34326	, lng :	-71.591591	},
                { lat : -16.33997	, lng :	-71.588989	},
                { lat : -16.34182	, lng :	-71.586601	},
                { lat : -16.34227	, lng :	-71.585709	},
                { lat : -16.34247	, lng :	-71.58506	},
                { lat : -16.34259	, lng :	-71.58432	},
                { lat : -16.342911	, lng :	-71.578461	},
                { lat : -16.343161	, lng :	-71.577682	},
                { lat : -16.34351	, lng :	-71.577141	},
                { lat : -16.34384	, lng :	-71.576782	},
                { lat : -16.35359	, lng :	-71.568192	},
                { lat : -16.35951	, lng :	-71.562851	},
                { lat : -16.3605	, lng :	-71.562279	},
                { lat : -16.36162	, lng :	-71.561951	},
                { lat : -16.373831	, lng :	-71.559082	},
                { lat : -16.37451	, lng :	-71.558731	},
                { lat : -16.37608	, lng :	-71.557373	},
                { lat : -16.376381	, lng :	-71.55719	},
                { lat : -16.37882	, lng :	-71.556992	},
                { lat : -16.38242	, lng :	-71.556541	},
                { lat : -16.383221	, lng :	-71.556381	},
                { lat : -16.38413	, lng :	-71.555901	},
                { lat : -16.38773	, lng :	-71.552773	},
                { lat : -16.38789	, lng :	-71.552521	},
                { lat : -16.38933	, lng :	-71.548691	},
                { lat : -16.39105	, lng :	-71.547722	},
                { lat : -16.39127	, lng :	-71.547531	},
                { lat : -16.39238	, lng :	-71.547112	},
                { lat : -16.3922	, lng :	-71.546402	},
                { lat : -16.3922	, lng :	-71.546204	},
                { lat : -16.39241	, lng :	-71.545891	},
                { lat : -16.392191	, lng :	-71.546181	},
                { lat : -16.392401	, lng :	-71.545883	},
                { lat : -16.393181	, lng :	-71.54538	},
                { lat : -16.39345	, lng :	-71.544991	},
                { lat : -16.39353	, lng :	-71.544411	},
                { lat : -16.393471	, lng :	-71.54393	},
                { lat : -16.39905	, lng :	-71.54615	},
                { lat : -16.39982	, lng :	-71.546432	},
                { lat : -16.400311	, lng :	-71.546471	},
                { lat : -16.4037	, lng :	-71.547691	},
                { lat : -16.4042	, lng :	-71.546211	},
                { lat : -16.40424	, lng :	-71.546219	},
                { lat : -16.404301	, lng :	-71.546021	},
                { lat : -16.40423	, lng :	-71.5457	},
                { lat : -16.40366	, lng :	-71.545303	},
                { lat : -16.40358	, lng :	-71.545174	},
                { lat : -16.40354	, lng :	-71.544884	},
                { lat : -16.4044	, lng :	-71.542961	},
                { lat : -16.40465	, lng :	-71.542961	},
                { lat : -16.40476	, lng :	-71.542824	},
                { lat : -16.40476	, lng :	-71.542633	},
                { lat : -16.4065	, lng :	-71.541931	},
                { lat : -16.40683	, lng :	-71.541924	},
                { lat : -16.40761	, lng :	-71.542259	},
                { lat : -16.4079	, lng :	-71.542282	},
                { lat : -16.408119	, lng :	-71.542053	},
                { lat : -16.408413	, lng :	-71.542297	},
                { lat : -16.408983	, lng :	-71.541389	},
                { lat : -16.408731	, lng :	-71.541191	},
                { lat : -16.406898	, lng :	-71.539536	},
                { lat : -16.40675	, lng :	-71.53949	},
                { lat : -16.407631	, lng :	-71.538712	},
                { lat : -16.407877	, lng :	-71.538498	},
                { lat : -16.408253	, lng :	-71.538292	},
                { lat : -16.409117	, lng :	-71.537308	},
                { lat : -16.409346	, lng :	-71.536903	},
                { lat : -16.409559	, lng :	-71.536591	},
                { lat : -16.410236	, lng :	-71.536179	},
                { lat : -16.411053	, lng :	-71.535744	},
                { lat : -16.412146	, lng :	-71.535553	},
                { lat : -16.412327	, lng :	-71.535568	},
                { lat : -16.412498	, lng :	-71.5355	},
                { lat : -16.412603	, lng :	-71.53537	},
                { lat : -16.412714	, lng :	-71.535278	},
                { lat : -16.415699	, lng :	-71.534019	},
                { lat : -16.416826	, lng :	-71.533173	},
                { lat : -16.417294	, lng :	-71.533813	},
                { lat : -16.417601	, lng :	-71.534782	},
                { lat : -16.41815	, lng :	-71.535622	},
                { lat : -16.418461	, lng :	-71.53582	},
                { lat : -16.41869	, lng :	-71.536072	},
                { lat : -16.420031	, lng :	-71.538033	},
                { lat : -16.42028	, lng :	-71.53849	},
                { lat : -16.42046	, lng :	-71.538971	},
                { lat : -16.42075	, lng :	-71.54026	},
                { lat : -16.42132	, lng :	-71.54129	},
                { lat : -16.4216	, lng :	-71.542572	},
                { lat : -16.42219	, lng :	-71.544151	},
                { lat : -16.42211	, lng :	-71.544403	},
                { lat : -16.42215	, lng :	-71.544502	},
                { lat : -16.422331	, lng :	-71.544563	},
                { lat : -16.42243	, lng :	-71.544441	},
                { lat : -16.42244	, lng :	-71.544289	},
                { lat : -16.422741	, lng :	-71.54393	},
                { lat : -16.42292	, lng :	-71.543541	},
                { lat : -16.42305	, lng :	-71.541962	},
                { lat : -16.42313	, lng :	-71.541641	},
                { lat : -16.4242	, lng :	-71.53878	},
                { lat : -16.42477	, lng :	-71.537483	},
                { lat : -16.42543	, lng :	-71.535172	},
                { lat : -16.425631	, lng :	-71.53376	},
                { lat : -16.425587	, lng :	-71.533447	},  
                { lat : -16.42573	, lng :	-71.5336	},
                { lat : -16.426369	, lng :	-71.533844	},
                { lat : -16.426781	, lng :	-71.533966	},
                { lat : -16.427725	, lng :	-71.534081	},
                { lat : -16.430271	, lng :	-71.534439	},
                { lat : -16.430532	, lng :	-71.533104	},
                { lat : -16.43066	, lng :	-71.532951	},
                { lat : -16.435671	, lng :	-71.53112	},
                { lat : -16.44096	, lng :	-71.529259	},
                { lat : -16.44199	, lng :	-71.52903	},
                { lat : -16.44084	, lng :	-71.525543	},
                { lat : -16.44223	, lng :	-71.525093	},
                { lat : -16.442341	, lng :	-71.52478	},
                { lat : -16.44327	, lng :	-71.523163	},
                { lat : -16.44335	, lng :	-71.522881	},
                { lat : -16.44319	, lng :	-71.51899	},
                { lat : -16.44323	, lng :	-71.518753	},
                { lat : -16.4436	, lng :	-71.51825	},
                { lat : -16.44375	, lng :	-71.517952	},
                { lat : -16.44368	, lng :	-71.515419	},
                { lat : -16.443411	, lng :	-71.51313	},
                { lat : -16.44339	, lng :	-71.512573	},
                { lat : -16.444241	, lng :	-71.509071	},
                { lat : -16.44454	, lng :	-71.506851	}
        ],
    strokeColor: 'blue',
    strokeWeight: 2 
    }
);
let rutaVerde = new google.maps.Polyline(
    {
        path: [
            { lat :	-16.340952	, lng :	-71.587349	},
            { lat :	-16.339773	, lng :	-71.586388	},
            { lat :	-16.337755	, lng :	-71.585251	},
            { lat :	-16.337385	, lng :	-71.584991	},
            { lat :	-16.334743	, lng :	-71.582321	},
            { lat :	-16.334116	, lng :	-71.581612	},
            { lat :	-16.333324	, lng :	-71.580933	},
            { lat :	-16.331602	, lng :	-71.579239	},
            { lat :	-16.331602	, lng :	-71.579239	},
            { lat :	-16.331175	, lng :	-71.57972	},
            { lat :	-16.331175	, lng :	-71.57972	},
            { lat :	-16.327555	, lng :	-71.576378	},
            { lat :	-16.327496	, lng :	-71.576172	},
            { lat :	-16.327036	, lng :	-71.57576	},
            { lat :	-16.327036	, lng :	-71.57576	},
            { lat :	-16.326605	, lng :	-71.57769	},
            { lat :	-16.326605	, lng :	-71.57769	},
            { lat :	-16.325562	, lng :	-71.577232	},
            { lat :	-16.32202	, lng :	-71.573967	},
            { lat :	-16.32202	, lng :	-71.573967	},
            { lat :	-16.322622	, lng :	-71.573196	},
            { lat :	-16.324247	, lng :	-71.571396	}    
        ],
        strokeColor: 'orange',
        strokeWeight: 2 
    }
)
tecsupPlaza.setMap(mapaGoogle)
vueltaRuta.setMap(mapaGoogle)
rutaVerde.setMap(mapaGoogle)



// FUNCION PARA BUSCAR UNA CIUDAD CON OPENWEATHERMAP
let buscarCiudadPorNombre = async (nombre)=>{
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${nombre}&appid=1b629fdbc12f5239767c4f6f4ddf2d63`
    let response =  await fetch(url);
    let miJson = await response.json()
    return miJson
}

let ciudadBusqueda = document.getElementById("ciudadBusqueda")
let formBusqueda = document.getElementById("formBusqueda");
formBusqueda.onsubmit =(event)=>{
    event.preventDefault()
    let carga = document.getElementById("carga")
    carga.removeAttribute("hidden")
    buscarCiudadPorNombre(ciudadBusqueda.value).then((json)=>{
        carga.setAttribute("hidden","hidden")
        
        if(json.cod == 200){
            let lat = json.coord.lat
            let lon = json.coord.lon
            let lugar = new google.maps.Marker(
                {
                    position:{
                        lat : lat,
                        lng : lon
                    },
                    map:mapaGoogle,
                    icon: './img/like.png'
                }
            )
            mapaGoogle.setCenter({
                lat : lat,
                lng : lon
                
            });
            mapaGoogle.setZoom(10)
            let error = document.getElementById("error")
            error.setAttribute("hidden","hidden")
        }else{
            let error = document.getElementById("error")
            error.removeAttribute("hidden")
        }
        let lat = json.coord.lat
        let lon = json.coord.lon
        console.log(lat);     
        console.log(lon);
        console.log(json);
        
    })

}


let agregarMarcador = document.getElementById("agregarMarcador")
agregarMarcador.onclick=()=>{
    let marcador = new google.maps.Marker(
        {position: {lat: -34.397, lng: 150.644},
        map:mapaGoogle})
}

        // TAREA, detectar cada lugar donde se hace click en el mapa e ir uniendo todos los puntos con polylines
        // getCurrentPosition -> procesa la ubicacion obtenido, a tiempo real no fake
        // watchPosition -> ubicacion en tiempo real
let obtenerUbicacion = ()=>{
    // Intentando acceder a la ubicacion del dispositivo
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
        console.log("El usuario me dio permiso");
        console.log(`Latitud del dispositivo => ${latitude}`);   
        console.log(`Longitude del dispositivo => ${longitude}`);   
    },()=>{
        console.log("El usuario no acepto que accedieramos a la ubicación");
        
    },{
        enableHighAccuracy : true
    })
}
obtenerUbicacion();
