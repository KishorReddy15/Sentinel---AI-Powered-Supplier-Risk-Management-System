
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

interface MapLocation {
  id: string | number;
  name: string;
  location: string;
  coordinates: [number, number]; // [longitude, latitude]
  type: 'supplier' | 'warehouse' | 'port' | 'factory';
  details?: Record<string, any>;
}

interface GlobalMapProps {
  locations: MapLocation[];
  height?: string;
  onLocationClick?: (location: MapLocation) => void;
}

const GlobalMap: React.FC<GlobalMapProps> = ({ 
  locations, 
  height = '400px',
  onLocationClick 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = React.useState<string>('');

  const handleMapboxTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMapboxToken(e.target.value);
    localStorage.setItem('mapbox_token', e.target.value);
  };

  useEffect(() => {
    // Try to load token from localStorage
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map only when we have a token
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe',
      zoom: 1.5,
      center: [30, 15],
      pitch: 20,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Disable scroll zoom for smoother experience
    map.current.scrollZoom.disable();

    // Add atmosphere and fog effects
    map.current.on('style.load', () => {
      if (!map.current) return;
      
      map.current.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });

      // Add location markers
      locations.forEach(location => {
        // Create a custom element for the marker
        const el = document.createElement('div');
        el.className = 'custom-marker';
        el.style.width = '24px';
        el.style.height = '24px';
        el.style.backgroundImage = 'url(https://img.icons8.com/color/48/000000/marker.png)';
        el.style.backgroundSize = 'cover';
        el.style.cursor = 'pointer';
        
        // Set different colors based on type
        let color;
        switch(location.type) {
          case 'supplier':
            color = '#e63946'; // red
            break;
          case 'warehouse':
            color = '#2a9d8f'; // teal
            break;
          case 'port':
            color = '#457b9d'; // blue
            break;
          case 'factory':
            color = '#f4a261'; // orange
            break;
          default:
            color = '#6c757d'; // gray
        }
        
        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <strong>${location.name}</strong>
            <p>${location.location}</p>
            <p>Type: ${location.type}</p>
          `);

        // Create and add the marker
        new mapboxgl.Marker({ color })
          .setLngLat(location.coordinates)
          .setPopup(popup)
          .addTo(map.current);
        
        // Add click event if handler provided
        if (onLocationClick) {
          popup.on('open', () => {
            onLocationClick(location);
          });
        }
      });
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [locations, mapboxToken, onLocationClick]);

  if (!mapboxToken) {
    return (
      <div className="p-6 border border-dashed rounded-lg flex flex-col items-center justify-center" style={{ height }}>
        <div className="flex items-center mb-4">
          <MapPin className="mr-2 text-primary" />
          <h3 className="text-lg font-medium">Mapbox API Token Required</h3>
        </div>
        <p className="text-muted-foreground mb-4 text-center max-w-md">
          To display the map, please enter your Mapbox public token. 
          You can get one by signing up at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>.
        </p>
        <input 
          type="text" 
          value={mapboxToken}
          onChange={handleMapboxTokenChange}
          placeholder="Enter Mapbox public token"
          className="w-full max-w-md p-2 border rounded-md"
        />
        <p className="text-xs text-muted-foreground mt-2">
          Your token will be saved in your browser's local storage.
        </p>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden" style={{ height }}>
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default GlobalMap;
