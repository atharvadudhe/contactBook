import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        note: "",
    });

    useEffect(() => {
        const fetchContact = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`);
            setFormData(res.data);
        } catch (err) {
            console.error("Error fetching contact:", err);
        }
        };
        fetchContact();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await axios.put(`${import.meta.env.VITE_API_URL}/${id}`, formData);
        alert("Contact updated successfully!");
        navigate("/home");
        } catch (err) {
        console.error("Error updating contact:", err);
        alert("Failed to update contact!");
        }
    };

    return (
        <div className="min-h-screen bg-[#fdfcf7] flex justify-center items-center px-4">
        <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-300 shadow-md rounded-lg p-8 w-full max-w-md"
        >
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            ✏️ Edit Contact
            </h1>

            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="w-full p-2 mb-3 border border-gray-400 rounded text-black"
            />

            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full p-2 mb-3 border border-gray-400 rounded text-black"
            />

            <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone"
            className="w-full p-2 mb-3 border border-gray-400 rounded text-black"
            />

            <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-2 mb-3 border border-gray-400 rounded text-black"
            />

            <input
            type="text"
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Note"
            className="w-full p-2 mb-3 border border-gray-400 rounded text-black"
            />

            <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-700 transition"
            >
            Update
            </button>
        </form>
        </div>
    );
};

export default EditContact;
