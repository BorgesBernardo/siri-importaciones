// Mapa Google de la tienda

let map;

async function initMap() {

  const position = { lat: -31.737684, lng: -60.516942 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");


  map = new Map(document.querySelector("#map"), {
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
  });


  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Paraná",
  });
}

initMap();
