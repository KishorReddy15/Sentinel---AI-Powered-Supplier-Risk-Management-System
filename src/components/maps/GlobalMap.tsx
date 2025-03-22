
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Globe, Info, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

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
  showFlightPaths?: boolean;
  showHeatmap?: boolean;
  focusLocation?: MapLocation | null;
}

const GlobalMap: React.FC<GlobalMapProps> = ({ 
  locations, 
  height = '400px',
  onLocationClick,
  showFlightPaths = false,
  showHeatmap = false,
  focusLocation = null
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [spinning, setSpinning] = useState<boolean>(true);
  const flightPathsRef = useRef<any>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  const handleMapboxTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMapboxToken(e.target.value);
    localStorage.setItem('mapbox_token', e.target.value);
  };

  const toggleSpin = () => {
    setSpinning(!spinning);
  };

  useEffect(() => {
    // Try to load token from localStorage
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
    }
  }, []);

  // Create flight paths between locations
  const createFlightPaths = (map: mapboxgl.Map) => {
    if (!showFlightPaths || locations.length < 2) return;
    
    if (flightPathsRef.current) {
      map.removeLayer('flight-paths');
      map.removeSource('flight-lines');
    }

    // Create connections between warehouses and suppliers/factories
    const lines = [];
    const warehouseLocations = locations.filter(loc => loc.type === 'warehouse');
    const otherLocations = locations.filter(loc => loc.type !== 'warehouse');
    
    for (const warehouse of warehouseLocations) {
      for (const other of otherLocations) {
        if (Math.random() > 0.5) { // Only connect some locations for demo
          lines.push({
            type: 'Feature',
            properties: {
              color: '#30D5C8', // Teal color for lines
              description: `${warehouse.name} → ${other.name}`
            },
            geometry: {
              type: 'LineString',
              coordinates: [warehouse.coordinates, other.coordinates]
            }
          });
        }
      }
    }

    const source = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: lines
      }
    };
    
    map.addSource('flight-lines', source as any);
    
    map.addLayer({
      id: 'flight-paths',
      type: 'line',
      source: 'flight-lines',
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': ['get', 'color'],
        'line-width': 2,
        'line-opacity': 0.8,
        'line-dasharray': [0, 2, 3]
      }
    });

    map.on('mouseenter', 'flight-paths', () => {
      if (map) map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'flight-paths', () => {
      if (map) map.getCanvas().style.cursor = '';
    });

    flightPathsRef.current = true;
  };

  // Focus on a specific location
  useEffect(() => {
    if (!map.current || !focusLocation) return;
    
    map.current.flyTo({
      center: focusLocation.coordinates,
      zoom: 5,
      essential: true,
      duration: 2000
    });
  }, [focusLocation]);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Clear existing markers if any
    if (markersRef.current.length > 0) {
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
    }

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
        
        // Create popup with more detailed info
        const popupContent = `
          <div class="p-2">
            <h3 class="text-lg font-bold mb-1">${location.name}</h3>
            <p class="text-sm mb-1">${location.location}</p>
            <p class="text-sm mb-1">Type: ${location.type.charAt(0).toUpperCase() + location.type.slice(1)}</p>
            ${location.details ? Object.entries(location.details).map(([key, value]) => 
              `<p class="text-sm mb-1"><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`
            ).join('') : ''}
          </div>
        `;
        
        const popup = new mapboxgl.Popup({ offset: 25, maxWidth: '300px' })
          .setHTML(popupContent);

        // Create and add the marker
        const marker = new mapboxgl.Marker({ color })
          .setLngLat(location.coordinates)
          .setPopup(popup)
          .addTo(map.current!);
        
        markersRef.current.push(marker);
        
        // Add click event if handler provided
        if (onLocationClick) {
          popup.on('open', () => {
            onLocationClick(location);
          });
        }
      });

      // Add flight paths if enabled
      if (showFlightPaths) {
        createFlightPaths(map.current);
      }
    });

    // Rotation animation settings
    const secondsPerRevolution = 240;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;
    let userInteracting = false;

    // Spin globe function
    function spinGlobe() {
      if (!map.current || !spinning) return;
      
      const zoom = map.current.getZoom();
      if (!userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.current.getCenter();
        center.lng -= distancePerSecond / 60; // Smoother spinning
        map.current.easeTo({ center, duration: 100, easing: (n) => n });
        
        // Schedule the next frame
        requestAnimationFrame(spinGlobe);
      }
    }

    // Event listeners for interaction
    map.current.on('mousedown', () => {
      userInteracting = true;
    });
    
    map.current.on('dragstart', () => {
      userInteracting = true;
    });
    
    map.current.on('mouseup', () => {
      userInteracting = false;
      if (spinning) requestAnimationFrame(spinGlobe);
    });
    
    map.current.on('touchend', () => {
      userInteracting = false;
      if (spinning) requestAnimationFrame(spinGlobe);
    });

    // Start the globe spinning if enabled
    if (spinning) {
      requestAnimationFrame(spinGlobe);
    }

    // Cleanup
    return () => {
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
      map.current?.remove();
    };
  }, [locations, mapboxToken, showFlightPaths, spinning, onLocationClick]);

  if (!mapboxToken) {
    return (
      <div className="p-6 border border-dashed rounded-lg flex flex-col items-center justify-center" style={{ height }}>
        <div className="flex items-center mb-4">
          <Globe className="mr-2 text-primary" />
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
      <div className="absolute top-2 right-2 z-10 flex gap-2">
        <Button 
          size="sm" 
          variant="secondary" 
          className="bg-white/80 hover:bg-white"
          onClick={toggleSpin}
        >
          {spinning ? 'Stop Rotation' : 'Start Rotation'}
        </Button>
        {showFlightPaths && (
          <Button 
            size="sm" 
            variant="secondary" 
            className="bg-white/80 hover:bg-white"
            onClick={() => toast.info("Supply chains visualized. Click on a path for more details.")}
          >
            <Info className="h-4 w-4 mr-1" /> About Paths
          </Button>
        )}
      </div>
      {map.current && (
        <div className="absolute bottom-2 left-2 z-10 text-xs text-white bg-black/40 px-2 py-1 rounded">
          Zoom: {map.current.getZoom().toFixed(1)}
        </div>
      )}
    </div>
  );
};

export default GlobalMap;
