"use client";

import React from 'react';

const withClient = (WrappedComponent) => {
  const WithClientComponent = (props) => {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
      setIsClient(true);
    }, []);

    if (!isClient) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  WithClientComponent.displayName = `withClient(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithClientComponent;
};

export default withClient;
