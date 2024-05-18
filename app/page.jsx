"use client";
import React, { useState, useEffect } from 'react';
import Home from './Home'
const Page = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-upload.adsdep.com/url');
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setUrls(data);
        } else {
          throw new Error('Data is not an array');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p></p>;
  }

  if (error) {
    return <p> {error}</p>;
  }

  if (urls.length === 0) {
    return <p></p>;
  }





 
  return (
<>  

    <div className='xxxxx' >
    
    
        {urls.map((url, index) => (
          <li key={index} onClick={() => window.location.href = url.urlss}>
           
           
           <Home/>

           
           
            {url.urlss}
          </li>
        ))}
    
    </div>
 


</>
  );
};

export default Page;
