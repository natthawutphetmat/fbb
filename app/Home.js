"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Page = () => {
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
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, []);




  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const Clickto = () => {
    if (url) {
      window.location.href = url;
    } else {
      alert("Please enter a valid URL");
    }
  };

  return (
    <>
      {urls.length > 0 ? (
        <div>
          <select onChange={handleUrlChange} value={url}>
            <option value="">Select URL</option>
            {urls.map((item) => (
              <option key={item.id} value={item.url}>
                {item.url}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="form-control"
            placeholder="Enter URL"
            value={url}
            onChange={handleUrlChange}
          />
        </div>
      ) : (
        <p>Loading URLs...</p>
      )}

      <main>
        {data.map((item) => (
          <div
            key={item.id}
            tabIndex={0}
            onClick={() => {
              if (item.urlss) {
                window.location.href = item.urlss;
              } else {
                alert("URL is not available");
              }
            }}
          >
            <div className="containerimg">
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
        <button onClick={Clickto} className="btns">
          สมัครเลย
        </button>
      </main>
    </>
  );
}

export default Page;
