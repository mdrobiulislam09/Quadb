import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Details.css';
import { Col, Form, Row } from 'react-bootstrap';

const Details = () => {
    const { id, summary, image, name, schedule, runtime } = useLoaderData();
    const htmlText = summary;
    const divElement = document.createElement('div');
    divElement.innerHTML = htmlText;
    const textWithoutTags = divElement.innerText;
    // console.log(htmlText)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container mx-auto mt-4 d-md-flex justify-content-center text-center">
            <div className='carge ms-5'>
                <img src={image.original} alt="phot" />
            </div>

            <div className='ms-5 carge'>
                <div className='text-light'>
                    <div className='text-warning fs-4'>{name}</div>
                    <div className='text-danger'>Duration: {runtime} minit</div>
                    <div>{textWithoutTags}</div>
                </div>
                <br></br>
                <>
                    <Button variant="primary" onClick={handleShow}>
                        Booking Now
                    </Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Movie! Ticket</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form className='m-auto' >
                                <div className='d-flex justify-content-around'>
                                    <p >Name</p>
                                    <div >:</div>
                                    <input type="text" name='model' disabled value={name} />
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <p>Days</p>
                                    <div className=''>:</div>
                                    <input className='' type="text" name='user' disabled value={schedule.days[0]} />
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <p>Time</p>
                                    <div>:</div>
                                    <input type="text" name='user' disabled value={schedule.time} />
                                </div>
                                <br />
                                <br />
                                <div className='text-center'>
                                    <input type="submit" value="Buy" className="btn btn-success" data-bs-dismiss="modal" />
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>
                </>
            </div>
        </div>
    );
};

export default Details;