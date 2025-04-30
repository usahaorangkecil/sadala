
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState<boolean>(true);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [112.4128, -7.1277], // Lamongan coordinates
      zoom: 10
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleSubmitToken = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem('token') as HTMLInputElement;
    if (input?.value) {
      setMapboxToken(input.value);
      setShowTokenInput(false);
    }
  };

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      {showTokenInput ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg p-6">
          <form onSubmit={handleSubmitToken} className="w-full max-w-md">
            <h3 className="text-lg font-medium mb-4">Enter your Mapbox token</h3>
            <p className="text-sm text-gray-600 mb-4">
              To display the map, please enter your Mapbox public token. 
              You can get one by signing up at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">mapbox.com</a>.
            </p>
            <div className="flex gap-2">
              <input 
                type="text" 
                name="token" 
                placeholder="pk.eyJ1..." 
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                required
              />
              <button 
                type="submit" 
                className="bg-[#4FC9DA] text-white px-4 py-2 rounded text-sm hover:bg-[#3DBBCC]"
              >
                Load Map
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div ref={mapContainer} className="absolute inset-0" />
      )}
    </div>
  );
};

export default Map;
