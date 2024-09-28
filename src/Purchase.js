import React, { useState } from 'react';
import './Purchase.css';

const Purchase = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        quantity: 1,
        paymentMethod: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validate = () => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Name is required.';
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            errors.email = 'Invalid email address.';
        }
        if (!formData.address.trim()) {
            errors.address = 'Shipping address is required.';
        }
        if (isNaN(formData.quantity) || formData.quantity <= 0) {
            errors.quantity = 'Quantity must be a positive number.';
        }
        if (!formData.paymentMethod) {
            errors.paymentMethod = 'Please select a payment method.';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        alert('Purchase successful!');
        // Proceed with the purchase logic here
    };

    return (
        <div className="container">
            <h2>Laptop Purchase Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="address">Shipping Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    ></textarea>
                    {errors.address && <span className="error">{errors.address}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        min="1"
                    />
                    {errors.quantity && <span className="error">{errors.quantity}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="payment-method">Payment Method:</label>
                    <select
                        id="payment-method"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                    >
                        <option value="">Select Payment Method</option>
                        <option value="credit-card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                    {errors.paymentMethod && <span className="error">{errors.paymentMethod}</span>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Purchase;
