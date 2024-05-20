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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (urls.length === 0) {
    return <p>No URLs found.</p>;
  }

  return (
<>  

  




{urls.map((url, index) => (
          <div key={index} onClick={() => window.location.href = url.urlss}>
           
      
         
          
           <Home/>
         
          </div>
        ))}


          <div className="all">
        {urls.map((url, index) => (
          <div className="web" key={index} onClick={() => window.location.href = url.urlss}>
           
      
         
          
            <button className="btnsx">
              สมัครAuto
            </button>
         
          </div>
        ))}


             
          

         
       




        {urls.map((url, index) => (
          <div className="line" key={index} onClick={() => window.location.href = url.name}>
           
            <button className="btnx">
              ติดต่อเรา
            </button>
          </div>
      
          
        
         
        ))}
    
    </div>
 


</>
  );
};

export default Page;




