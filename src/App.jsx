import React, { useState, useEffect } from "react";
import { Container, Sidebar, Content } from "rsuite";
import SidebarAlbum from "./components/SidebarAlbum";
import PhotoGallery from "./components/PhotoGallery";

const App = () => {
    const [albums, setAlbums] = useState([]);
    const [albumLoading, setAlbumLoading] = useState(false);
    const [albumError, setAlbumError] = useState(null);
    const [selectedAlbumId, setSelectedAlbumId] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [photosLoading, setPhotosLoading] = useState(false);
    const [photosError, setPhotosError] = useState(null);

    const fetchAlbums = async (query = "") => {
        setAlbumLoading(true);
        setAlbumError(null);
        try {
            const url = new URL("https://jsonplaceholder.typicode.com/albums");
            url.searchParams.set("_limit", "10");
            if (query) url.searchParams.set("title_like", query);

            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            setAlbums(data);
        } catch (e) {
            setAlbums([]);
            setAlbumError("Failed to load albums. Please try again.");
            console.error(e);
        } finally {
            setAlbumLoading(false);
        }
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    const handleSearch = (query) => fetchAlbums(query);

    const handleSelectAlbum = (id) => {
        if (id === selectedAlbumId) return;
        setSelectedAlbumId(id);
    };

    useEffect(() => {
        if (!selectedAlbumId) return;
        const fetchPhotos = async () => {
            setPhotosLoading(true);
            setPhotosError(null);
            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbumId}&_limit=10`
                );
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                let data = await res.json();
                data = data.map((photo) => ({
                    ...photo,
                    thumbnailUrl: `https://picsum.photos/seed/${photo.id}/200/150`,
                    url: `https://picsum.photos/seed/${photo.id}/1000/800`,
                }));
                setPhotos(data);
            } catch (e) {
                setPhotos([]);
                setPhotosError("Failed to load photos. Please try again.");
                console.error(e);
            } finally {
                setPhotosLoading(false);
            }
        };
        fetchPhotos();
    }, [selectedAlbumId]);

    return (
        <Container className="app-container">
            <Sidebar className="app-sidebar" width={260}>
                <SidebarAlbum
                    listOfAlbums={albums}
                    loading={albumLoading}
                    error={albumError}
                    onSearch={handleSearch}
                    onSelect={handleSelectAlbum}
                    selectedAlbumId={selectedAlbumId}
                />
            </Sidebar>

            <Content className="gallery-content">
                <PhotoGallery
                    photos={photos}
                    loading={photosLoading}
                    error={photosError}
                />
            </Content>
        </Container>
    );
};

export default App;
