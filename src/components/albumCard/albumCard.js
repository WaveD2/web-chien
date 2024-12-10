import React from 'react';
import { Card } from 'react-bootstrap';

const AlbumCard = ({ image, title }) => {
    return (
        <Card className="album-card bg-dark text-white shadow">
            <Card.Img variant="top" src={image} className="album-image" />
            <Card.Body>
                <Card.Title className="text-center">{title}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default AlbumCard;
