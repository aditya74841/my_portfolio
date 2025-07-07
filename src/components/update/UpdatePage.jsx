import React, { useEffect, useState } from "react";
import axios from "axios";

// Backend endpoints
const BASE_URL = "http://localhost:8080/api/v1/update";
const CATEGORY_URL = "http://localhost:8080/api/v1/category";

const UpdatePage = () => {
  const [updates, setUpdates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch updates
  const fetchUpdates = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}?page=1&limit=100`);
      setUpdates(res.data.data.docs || res.data.data);
    } catch (err) {
      console.error("Error fetching updates:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${CATEGORY_URL}?page=1&limit=100`);
      setCategories(res.data.data.docs || res.data.data);
    } catch (err) {
      console.error("Error fetching categories:", err.message);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (!form.title.trim()) return alert("Title is required");
      if (!form.category) return alert("Category is required");

      if (editId) {
        await axios.put(`${BASE_URL}/${editId}`, form);
        alert("Update modified");
      } else {
        await axios.post(BASE_URL, form);
        alert("Update created");
      }

      setForm({ title: "", description: "", category: "" });
      setEditId(null);
      fetchUpdates();
    } catch (err) {
      console.error("Error saving update:", err.message);
      alert("Failed to save update.");
    }
  };

  const handleEdit = (update) => {
    setForm({
      title: update.title || update.name,
      description: update.description || "",
      category: update.createdBy?._id || update.createdBy || "",
    });
    setEditId(update._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this update?")) return;
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      fetchUpdates();
    } catch (err) {
      alert("Failed to delete update");
    }
  };

  useEffect(() => {
    fetchUpdates();
    fetchCategories();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📁 Manage Updates</h1>

      {/* Form */}
      <div className="bg-white p-4 border rounded mb-6">
        <input
          type="text"
          name="title"
          placeholder="Update Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border mb-2 text-black"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border mb-2 text-black"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border mb-2 text-black"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <div className="flex gap-2">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            {editId ? "Update" : "Create"}
          </button>
          {editId && (
            <button
              onClick={() => {
                setForm({ title: "", description: "", category: "" });
                setEditId(null);
              }}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Update Table */}
      <div className="bg-white p-4 border rounded">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left">
              <th className="p-2 text-black">Title</th>
              <th className="p-2 text-black">Category</th>
              <th className="p-2 text-black">Description</th>
              <th className="p-2 text-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="p-4 text-center text-black">
                  Loading...
                </td>
              </tr>
            ) : updates.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-4 text-center text-black">
                  No updates found.
                </td>
              </tr>
            ) : (
              updates.map((update) => (
                <tr key={update._id} className="border-b">
                  <td className="p-2 text-black">
                    {update.title || update.name}
                  </td>
                  <td className="p-2 text-black">
                    {update.createdBy?.name || "N/A"}
                  </td>
                  <td className="p-2 text-black">{update.description}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(update)}
                      className="px-2 py-1 bg-yellow-500 text-white rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(update._id)}
                      className="px-2 py-1 bg-red-600 text-white rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdatePage;
