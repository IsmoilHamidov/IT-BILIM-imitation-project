import React, { useRef, useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useTranslation } from "react-i18next";


const MapComponent = () => {
  const [t, i18n] = useTranslation("global");
  const [showOverlay, setShowOverlay] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1200);
  const mapRef = useRef(null);

  const mapData = {
    center: [41.302799, 69.314762],
    zoom: 16,
  };

  const mapOptions = {
    suppressMapOpenBlock: true,
    yandexMapDisablePoiInteractivity: true,
    suppressObsoleteBrowserNotifier: true,
    searchControlProvider: false,
    controls: ['fullscreenControl'],
  };

  const coordinates = [41.302799, 69.314762];

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleWheelEvent = (e) => {
      if (mapRef.current) {
        if (isLargeScreen && e.shiftKey) {
          mapRef.current.behaviors.enable('scrollZoom');
        } else {
          mapRef.current.behaviors.disable('scrollZoom');
        }
      }
    };

    document.addEventListener('wheel', handleWheelEvent, { passive: true });

    return () => {
      document.removeEventListener('wheel', handleWheelEvent);
    };
  }, [isLargeScreen]);

  const handleMapInstance = (instance) => {
    if (instance) {
      mapRef.current = instance;
      instance.behaviors.disable('scrollZoom'); 

      // Remove specific map controls
      instance.controls.remove('zoomControl');
      instance.controls.remove('trafficControl');
      instance.controls.remove('searchControl');
      instance.controls.remove('typeSelector');
      instance.controls.remove('geolocationControl');
      instance.controls.remove('routeButtonControl');

      // Remove traffic layer
      instance.layers.each((layer) => {
        if (layer.get('className') === 'traffic') {
          instance.layers.remove(layer);
        }
      });
    }
  };

  return (
    <div className='container-fluid Map_container' id='Contacts'>
      <h2>{t("Other_titles.h5")}</h2>
      <div
        style={{ position: 'relative', overflow: 'hidden' }}
        onMouseEnter={() => setShowOverlay(false)}
        onMouseLeave={() => setShowOverlay(true)}
      >
        {isLargeScreen && (
          <div
            className='map__overlay'
            style={{ opacity: showOverlay ? 1 : 0, transition: 'opacity 0.5s ease' }}
          >
            <div className='map__text'>
              Для масштабирования карты используйте Shift + Scroll
            </div>
          </div>
        )}
        <YMaps query={{ lang: 'en_RU', load: 'package.full' }}>
          <Map
            className='Map_size'
            defaultState={mapData}
            options={mapOptions}
            instanceRef={handleMapInstance}
            modules={['control.FullscreenControl']}
            style={{
              borderRadius: '15px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Placemark geometry={coordinates} />
          </Map>
        </YMaps>
      </div>
      <style jsx>{`
        .Map_size {
          transition: filter 0.2s ease;
        }
        .map__overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          pointer-events: none;
        }
        .map__text {
          color: #fff;
          padding: 10px;
          border-radius: 5px;
          text-align: center;
          font-size: 26px;
          font-weight: 400;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 1200px) {
          .map__text {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default MapComponent;
