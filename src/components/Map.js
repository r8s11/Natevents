import GoogleMapReact from "google-map-react";
import LocationMarker from './LocationMarker'
const Map = ({ eventData, center, zoom }) => {
    
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8){
            return <LocationMarker lat = {ev.geometries[0].coordinates[1]} lng = {ev.geometries[0].coordinates[0]} />
        } else {
            return null
        }

    })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDOPhj5G7Ot2CT-OrxiSEuCj-1cfe9Z2oc",
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
          {markers}
          </GoogleMapReact>{" "}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.354323,
    lng: -71.06550,
  },
  zoom: 13,
};
export default Map;
