/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken = 'pk.eyJ1IjoidmlqYXlzcCIsImEiOiJjbGFveHc2eGYwbzc0M3BudmxrNmkyanRvIn0.lHQMAfZc2ELUfemaVfQiMQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/vijaysp/clap1cwh8000a14ms9qhpl4ye',
    scrollZoom: false,
    interactive: false // disable all interactions

  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(location => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(location.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(location.coordinates)
      .setHTML(`<p>Day ${location.day}: ${location.description}</p>`)
      .addTo(map);

    bounds.extend(location.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
