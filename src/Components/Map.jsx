import React, { useEffect, useRef } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapComponent = () => {
  const mapRef = useRef(null);

  const mapData = {
    center: [41.2995, 69.2401],
    zoom: 12,
  };

  const mapOptions = {
    suppressMapOpenBlock: true,
    yandexMapDisablePoiInteractivity: true,
  };

  const coordinates = [41.2995, 69.2401];

  useEffect(() => {
    const handleWheel = (e) => {
      if (!e.get('domEvent').shiftKey) {
        e.preventDefault();
      }
    };

    const map = mapRef.current;
    if (map) {
      map.behaviors.disable('scrollZoom');
      map.events.add('wheel', handleWheel);
      map.behaviors.enable('scrollZoom', { key: 'shift' });
    }

    return () => {
      if (map) {
        map.events.remove('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className='container-fluid Map_container'>
      <h2>Bizni qanday topish mumkin</h2>
      <YMaps query={{ lang: 'en_RU', load: 'package.full' }}>
        <Map className='Map_size'
          defaultState={mapData}
          options={mapOptions}
          instanceRef={(map) => {
            mapRef.current = map;
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark
            geometry={coordinates}
            properties={{
              hintContent: 'IT Park University',
              balloonContent: 'IT Park University, Tashkent, Uzbekistan',
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default MapComponent;
