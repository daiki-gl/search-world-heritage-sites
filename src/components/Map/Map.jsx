import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { MarkerF } from '@react-google-maps/api'
import { GOOGLE_MAPS_API_KEY } from '../../config'

const Map = ({ lat, lng }) => {
  const containerStyle = {
    height: '350px',
    width: '100%',
  }

  const position = {
    lat: lat,
    lng: lng,
  }

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={11}>
        <MarkerF position={position} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
