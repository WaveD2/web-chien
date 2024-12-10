import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AlbumCard from './albumCard';

const AlbumGrid = ({ albums, onAddAlbum }) => {
    return (
        <Container className="album-grid py-4">
            <h2 className="text-white text-center mb-4">QUẢN LÝ DỰ ÁN</h2>
            <Row>
                {albums.map((album, index) => (
                    <Col key={index} xs={6} md={4} lg={3} className="mb-4">
                        <AlbumCard image={album.image} title={album.title} />
                    </Col>
                ))}
                <Col xs={6} md={4} lg={3} className="mb-4">
                    <div
                        className="add-album d-flex align-items-center justify-content-center bg-secondary text-white rounded"
                        style={{ height: '200px', cursor: 'pointer' }}
                        onClick={onAddAlbum}
                    >
                        <h4>+ Tạo Album</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AlbumGrid;
