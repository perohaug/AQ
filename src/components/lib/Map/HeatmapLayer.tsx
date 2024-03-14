import { useEffect, useRef } from 'react';
import { Layer, LeafletMap } from 'leaflet';

interface HeatmapLayerProps {
  points: Array<[number, number, number]>; // Latitude, Longitude, Intensity
  radius?: number;
  max?: number;
  gradient?: object;
}

const HeatmapLayer: React.FC<HeatmapLayerProps> = ({ points, radius = 25, max = 1, gradient }) => {
  const heatmapLayerRef = useRef<Layer | null>(null);

  useEffect(() => {
    if (heatmapLayerRef.current) return;

    const heatmapLayer = new HeatmapLayer({
      points: points,
      radius,
      max,
      gradient,
    });
    heatmapLayerRef.current = heatmapLayer;
  }, [points, radius, max, gradient]);

  useEffect(() => {
    if (!heatmapLayerRef.current || !mapRef.current) return;

    mapRef.current.addLayer(heatmapLayerRef.current);

    return () => {
      mapRef.current?.removeLayer(heatmapLayerRef.current);
    };
  }, [heatmapLayerRef, mapRef]);

  return null; // This component doesn't render any JSX
};

export default HeatmapLayer;
