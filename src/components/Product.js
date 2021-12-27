import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { Modal, Button } from 'react-bootstrap';
import EditForm from './EditForm';

const Product = ({ product }) => {

    const { deleteProduct } = useContext(ProductContext);

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [product])

    return (
        <>
        <td>{product.name}</td>
        <td>{product.productId}</td>
        <td>{product.description}</td>
        <td>{product.status}</td>
        <td>{product.price}</td>
        <td>{product.discount}</td>
        <td>
            <button onClick={handleShow} className="btn text-primary btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i> </button>
            <button onClick={() => deleteProduct(product.id)} className="btn text-primary btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i> </button>
        </td>


        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Edit Product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditForm theProduct={product} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

        </>
    )
}

export default Product;