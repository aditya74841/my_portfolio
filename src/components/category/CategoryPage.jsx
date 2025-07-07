import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Edit2, Trash2, Plus, FolderOpen, Search } from "lucide-react";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const BASE_URL = `${process.env.REACT_APP_SERVER_URL}/category`;

  // Fetch all categories
  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}?page=1&limit=100`);
      setCategories(res.data.data.docs);
    } catch (err) {
      toast.error("Failed to fetch categories");
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.name.trim()) {
      toast.error("Category name is required");
      return;
    }

    try {
      setLoading(true);
      
      if (editId) {
        await axios.put(`${BASE_URL}/${editId}`, form);
        toast.success("Category updated successfully");
      } else {
        await axios.post(BASE_URL, form);
        toast.success("Category created successfully");
      }

      setForm({ name: "", description: "" });
      setEditId(null);
      fetchCategories();
    } catch (err) {
      toast.error(editId ? "Failed to update category" : "Failed to create category");
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Edit button click
  const handleEdit = (cat) => {
    setForm({ name: cat.name, description: cat.description || "" });
    setEditId(cat._id);
  };

  // Cancel edit
  const handleCancel = () => {
    setForm({ name: "", description: "" });
    setEditId(null);
  };

  // Delete category
  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) return;
    
    try {
      setLoading(true);
      await axios.delete(`${BASE_URL}/${id}`);
      toast.success("Category deleted successfully");
      fetchCategories();
    } catch (err) {
      toast.error("Failed to delete category");
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter categories based on search term
  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (cat.description && cat.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FolderOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Category Management</h1>
          </div>
          <p className="text-gray-600">Create, edit, and manage your categories</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                {editId ? "Edit Category" : "Add New Category"}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter category name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-black"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="Enter category description"
                    value={form.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-black"
                  />
                </div>
                
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Saving..." : (editId ? "Update" : "Create")}
                  </button>
                  
                  {editId && (
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Categories List Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {/* Search Bar */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search categories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-black"
                  />
                </div>
              </div>

              {/* Categories Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {loading ? (
                      <tr>
                        <td colSpan={3} className="px-6 py-8 text-center">
                          <div className="flex justify-center items-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                            <span className="ml-2 text-gray-500">Loading categories...</span>
                          </div>
                        </td>
                      </tr>
                    ) : filteredCategories.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                          {searchTerm ? "No categories found matching your search." : "No categories found. Create your first category!"}
                        </td>
                      </tr>
                    ) : (
                      filteredCategories.map((cat) => (
                        <tr key={cat._id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{cat.name}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-gray-500 max-w-xs truncate">
                              {cat.description || "No description"}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="flex justify-center gap-2">
                              <button
                                onClick={() => handleEdit(cat)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                title="Edit category"
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(cat._id, cat.name)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                                title="Delete category"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Stats Footer */}
              {!loading && filteredCategories.length > 0 && (
                <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    Showing {filteredCategories.length} of {categories.length} categories
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;


// import React, { useCallback, useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// // Replace with your server URL

// const CategoryPage = () => {
//   const [categories, setCategories] = useState([]);
//   const [form, setForm] = useState({ name: "", description: "" });
//   const [editId, setEditId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const BASE_URL = `${process.env.REACT_APP_SERVER_URL}/category`;

//   //   console.log("THE BASE URL IS",  process.env.REACT_APP_SERVER_URL);
//   console.log("THE BASE URL IS", BASE_URL);

//   // Fetch all categories

//   const fetchCategories = useCallback(async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${BASE_URL}?page=1&limit=100`);
//       setCategories(res.data.data.docs);
//     } catch (err) {
//       console.log(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, [BASE_URL]);
  
//   // Handle form field changes
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Handle form submission (create or update)
//   const handleSubmit = async () => {
//     try {
//       if (!form.name.trim()) {
//         toast.error("Name is required");
//         return;
//       }

//       if (editId) {
//         await axios.put(`${BASE_URL}/${editId}`, form);
//         toast.success("Category updated");
//       } else {
//         await axios.post(BASE_URL, form);
//         toast.success("Category created");
//       }

//       setForm({ name: "", description: "" });
//       setEditId(null);
//       fetchCategories();
//     } catch (err) {
//       toast.error("Error saving category");
//       console.log(err.message);
//     }
//   };

//   // Edit button click
//   const handleEdit = (cat) => {
//     setForm({ name: cat.name, description: cat.description });
//     setEditId(cat._id);
//   };

//   // Delete category
//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this category?")) return;
//     try {
//       await axios.delete(`${BASE_URL}/${id}`);
//       fetchCategories();
//     } catch {
//       toast.error("Failed to delete");
      
//     }
//   };
//   // eslint-disable-next-line

//   useEffect(() => {
//     fetchCategories();
//   }, [fetchCategories]);
//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">📁 Manage Categories</h1>

//       {/* Create / Edit Form */}
//       <div className="bg-white p-4 border rounded mb-6">
//         <input
//           type="text"
//           name="name"
//           placeholder="Category Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full p-2 border mb-2 text-black"
//         />
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//           className="w-full p-2 border mb-2 text-black"
//         />
//         <div className="flex gap-2">
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//           >
//             {editId ? "Update" : "Create"}
//           </button>
//           {editId && (
//             <button
//               onClick={() => {
//                 setForm({ name: "", description: "" });
//                 setEditId(null);
//               }}
//               className="px-4 py-2 border rounded"
//             >
//               Cancel
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Category Table */}
//       <div className="bg-white p-4 border rounded">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="border-b text-left">
//               <th className="p-2 text-black">Name</th>
//               <th className="p-2 text-black">Description</th>
//               <th className="p-2 text-black">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan={3} className="p-4 text-center text-black">
//                   Loading...
//                 </td>
//               </tr>
//             ) : categories.length === 0 ? (
//               <tr>
//                 <td colSpan={3} className="p-4 text-center text-black">
//                   No categories found.
//                 </td>
//               </tr>
//             ) : (
//               categories.map((cat) => (
//                 <tr key={cat._id} className="border-b">
//                   <td className="p-2 text-black">{cat.name}</td>
//                   <td className="p-2 text-black">{cat.description}</td>
//                   <td className="p-2 flex gap-2">
//                     <button
//                       onClick={() => handleEdit(cat)}
//                       className="px-2 py-1 bg-yellow-500 text-white rounded"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(cat._id)}
//                       className="px-2 py-1 bg-red-600 text-white rounded"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;

// // import React from 'react'

// // export const CategoryPage = () => {
// //   return (
// //     <div>CategoryPage</div>
// //   )
// // }
