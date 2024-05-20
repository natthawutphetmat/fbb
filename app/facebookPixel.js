"use client";

import React from 'react';
import withClient from './withClient';
import dynamic from 'next/dynamic';

const ReactPixel = dynamic(() => import('react-facebook-pixel'), { ssr: false });

const options = {
  autoConfig: true,
  debug: false,
};

const FacebookPixel = ({ pixelId }) => {
  React.useEffect(() => {
    const loadPixel = async () => {
      if (typeof window !== 'undefined' && pixelId) {
        const pixel = await import('react-facebook-pixel');
        pixel.default.init(pixelId, {}, options);
        pixel.default.pageView();
      }
    };
    loadPixel();
  }, [pixelId]);

  return null;
};

export default withClient(FacebookPixel);
