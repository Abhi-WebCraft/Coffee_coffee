// components/VideoModal.js
import React from "react";

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative w-[80%] max-w-[800px] h-[450px] bg-white rounded-md overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center"
                >
                    ×
                </button>
                <iframe
                    width="100%"
                    height="100%"
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoModal;
