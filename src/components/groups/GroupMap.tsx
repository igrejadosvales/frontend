"use client"

import { useEffect, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { SmallGroup } from "@/lib/mock-pgs"

// Fix for default marker icons in Leaflet with Next.js
const icon = L.icon({
  iconUrl: "/igrupoIcon.svg",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
})

function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap()
  map.setView(center, 13)
  return null
}

interface GroupMapProps {
  groups: SmallGroup[]
  selectedGroup: SmallGroup | null
}

export default function GroupMap({ groups, selectedGroup }: GroupMapProps) {
  const defaultCenter: [number, number] = [-29.9425, -50.9950] // Gravataí, RS
  const center = selectedGroup ? selectedGroup.coordinates : defaultCenter
  const mapRef = useRef<L.Map | null>(null)
  const markersRef = useRef<{ [key: string]: L.Marker | null }>({})

  useEffect(() => {
    if (selectedGroup) {
      const marker = markersRef.current[selectedGroup.id]
      if (marker) {
        marker.openPopup()
      }
    }
  }, [selectedGroup])

  return (
    <div className="h-full w-full relative z-0">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {groups.map((group) => (
          <Marker
            key={group.id}
            position={group.coordinates}
            icon={icon}
            ref={(ref) => {
              if (ref) markersRef.current[group.id] = ref
            }}
          >
            <Popup>
              <div className="p-1">
                <h3 className="font-bold text-base">{group.name}</h3>
                <p className="text-sm"><strong>Líder:</strong> {group.leader}</p>
                <p className="text-sm"><strong>Dia:</strong> {group.day} às {group.time}</p>
                <p className="text-sm mt-1">{group.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        {selectedGroup && <ChangeView center={selectedGroup.coordinates} />}
      </MapContainer>
    </div>
  )
}
