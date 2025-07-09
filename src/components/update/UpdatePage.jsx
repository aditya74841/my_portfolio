import React, { useEffect, useState, useCallback, useMemo } from "react";
import {
  Edit2,
  Trash2,
  Plus,
  FileText,
  Search,
  Filter,
  Calendar,
  Tag,
} from "lucide-react";
import {
  fetchUpdates,
  fetchCategories,
  createUpdate,
  updateUpdate,
  deleteUpdate,
} from "./api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Fetch updates
  const getUpdates = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchUpdates();
      setUpdates(data.updates || []);
    } catch (err) {
      toast.error("Failed to fetch updates");
      console.error("Error fetching updates:", err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch categories
  const getCategories = useCallback(async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (err) {
      toast.error("Failed to fetch categories");
      console.error("Error fetching categories:", err.message);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!form.title.trim()) {
        toast.error("Title is required");
        return;
      }
      if (!form.category) {
        toast.error("Category is required");
        return;
      }
      try {
        setLoading(true);
        if (editId) {
          await updateUpdate(editId, form);
          toast.success("Update modified successfully");
        } else {
          await createUpdate(form);
          toast.success("Update created successfully");
        }
        setForm({ title: "", description: "", category: "" });
        setEditId(null);
        getUpdates();
      } catch (err) {
        toast.error(editId ? "Failed to update" : "Failed to create update");
        console.error("Error saving update:", err.message);
      } finally {
        setLoading(false);
      }
    },
    [editId, form, getUpdates]
  );

  const handleEdit = useCallback((update) => {
    setForm({
      title: update.title || update.name,
      description: update.description || "",
      category: update.createdBy?._id || update.createdBy || "",
    });
    setEditId(update._id);
  }, []);

  const handleCancel = useCallback(() => {
    setForm({ title: "", description: "", category: "" });
    setEditId(null);
  }, []);

  const handleDelete = useCallback(
    async (id, title) => {
      if (!window.confirm(`Are you sure you want to delete "${title}"?`))
        return;
      try {
        setLoading(true);
        await deleteUpdate(id);
        toast.success("Update deleted successfully");
        getUpdates();
      } catch (err) {
        toast.error("Failed to delete update");
        console.error("Error deleting update:", err.message);
      } finally {
        setLoading(false);
      }
    },
    [getUpdates]
  );

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  console.log("The updates is ", updates);
  // Filter and sort updates
  const filteredAndSortedUpdates = useMemo(() => {
    return updates
      .filter((update) => {
        const matchesSearch =
          (update.title || update.name || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          (update.description || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesCategory =
          !categoryFilter ||
          update.createdBy?._id === categoryFilter ||
          update.createdBy === categoryFilter;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "newest":
            return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
          case "oldest":
            return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
          case "title":
            return (a.title || a.name || "").localeCompare(
              b.title || b.name || ""
            );
          default:
            return 0;
        }
      });
  }, [updates, searchTerm, categoryFilter, sortBy]);

  useEffect(() => {
    getUpdates();
    getCategories();
  }, [getUpdates, getCategories]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 py-10">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-10 h-10 text-blue-700 drop-shadow" />
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Update Management
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Create, edit, and manage your updates and announcements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
                <Plus className="w-6 h-6" />
                {editId ? "Edit Update" : "Create New Update"}
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-1">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter update title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors text-lg bg-gray-50 text-black"
                    required
                  />
                </div>

                <div>
                  <label className="block text-base font-medium text-gray-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors text-lg bg-gray-50 text-black"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="Enter update description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors text-lg bg-gray-50 resize-none text-black"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2.5 px-6 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Saving..." : editId ? "Update" : "Create"}
                  </button>
                  {editId && (
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Updates List Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              {/* Filters and Search */}
              <div className="p-6 border-b border-gray-100 space-y-4 bg-gradient-to-r from-blue-50 to-white rounded-t-2xl">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search updates..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors text-base bg-gray-50 text-black"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="pl-12 pr-8 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors text-base bg-gray-50 text-black"
                      >
                        <option value="">All Categories</option>
                        {categories.map((cat) => (
                          <option key={cat._id} value={cat._id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors text-base bg-gray-50 text-black"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="title">Title A-Z</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Updates Table */}
              <div className="overflow-x-auto">
                <table className="w-full ">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="px-8 py-4 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-8 py-4 text-center text-xs font-bold text-blue-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {loading ? (
                      <tr>
                        <td colSpan={5} className="px-8 py-12 text-center">
                          <div className="flex justify-center items-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <span className="ml-3 text-gray-500 text-lg">
                              Loading updates...
                            </span>
                          </div>
                        </td>
                      </tr>
                    ) : filteredAndSortedUpdates.length === 0 ? (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-8 py-12 text-center text-gray-400 text-lg"
                        >
                          {searchTerm || categoryFilter
                            ? "No updates found matching your filters."
                            : "No updates found. Create your first update!"}
                        </td>
                      </tr>
                    ) : (
                      filteredAndSortedUpdates.map((update) => (
                        <tr
                          key={update._id}
                          className="hover:bg-blue-50/60 transition-colors"
                        >
                          <td className="px-8 py-5">
                            <div className="font-semibold text-gray-900 max-w-xs truncate text-base">
                              {update.title || update.name}
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center">
                              <Tag className="w-4 h-4 text-gray-400 mr-2" />
                              <span className="text-sm text-blue-700 bg-blue-100 px-3 py-1 rounded-full font-medium">
                                {update.createdBy?.name || "N/A"}
                              </span>
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="text-gray-500 max-w-xs truncate text-base">
                              {update.description || "No description"}
                            </div>
                          </td>
                          <td className="px-8 py-5">
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="w-4 h-4 mr-2" />
                              {formatDate(update.createdAt)}
                            </div>
                          </td>
                          <td className="px-8 py-5 whitespace-nowrap text-center">
                            <div className="flex justify-center gap-2">
                              <button
                                onClick={() => handleEdit(update)}
                                className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors border border-transparent hover:border-blue-300"
                                title="Edit update"
                              >
                                <Edit2 className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() =>
                                  handleDelete(
                                    update._id,
                                    update.title || update.name
                                  )
                                }
                                className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors border border-transparent hover:border-red-300"
                                title="Delete update"
                              >
                                <Trash2 className="w-5 h-5" />
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
              {!loading && filteredAndSortedUpdates.length > 0 && (
                <div className="px-8 py-4 border-t border-gray-100 bg-blue-50 rounded-b-2xl">
                  <p className="text-base text-blue-700 font-medium">
                    Showing {filteredAndSortedUpdates.length} of{" "}
                    {updates.length} updates
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

export default UpdatePage;
