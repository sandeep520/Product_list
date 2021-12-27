import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ProductContext } from '../contexts/ProductContext';
import Dropdown from 'react-bootstrap/Dropdown';


const AddForm = () => {

    const { addProduct } = useContext(ProductContext);
    const [newProduct, setNewProduct] = useState({
        name: '', productId: '', description: '', status: '', price: '', discount: ''
    });

    const onInputChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
    }
    const { name, productId, description, status, price, discount } = newProduct;

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(name, productId, description, status, price, discount);
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="text" placeholder="Product Name *" name="name" value={name} onChange={(e) => onInputChange(e)} required />
            </Form.Group>
            <br />

            <Form.Group>
                <Form.Control type="number" placeholder="Product ID *" name="productId" value={productId} onChange={(e) => onInputChange(e)} required />
            </Form.Group>
            <br />
            
            <Form.Group>
                <Form.Control as="textarea" placeholder="Product Description *" rows={3} name="description" value={description} onChange={(e) => onInputChange(e)} />
            </Form.Group>
            <br />

            <div class="form-group">
                <select class="form-control" id="sel1" name="status" value={status} onChange={(e) => onInputChange(e)}>
                    <option>A</option>
                    <option>I</option>
                </select>
            </div>

            <br />
            <Form.Group>
                <Form.Control type="text" placeholder="Product Price *" name="price" value={price} onChange={(e) => onInputChange(e)} required />
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Control type="text" placeholder="Discount Rate *" name="discount" value={discount} onChange={(e) => onInputChange(e)} required />
            </Form.Group>
            <br />

            <Button variant="primary" type="submit" block>
                Add New Product
            </Button>

        </Form>

    )
}

export default AddForm;