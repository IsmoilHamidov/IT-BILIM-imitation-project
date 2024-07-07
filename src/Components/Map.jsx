import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapComponent = () => {
  const mapData = {
    center: [41.2995, 69.2401],
    zoom: 12,
  };

  const mapOptions = {
    suppressMapOpenBlock: true,
    yandexMapDisablePoiInteractivity: true,
  };

  const blackWhiteStyle = [
    {
      featureType: 'all',
      stylers: [{ saturation: -100 }, { lightness: 50 }],
    },
  ];

  const coordinates = [41.2995, 69.2401];

  return (
    <div className='container-fluid Map_container'>
      <h2>Bizni qanday topish mumkin</h2>
      <YMaps query={{ lang: 'en_RU', load: 'package.full' }}>
        <Map
          defaultState={mapData}
          width="100%"
          height="500px"
          options={{ ...mapOptions, ...blackWhiteStyle }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
          instanceRef={(map) => {
            if (map) {
              map.behaviors.disable('scrollZoom');
              map.behaviors.enable('scrollZoom', { key: 'shift' });
            }
          }}
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
