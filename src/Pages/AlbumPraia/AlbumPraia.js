import React, { useState } from 'react';
import AlbumSlot from '../../Components/AlbumSlot/AlbumSlot';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

// Use require.context to import all images in the praia folder
const imageContext = require.context('../../Assets/img/Photos/Praia', false, /\.(jpg|jpeg|png|gif)$/);

function AlbumPraia() {
    const imagesList = [];

    imageContext.keys().forEach(key => {
        imagesList.push(imageContext(key));
    });

    const pageSize = 8;
    const totalPages = imageContext.keys().length % pageSize > 0 ? imageContext.keys().length / pageSize + 1 : imageContext.keys().length / pageSize;

    const [pagination, setPagination] = useState({
        imagesToShowMin: 0,
        imagesToShowMax: pageSize,
        currentPage: 1
    });

    function nextPage() {
        setPagination(prevState => {
            if (prevState.currentPage + 1 <= totalPages) {
                return {
                    imagesToShowMin: prevState.imagesToShowMin + pageSize,
                    imagesToShowMax: prevState.imagesToShowMax + pageSize,
                    currentPage: prevState.currentPage + 1,
                };
            } else {
                return prevState;
            }
        });
    }


    function previousPage() {
        if (pagination.currentPage === 1) {
            return;
        }
        setPagination(prevState => ({
            ...prevState,
            imagesToShowMin: prevState.imagesToShowMin - pageSize >= 0 ? prevState.imagesToShowMin - pageSize : 0,
            imagesToShowMax: prevState.imagesToShowMax - pageSize,
            currentPage: prevState.currentPage - 1
        }));
    }


    return (
        <>
            <Row>
                {imagesList.slice(pagination.imagesToShowMin, pagination.imagesToShowMax).map((image, index) => (
                    <Col id={'slot-' + index} sm={12} md={6} lg={3}>
                        <AlbumSlot props={{ imagePath: image, imageSubTitle: 'test' }} />
                    </Col>
                ))}
            </Row>
            <Row>
                <Col sm={12}>
                    <center>
                        <p>Page: {pagination.currentPage} of {totalPages | 0}</p>
                        <Button onClick={previousPage}>Previous</Button>
                        &nbsp;
                        <Button onClick={nextPage}>Next</Button>
                    </center>
                </Col>
            </Row>
        </>
    );
}

export default AlbumPraia;
