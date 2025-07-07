import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

// Replace with your server URL

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const BASE_URL = `${process.env.REACT_APP_SERVER_URL}/category`;

  //   console.log("THE BASE URL IS",  process.env.REACT_APP_SERVER_URL);
  console.log("THE BASE URL IS", BASE_URL);

  // Fetch all categories

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}?page=1&limit=100`);
      setCategories(res.data.data.docs);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }, [BASE_URL]);
  
  // Handle form field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission (create or update)
  const handleSubmit = async () => {
    try {
      if (!form.name.trim()) {
        toast.error("Name is required");
        return;
      }

      if (editId) {
        await axios.put(`${BASE_URL}/${editId}`, form);
        toast.success("Category updated");
      } else {
        await axios.post(BASE_URL, form);
        toast.success("Category created");
      }

      setForm({ name: "", description: "" });
      setEditId(null);
      fetchCategories();
    } catch (err) {
      toast.error("Error saving category");
      console.log(err.message);
    }
  };

  // Edit button click
  const handleEdit = (cat) => {
    setForm({ name: cat.name, description: cat.description });
    setEditId(cat._id);
  };

  // Delete category
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      fetchCategories();
    } catch {
      toast.error("Failed to delete");
      
    }
  };
  // eslint-disable-next-line

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📁 Manage Categories</h1>

      {/* Create / Edit Form */}
      <div className="bg-white p-4 border rounded mb-6">
        <input
          type="text"
          name="name"
          placeholder="Category Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border mb-2 text-black"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border mb-2 text-black"
        />
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
                setForm({ name: "", description: "" });
                setEditId(null);
              }}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Category Table */}
      <div className="bg-white p-4 border rounded">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left">
              <th className="p-2 text-black">Name</th>
              <th className="p-2 text-black">Description</th>
              <th className="p-2 text-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={3} className="p-4 text-center text-black">
                  Loading...
                </td>
              </tr>
            ) : categories.length === 0 ? (
              <tr>
                <td colSpan={3} className="p-4 text-center text-black">
                  No categories found.
                </td>
              </tr>
            ) : (
              categories.map((cat) => (
                <tr key={cat._id} className="border-b">
                  <td className="p-2 text-black">{cat.name}</td>
                  <td className="p-2 text-black">{cat.description}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(cat)}
                      className="px-2 py-1 bg-yellow-500 text-white rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(cat._id)}
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

export default CategoryPage;

// import React from 'react'

// export const CategoryPage = () => {
//   return (
//     <div>CategoryPage</div>
//   )
// }
