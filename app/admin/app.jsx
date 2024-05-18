import React, { useEffect, useState } from 'react';

export default function UploadPage() {
    const [files, setFiles] = useState([]);
    const [uploadedImages, setUploadedImages] = useState([]);

    useEffect(() => {
        fetch('/api/images')
            .then(response => response.json())
            .then(data => setUploadedImages(data))
            .catch(error => console.error('Error fetching images:', error));
    }, []);

    const handleUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        Array.from(files).forEach(file => {
            formData.append('files', file);
        });

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const result = await response.json();
                setUploadedImages(result);
            } else {
                console.error('Upload failed');
            }
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleUpload}>
                <input
                    type="file"
                    multiple
                    onChange={(e) => setFiles(e.target.files)}
                />
                <button type="submit">Upload</button>
            </form>
            <div className="uploaded-images">
                <h3>Uploaded Images</h3>
                <ul>
                    {uploadedImages.map(image => (
                        <li key={image.id}>
                            <img src={image.url} alt={image.filename} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
