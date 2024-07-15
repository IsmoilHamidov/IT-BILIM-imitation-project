import React from 'react';

const MapComponent = () => {
  return (
    <div className='container-fluid Map_container'>
      <h2>Bizni qanday topish mumkin</h2>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <a href="https://yandex.uz/maps/org/84129033172/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>IT Park University</a>
        <a href="https://yandex.uz/maps/10335/tashkent/category/university/184106140/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>University in Tashkent</a>
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.315440%2C41.302937&mode=search&oid=84129033172&ol=biz&z=18.37"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen={true}
          style={{ position: 'relative' }}
          title="Yandex Map"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
