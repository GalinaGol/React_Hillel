import React, { useEffect, useState } from 'react';
import { Modal, Loader, IconButton } from 'rsuite';
import CloseIcon from '@rsuite/icons/Close';
import ArrowLeftIcon from '@rsuite/icons/ArrowLeftLine';
import ArrowRightIcon from '@rsuite/icons/ArrowRightLine';

function PhotoModal({ open, photo, onPrev, onNext, onClose }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => { if (open) setLoading(true); }, [open, photo]);

    if (!open) return null;

    return (
        <Modal open={open} size="lg" onClose={onClose}>
            <Modal.Body
                style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 0,
                    minHeight: 360
                }}
            >
                <IconButton
                    icon={<CloseIcon />}
                    onClick={onClose}
                    appearance="subtle"
                    circle
                    size="lg"
                    aria-label="Close"
                    style={{ position: 'absolute', top: 0, right: 8, zIndex: 2 }}
                />

                <IconButton
                    icon={<ArrowLeftIcon />}
                    onClick={onPrev}
                    appearance="subtle"
                    circle
                    size="lg"
                    aria-label="Previous"
                    disabled={!photo || loading}
                    style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}
                />
                <IconButton
                    icon={<ArrowRightIcon />}
                    onClick={onNext}
                    appearance="subtle"
                    circle
                    size="lg"
                    aria-label="Next"
                    disabled={!photo || loading}
                    style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}
                />

                {(!photo || loading) && <Loader content="Loading photo..." />}

                {photo && (
                    <img
                        src={photo.url}
                        alt={photo.title}
                        style={{ maxWidth: '100%', maxHeight: '70vh', display: loading ? 'none' : 'block' }}
                        onLoad={() => setLoading(false)}
                        onError={() => setLoading(false)}
                    />
                )}
            </Modal.Body>
        </Modal>
    );
}

export default PhotoModal;
