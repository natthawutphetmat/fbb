"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [urls, setUrls] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://api-upload.adsdep.com/api/get');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await res.json();
        setData(result);
        // Extract URLs for the select dropdown
        const urlsExtracted = result.map(item => ({
          id: item.id,
          url: `https://api-upload.adsdep.com/${item.url}`
        }));
        setUrls(urlsExtracted);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, []);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <>
      {urls.length > 0 ? (
        <>
          
        </>
      ) : (
        <p></p>
      )}

      <div className='flexboxs'>
        {data.map((item) => (
          <div
            key={item.id}
            tabIndex={0}
            onClick={() => {
              if (item.urlss) {
                window.location.href = item.urlss;
              }
            }}
          >
            <div className="items">
              <Image 
                src={`https://api-upload.adsdep.com/${item.url}`} 
                width={400} 
                height={400} 
                alt={item.filename} 
                className="imge" 
              />
            </div>
          </div>
        ))}

       
      </div>
    </>
  );
}

export default Home;
