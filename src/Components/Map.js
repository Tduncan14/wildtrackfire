import {useState} from 'react';

import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMark';
import LocationInfoBox from './LocationInfoBox';

const Map = ({eventData,center,zoom}) => {

    const [locationInfo,setLocationInfo] = useState(null)

    const Markers = eventData.map(ev => {
        

        if(ev.categories[0].id === 8){

          

            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
             onClick={() => setLocationInfo({id:ev.id, title:ev.title})} />

            
        }

        return null
    })

    console.log(locationInfo)

    return (
        
        <div className="map">
            <GoogleMapReact

            bootstrapURLKeys={{
                key: googleApi
            }}
            defaultCenter={center}
            defaultZoom = {zoom}
            

            >


                {Markers}

                {/* <LocationMarker lat={center.lat} lng={center.lng} /> */}


            </GoogleMapReact>
            
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )
}

Map.defaultProps = {

    center:{
        lat:42.3265,
        lng:-122.8756
    },

    zoom:6
}


export default Map