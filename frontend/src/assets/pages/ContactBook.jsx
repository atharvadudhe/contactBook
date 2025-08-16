import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactBook = () => {
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}`);
                console.log(res.data);
                setContacts(res.data);
            } catch (err) {
                console.error("Error fetching contacts:", err);
            }
        };
        fetchContacts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
            setContacts(contacts.filter((c) => c._id !== id));
        } catch (err) {
            console.error("Error deleting contact:", err);
        }
    };

    return (
        <div className="min-h-screen bg-[#fdfcf7] px-6 py-8 font-serif">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 text-center flex-1">
                    📒 My Contacts
                </h1>
                <button
                    onClick={() => navigate("/add")}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition ml-4"
                >
                    ➕ Add Contact
                </button>
            </div>

            {contacts.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {contacts.map((c) => (
                        <div
                            key={c._id}
                            className="bg-white border border-gray-300 shadow-sm rounded-md p-5 hover:shadow-md transition"
                        >
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                {c.name}
                            </h2>
                            <p className="text-gray-700">
                                <span className="font-medium">📧 Email:</span> {c.email}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-medium">📞 Phone:</span> {c.phone}
                            </p>
                            {c.address && (
                                <p className="text-gray-700">
                                    <span className="font-medium">🏠 Address:</span> {c.address}
                                </p>
                            )}
                            {c.note && (
                                <p className="text-gray-700 italic mt-1">"{c.note}"</p>
                            )}
                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={() => navigate(`/edit/${c._id}`)}
                                    className="bg-gray-900 text-white px-4 py-1 rounded hover:bg-gray-700 transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(c._id)}
                                    className="border border-red-600 text-red-600 px-4 py-1 rounded hover:bg-red-600 hover:text-white transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">No contacts found</p>
            )}
        </div>
    );
};

export default ContactBook;
