import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { Modal, Button, FormControl } from 'react-bootstrap';
import Product from './Product';
import AddForm from './AddForm';
import Pagination from './Pagination';
import AddIcon from '@material-ui/icons/Add';
import SearchBar from "material-ui-search-bar";

const ProductList = ({ product }) => {

    const { sortedProducts } = useContext(ProductContext);
    const [show, setShow] = useState(false)
    // const [productsOfPage, setProductsOfPage] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [count, setCount] = useState(0);
    const [currentProducts, setCurrentProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(3);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [sortedProducts])

    useEffect(() => {
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
        setCurrentProducts(currentProducts)
    }, [currentPage,])




    return (
        <>
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>{sortedProducts.length} <b>Products</b></h2>
                </div>
                <div className="col-sm-4">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => { setSearchTerm(e.target.value); }} />
                </div>
                <div className="col-sm-2">
                    <Button onClick={handleShow} className="btn btn-primary" data-toggle="modal"><AddIcon /></Button>
                </div>
            </div>
        </div>


        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Product ID</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    currentProducts.filter((val) => {
                        if (searchTerm == "") {
                            return val;
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val;
                        }
                    })
                        .map(product => (
                            <tr key={product.id}>
                                <Product product={product} />
                            </tr>
                        ))
                }
            </tbody>
        </table>

        <Pagination pages={Math.ceil(sortedProducts.length / productsPerPage)} setCurrentPage={setCurrentPage} />

        {/* <Pagination totalItems={products.length} itemsPerPage={2} currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Add Product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddForm />
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

export default ProductList;