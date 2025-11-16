import React, { useState } from "react";
import { Card, Message } from "rsuite";
import PhotoModal from "./PhotoModal.jsx";

const PhotoGallery = ({ photos, loading, error }) => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleOpen = (i) => { setCurrentIndex(i); setOpen(true); };
    const handleClose = () => { setOpen(false); setCurrentIndex(null); };
    const onNext = () => photos.length && setCurrentIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
    const onPrev = () => photos.length && setCurrentIndex((i) => (i === 0 ? photos.length - 1 : i - 1));

    if (error) {
        return <Message type="error" bordered showIcon>{error}</Message>;
    }

    if (!photos.length && !loading) {
        return (
            <div className="empty-wrap">
                <div className="empty-card">
                    <div className="empty-icon">📁</div>
                    <h5 className="empty-title">No album selected</h5>
                    <p className="empty-subtitle">Choose an album on the left to view photos.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="gallery-grid">
                {photos.map((photo, index) => (
                    <Card
                        key={photo.id}
                        className="photo-card"
                        onClick={() => handleOpen(index)}
                        bordered
                        shaded
                    >
                        <img src={photo.thumbnailUrl} alt={photo.title} className="photo-thumb" />
                    </Card>
                ))}
            </div>

            <PhotoModal
                open={open}
                photo={currentIndex !== null ? photos[currentIndex] : null}
                onPrev={onPrev}
                onNext={onNext}
                onClose={handleClose}
            />
        </>
    );
};

export default PhotoGallery;
