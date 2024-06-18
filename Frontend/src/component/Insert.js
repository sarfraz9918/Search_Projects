import React, { useState } from "react";
import axios from "axios";

const Insert = () => {
    const [input, setInput] = useState({});
    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
    }

    const display = () => {
        // validation
        const newErrors = {};
        let hasError = false;

        if (!input.rollno) {
            newErrors.rollno = "Roll number is required";
            hasError = true;
        }

        if (!input.name) {
            newErrors.name = "Name is required";
            hasError = true;
        }

        if (!input.city) {
            newErrors.city = "City is required";
            hasError = true;
        }

        if (!input.fees) {
            newErrors.fees = "Fees is required";
            hasError = true;
        }

        if (hasError) {
            setErrors(newErrors);
            return;
        }

        // If no errors, submit data
        let url = "http://localhost:8000/student/datasave";
        axios.post(url, input)
            .then((res) => {
                alert("Data submitted successfully");
                setInput({}); // Clear input fields
                setErrors({}); // Clear errors
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred while submitting data");
            });
    }

    return (
        <>
        <div className="cnter">
            <h1>Welcome to our insert page</h1>

            <label>Enter Rollno</label><br />
            <input type="text" name="rollno" value={input.rollno || ''} onChange={handleInput} />
            {errors.rollno && <div style={{ color: 'red' }}>{errors.rollno}</div>}
            <br />

            <label>Enter Name</label><br />
            <input type="text" name="name" value={input.name || ''} onChange={handleInput} />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
            <br />

            <label>Enter City</label><br />
            <input type="text" name="city" value={input.city || ''} onChange={handleInput} />
            {errors.city && <div style={{ color: 'red' }}>{errors.city}</div>}
            <br />

            <label>Enter Fees</label><br />
            <input type="text" name="fees" value={input.fees || ''} onChange={handleInput} />
            {errors.fees && <div style={{ color: 'red' }}>{errors.fees}</div>}
            <br />

            <button onClick={display}>Data Save</button>
            </div>
        </>
    );
}

export default Insert;
