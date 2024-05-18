'use client';

import Swal from 'sweetalert2';
import React, { useState } from 'react';

const UploadPage = () => { // ลบ async ที่ไม่จำเป็น
    const [files, setFiles] = useState([]); // กำหนดค่าเริ่มต้นเป็นอาร์เรย์ว่าง
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]); // เพิ่มการกำหนดค่า data

    const handleUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        for (let i = 0; i < event.target.files.length; i++) {
            formData.append('files', event.target.files[i]);
        }

        try {
            const response = await fetch('https://api-upload.adsdep.com/api/upload', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            setMessage(result.message);
            setFiles(result.data.uploadedFiles);

            // Fetch the uploaded files data to display in the list
            fetchUploadedFiles();
        } catch (error) {
            console.error('Error uploading files:', error);
            setMessage('Error uploading files');
        }
    };

    const fetchUploadedFiles = async () => {
        try {
            const response = await fetch('https://api-upload.adsdep.com/api/get');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching uploaded files:', error);
        }
    };

    // Fetch uploaded files on component mount
    React.useEffect(() => {
        fetchUploadedFiles();
    }, []);


    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://api-upload.adsdep.com/delete/${id}`, {
                method: 'DELETE'
            });

            const result = await response.json();
            setMessage(result.message);

            // Refresh the list of uploaded files
            fetchUploadedFiles();
        } catch (error) {
            console.error('Error deleting file:', error);
            setMessage('Error deleting file');
        }
    };






    return (
        <div className="container text-center mt-5">
            <h1>Upload Files</h1>
            <form onSubmit={handleUpload}>
                <input type="file" multiple onChange={handleUpload} />
                <button type="submit" className="btn btn-primary">Upload</button>
            </form>
            {message && <p>{message}</p>}
            {files && files.length > 0 && (
                <div>
                    <h2>Uploaded files:</h2>
                    <ul>
                        {files.map((file, index) => (
                            <li key={index}>{file.filename}</li>
                        ))}
                    </ul>
                </div>
            )}

            {data.length > 0 && (
                <div>
                       <div className="flexbox">
                    {data.map((item, index) => (
                        <div key={index} tabIndex={0}>
                           
                           
                          
                          
                        
                                
                                <div className="item">  
                              
                                <img src={`https://api-upload.adsdep.com/${item.url}`} alt={item.filename} /> 

                               
                                </div>  {item.id}

                                <button onClick={() => handleDelete(item.id)} className="btn">Delete</button>

                                </div>
                  
                           



                          
              
                       
                    ))}
                </div>
                </div>
            )}
        </div>
    );
};

export default UploadPage;
