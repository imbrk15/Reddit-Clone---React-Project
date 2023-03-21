import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../../styles/addpost.css'

export default function Newpost(props) {
   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='btn-newpost'>
                <Button className='btn-post' variant="primary" onClick={handleShow}>
                    Add new post
                </Button>
                <Modal show={show} onHide={handleClose}>               
                    <Modal.Header closeButton>
                        <Modal.Title>Add new post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Post title</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e) => props.setData(e.target.value)} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={(e) => {
                            handleClose();
                            props.save();
                        }}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}
