import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ProductContext } from '../contexts/ProductContext';


const EditForm = ({ theProduct }) => {

    const id = theProduct.id;

    const [name, setName] = useState(theProduct.name);
    const [productId, setProductId] = useState(theProduct.productId);
    const [description, setDescription] = useState(theProduct.description);
    const [status, setStatus] = useState(theProduct.status);
    const [price, setPrice] = useState(theProduct.price);
    const [discount, setDiscount] = useState(theProduct.discount);

    const { updateProduct } = useContext(ProductContext);

    const updatedProduct = { id, name, productId, description, status, price, discount }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(id, updatedProduct)
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="text" placeholder="Product Name *" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <br />

            <Form.Group>
                <Form.Control type="number" placeholder="Product ID *" name="productId" value={productId} onChange={(e) => setProductId(e.target.value)} required />
            </Form.Group>
            <br />

            <Form.Group>
                <Form.Control as="textarea" placeholder="Product Description *" rows={3} name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            <br />

            <div class="form-group">
                <select class="form-control" id="sel1" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>A</option>
                    <option>I</option>
                </select>
            </div>

            <br />
            <Form.Group>
                <Form.Control type="text" placeholder="Product Price *" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </Form.Group>
            <br />

            <Form.Group>
                <Form.Control type="text" placeholder="Discount Rate *" name="discount" value={discount} onChange={(e) => setDiscount(e.target.value)} />
            </Form.Group>
            <br />

            <Button variant="success" type="submit" block>
                Edit Product
            </Button>

        </Form>

    )
}

export default EditForm;