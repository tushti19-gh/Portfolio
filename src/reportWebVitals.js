const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;


// CLS → Page ka hilna-dhulna (stability)  CUMULATIVE LAYOUT SHIFT

// FID → Button/Click response speed   FIRST INPUT DELAY

// FCP → Pehla visible content dikhne ka time  FIRST CONTENTFUL PAINT

// LCP → Sabse bada content load hone ka time LARGEST CONTENTFUL PAINT

// TTFB → Server response speed TIME TO FIRST BYTE