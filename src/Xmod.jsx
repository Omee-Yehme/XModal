import { useState } from "react";
import "./App.css"


export default function Xmod() {
    const [click, setclick] = useState(false)

    const hclick = () => {
        setclick(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const dob = document.getElementById("dob").value;

        if (!email.includes('@') || !email.includes('.')) {
            alert("Invalid email. Please check your email address.");
            return;
        }

        if (phone.length !== 10 || isNaN(phone)) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return;
        }

        if (dob === "") {
            alert("Invalid phone number. Please enter a 10-digit phone number."); // as per your weird requirement wording
            return;
        }


        alert("Form submitted successfully!");
    };



    return (

        <div className="modal">
            <h1>User Details Modal</h1>
            <button onClick={hclick}>Open Form</button>
            {click && (
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <h2>Fill Details</h2>
                        Username: <input type="text" id="username" />
                        Email Address: <input type="email" id="email" required />
                        Phone Number: <input type="number" id="phone" required />
                        Date of Birth: <input type="date" id="dob" required />
                        <button className="submit-button">Submit</button>
                    </form>
                </div>
            )}

        </div>
    )
}