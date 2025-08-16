import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    note: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await axios.post(`${import.meta.env.VITE_API_URL}`, formData);
      alert("Contact Added Successfully!");
      navigate("/home");
    } catch (err) {
      console.log(err);
      alert("Failed to add the contact!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfcf7] font-serif px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-gray-300 shadow-sm rounded-md p-8 space-y-4"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          📒 Add New Contact
        </h1>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          required
          placeholder="Full Name"
          className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 bg-[#faf9f4] text-black"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          required
          placeholder="Email Address"
          className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 bg-[#faf9f4] text-black"
        />
        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          required
          placeholder="Phone Number"
          className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 bg-[#faf9f4] text-black"
        />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          placeholder="Address"
          className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 bg-[#faf9f4] text-black"
        />
        <textarea
          name="note"
          onChange={handleChange}
          placeholder="Notes"
          className="w-full border border-gray-400 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 bg-[#faf9f4] text-black h-24 resize-none"
        ></textarea>
        <div className="flex justify-between items-center mt-4">
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
          >
            Add Contact
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="border border-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
