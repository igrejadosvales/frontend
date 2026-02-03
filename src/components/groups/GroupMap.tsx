"use client";

import { useEffect, useRef, useState } from "react";
import { SmallGroup } from "@/lib/mock-pgs";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Icon, Style } from "ol/style";
import Overlay from "ol/Overlay";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

interface GroupMapProps {
  groups: SmallGroup[];
  selectedGroup: SmallGroup | null;
  onShowDetails?: (group: SmallGroup) => void;
}

export default function GroupMap({
  groups,
  selectedGroup,
  onShowDetails,
}: GroupMapProps) {
  const mapElement = useRef<HTMLDivElement>(null);
  const popupElement = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);
  const overlayRef = useRef<Overlay | null>(null);
  const [popupContent, setPopupContent] = useState<SmallGroup | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapElement.current || mapRef.current) return;

    // Create marker source and layer
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // Create popup overlay
    const overlay = new Overlay({
      element: popupElement.current!,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
      positioning: "bottom-center",
      stopEvent: true,
      offset: [0, -45], // Adjust for icon height
    });
    overlayRef.current = overlay;

    const map = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://{a-d}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
            attributions:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([-50.995, -29.9425]), // Gravataí, RS (Lon, Lat)
        zoom: 13,
      }),
      overlays: [overlay],
      controls: [], // default controls usually ok, can customize if needed
    });

    mapRef.current = map;

    // Handle click on features
    map.on("click", (evt) => {
      const feature = map.forEachFeatureAtPixel(
        evt.pixel,
        (feature) => feature,
      );
      if (feature) {
        const group = feature.get("groupData") as SmallGroup;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const geometry = feature.getGeometry() as any;
        const coordinates = geometry.getCoordinates();

        setPopupContent(group);
        overlay.setPosition(coordinates);
      } else {
        overlay.setPosition(undefined);
        setPopupContent(null);
      }
    });

    // Pointer cursor on hover
    map.on("pointermove", function (e) {
      if (!mapRef.current) return;
      const pixel = map.getEventPixel(e.originalEvent);
      const hit = map.hasFeatureAtPixel(pixel);
      map.getTargetElement().style.cursor = hit ? "pointer" : "";
    });

    return () => {
      map.setTarget(undefined);
      mapRef.current = null;
    };
  }, []);

  // Update markers when groups change
  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;
    const layers = map.getLayers().getArray();
    const vectorLayer = layers[1] as VectorLayer<VectorSource>; // Assuming it's the second layer
    const source = vectorLayer.getSource();

    if (!source) return;

    source.clear();

    const features = groups
      .filter(g => g.coordinates !== null)
      .map((group) => {
        // Mock data is using [Lat, Lon] (Leaflet style)
        // OpenLayers uses [Lon, Lat]
        const lon = group.coordinates![1];
        const lat = group.coordinates![0];

        const feature = new Feature({
          geometry: new Point(fromLonLat([lon, lat])),
          groupData: group,
        });

        feature.setStyle(
          new Style({
            image: new Icon({
              anchor: [0.5, 1], // Bottom center
              anchorXUnits: "fraction",
              anchorYUnits: "fraction",
              src: "/igrupoIcon.svg",
              width: 40,
              height: 40,
            }),
          }),
        );
        return feature;
      });

    source.addFeatures(features);
  }, [groups]);

  // Handle selectedGroup prop
  useEffect(() => {
    if (!mapRef.current || !selectedGroup || !selectedGroup.coordinates) return;

    const map = mapRef.current;
    const lon = selectedGroup.coordinates[1];
    const lat = selectedGroup.coordinates[0];
    const center = fromLonLat([lon, lat]);

    map.getView().animate({
      center: center,
      zoom: 15,
      duration: 500,
    });

    if (overlayRef.current) {
      if (popupContent?.id !== selectedGroup.id) {
        setTimeout(() => setPopupContent(selectedGroup), 0);
      }
      overlayRef.current.setPosition(center);
    }
  }, [selectedGroup, popupContent]);

  return (
    <div className="h-full w-full relative z-0">
      <div ref={mapElement} className="h-full w-full" />

      {/* Popup Container */}
      <div
        ref={popupElement}
        className="bg-white p-3 rounded shadow-lg border border-gray-200 min-w-[200px] relative after:content-[''] after:absolute after:top-full after:left-1/2 after:-ml-2 after:border-8 after:border-transparent after:border-t-white"
      >
        {popupContent && (
          <div className="text-sm text-gray-900 user-select-none select-none">
            <h3 className="font-bold text-base mb-1">{popupContent.name}</h3>
            <p>
              <strong>Líder:</strong> {popupContent.leader}
            </p>
            <p>
              <strong>Dia:</strong> {popupContent.day} às {popupContent.time}
            </p>
            <p className="mt-1 text-gray-600 text-xs">{popupContent.address}</p>
            {onShowDetails && (
              <button
                type="button"
                className="mt-3 w-full bg-primary text-white rounded px-3 py-1.5 text-xs font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onShowDetails(popupContent);
                }}
              >
                Ver Detalhes
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
