
onload = () => {
    Array.from(document.getElementsByClassName("nav-link")).forEach(element => {
        element.addEventListener("click", (e)=>scrollTo(e.target.id));
    });

    function scrollTo(elementId){
        const card = document.querySelector(`[data-location*="${elementId}"]`);
        const cardTop = card.offsetTop;
        console.log(cardTop)

        window.scrollTo({
            top: cardTop,
            behavior: "smooth",
          });
    }



};

// initMap is now async
async function initMap() {
    // Request libraries when needed, not in the script tag.
    const { Map } = await google.maps.importLibrary("maps");
    // Short namespaces can be used.
    new Map(document.getElementById("map-lon"), {
        center: { lat: 51.509865, lng: -0.118092 },
        zoom: 10,
    });
    new Map(document.getElementById("map-sof"), {
        center: { lat: 42.698334, lng: 23.319941 },
        zoom: 10,
    });
    new Map(document.getElementById("map-NY"), {
        center: { lat: 40.730610, lng: -73.935242 },
        zoom: 10,
    });
    new Map(document.getElementById("map-par"), {
        center: { lat: 48.864716, lng: 2.349014 },
        zoom: 10,
    });
    new Map(document.getElementById("map-tok"), {
        center: { lat: 35.652832, lng: 139.839478 },
        zoom: 10,
    });
}

initMap();
