import React, { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapComponent = () => {
  const [showAttentionMessage, setShowAttentionMessage] = useState(false);

  const mapData = {
    center: [41.302799, 69.314762], // Coordinates for the specified address in Tashkent
    zoom: 16, // Increased zoom level to get closer to the location
  };

  const mapOptions = {
    suppressMapOpenBlock: true,
    yandexMapDisablePoiInteractivity: true,
    suppressObsoleteBrowserNotifier: true, // Hides the "your browser is out of date" notice.
    searchControlProvider: false, // Removes the Yandex Maps searching feature
    controls: [], // Initial removal of default controls
  };

  const coordinates = [41.302799, 69.314762]; // Coordinates for the specified address in Tashkent

  const handleMapLoad = (map) => {
    if (map) {
      try {
        // Disable default scroll zoom behavior
        map.behaviors.disable('scrollZoom');

        // Handle wheel event to show/hide attention message
        map.events.add('wheel', (e) => {
          if (e.get('domEvent').shiftKey) {
            setShowAttentionMessage(true);
          } else {
            setShowAttentionMessage(false);
          }
        });

        // Enable scroll zoom when Shift key is pressed
        map.behaviors.enable('scrollZoom', { key: 'shift' });
      } catch (error) {
        console.error('Error handling map behavior:', error);
      }
    }
  };

  const handleMouseEnter = () => {
    setShowAttentionMessage(false);
  };

  return (
    <div className='container-fluid Map_container'>
      <h2>Bizni qanday topish mumkin</h2>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {showAttentionMessage && (
          <div
            className='map__attention'
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: '#fff',
              padding: '10px',
              borderRadius: '5px',
              zIndex: '100',
              cursor: 'pointer',
            }}
            onMouseEnter={handleMouseEnter}
          >
            Use Shift + Scroll to zoom the map
          </div>
        )}
        <YMaps query={{ lang: 'en_RU', load: 'package.full' }}>
          <Map
            className='Map_size'
            defaultState={mapData}
            options={mapOptions}
            onLoad={handleMapLoad}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
            style={{
              borderRadius: '15px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              filter: 'grayscale(0%)' // Apply grayscale filter
            }}
          >
            <Placemark geometry={coordinates} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default MapComponent;
