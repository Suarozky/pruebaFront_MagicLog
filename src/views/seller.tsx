// components/VendorDashboard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function SellerView() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("products");

  // State for product form
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    inventory: "",
  });

  // Mock data for products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Nike Air Max",
      image: "/product/zapato.svg",
      price: 129.99,
      category: "Sneakers",
      inventory: 45,
      sales: 127,
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      image: "/product/zapato2.svg",
      price: 149.99,
      category: "Running",
      inventory: 32,
      sales: 98,
    },
    {
      id: 3,
      name: "Puma RS-X",
      image: "/product/zapato3.svg",
      price: 99.99,
      category: "Casual",
      inventory: 28,
      sales: 76,
    },
    {
      id: 4,
      name: "Reebok Classic",
      image: "/product/zapato4.svg",
      price: 89.99,
      category: "Casual",
      inventory: 53,
      sales: 112,
    },
  ]);

  // Mock data for customers
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Carlos Pérez",
      email: "carlos@example.com",
      avatar: "/user/avatar1.svg",
      totalPurchases: 4,
      totalSpent: 437.96,
      lastPurchase: "2025-04-02",
    },
    {
      id: 2,
      name: "María González",
      email: "maria@example.com",
      avatar: "/user/avatar2.svg",
      totalPurchases: 7,
      totalSpent: 856.43,
      lastPurchase: "2025-04-05",
    },
    {
      id: 3,
      name: "Juan Rodríguez",
      email: "juan@example.com",
      avatar: "/user/avatar3.svg",
      totalPurchases: 2,
      totalSpent: 249.98,
      lastPurchase: "2025-03-28",
    },
    {
      id: 4,
      name: "Ana Martínez",
      email: "ana@example.com",
      avatar: "/user/avatar4.svg",
      totalPurchases: 5,
      totalSpent: 623.95,
      lastPurchase: "2025-04-01",
    },
    {
      id: 5,
      name: "Luis Torres",
      email: "luis@example.com",
      avatar: "/user/avatar5.svg",
      totalPurchases: 3,
      totalSpent: 347.97,
      lastPurchase: "2025-03-25",
    },
  ]);

  // Statistics data
  const stats = {
    totalSales: 8975.42,
    totalProducts: products.length,
    totalCustomers: customers.length,
    averageRating: 4.7,
  };

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newId =
      products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    const productToAdd = {
      id: newId,
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      category: newProduct.category,
      description: newProduct.description,
      inventory: parseInt(newProduct.inventory),
      image: "/product/zapato.svg", // Default image
      sales: 0,
    };

    setProducts([...products, productToAdd]);

    // Reset form
    setNewProduct({
      name: "",
      price: "",
      category: "",
      description: "",
      inventory: "",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-[#4A69E2] to-[#5A79F2] rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div
            style={{ fontFamily: "Righteous" }}
            className="text-white mb-4 md:mb-0"
          >
            <h1 className="text-2xl sm:text-3xl font-bold">
              Panel de Vendedor
            </h1>
            <p className="opacity-90 text-sm sm:text-base">
              Gestiona tus productos y clientes
            </p>
          </div>

          <div className="flex gap-2 sm:gap-4 w-full md:w-auto">
            <button className="bg-white text-[#4A69E2] px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-medium hover:bg-opacity-90 transition text-sm sm:text-base">
              Exportar Datos
            </button>
            <button className="bg-[#FFA52F] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-medium hover:bg-opacity-90 transition text-sm sm:text-base">
              Configuración
            </button>
          </div>
        </div>

        {/* Stats Cards - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-4 sm:mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
            <p className="text-white opacity-80 text-xs sm:text-sm">
              Ventas Totales
            </p>
            <p className="text-xl sm:text-2xl font-bold text-white">
              ${new Intl.NumberFormat("en-US").format(stats.totalSales)}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
            <p className="text-white opacity-80 text-xs sm:text-sm">
              Productos
            </p>
            <p className="text-xl sm:text-2xl font-bold text-white">
              {stats.totalProducts}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
            <p className="text-white opacity-80 text-xs sm:text-sm">Clientes</p>
            <p className="text-xl sm:text-2xl font-bold text-white">
              {stats.totalCustomers}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
            <p className="text-white opacity-80 text-xs sm:text-sm">
              Valoración
            </p>
            <p className="text-xl sm:text-2xl font-bold text-white">
              {stats.averageRating}/5
            </p>
          </div>
        </div>
      </div>

      {/* Tabs - Scrollable on mobile */}
      <div className="flex overflow-x-auto mb-4 sm:mb-6 pb-2 hide-scrollbar">
        <div className="flex border-b min-w-max">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 sm:px-6 py-2 sm:py-3 font-medium text-sm sm:text-base ${
              activeTab === "products"
                ? "text-[#4A69E2] border-b-2 border-[#4A69E2]"
                : "text-gray-500"
            }`}
          >
            Productos
          </button>
          <button
            onClick={() => setActiveTab("customers")}
            className={`px-4 sm:px-6 py-2 sm:py-3 font-medium text-sm sm:text-base ${
              activeTab === "customers"
                ? "text-[#4A69E2] border-b-2 border-[#4A69E2]"
                : "text-gray-500"
            }`}
          >
            Clientes
          </button>
          <button
            onClick={() => setActiveTab("new-product")}
            className={`px-4 sm:px-6 py-2 sm:py-3 font-medium text-sm sm:text-base ${
              activeTab === "new-product"
                ? "text-[#4A69E2] border-b-2 border-[#4A69E2]"
                : "text-gray-500"
            }`}
          >
            Crear Producto
          </button>
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="pb-8 sm:pb-12">
        {/* Products Tab */}
        {activeTab === "products" && (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
              <h2
                style={{ fontFamily: "Righteous" }}
                className="text-xl sm:text-2xl font-bold text-gray-800"
              >
                Tus Productos
              </h2>
              <div className="flex gap-2 w-full sm:w-auto">
                <select className="border rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-gray-700 text-sm sm:text-base w-full sm:w-auto">
                  <option>Todos los productos</option>
                  <option>Sneakers</option>
                  <option>Running</option>
                  <option>Casual</option>
                </select>
                <button className="bg-[#FFA52F] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-medium hover:bg-opacity-90 transition text-sm sm:text-base whitespace-nowrap">
                  Ordenar
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              {/* Versión para pantallas medianas/grandes (tabla normal) */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {[
                        "Producto",
                        "Categoría",
                        "Precio",
                        "Inventario",
                        "Ventas",
                        "Acciones",
                      ].map((header) => (
                        <th
                          key={header}
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <Image
                                src={product.image}
                                alt={product.name}
                                width={40}
                                height={40}
                                className="rounded"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {product.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {product.category}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            ${product.price}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {product.inventory}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {product.sales}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm">
                          <button className="text-[#4A69E2] hover:text-[#3A59D2] mr-3">
                            Editar
                          </button>
                          <button className="text-red-500 hover:text-red-700">
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Versión para móviles (cards) */}
              <div className="md:hidden space-y-4 p-4">
                {products.map((product) => (
                  <div key={product.id} className="border rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 mr-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={48}
                          height={48}
                          className="rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-sm font-medium text-gray-900">
                            {product.name}
                          </h3>
                          <span className="text-sm text-gray-900">
                            ${product.price}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {product.category}
                        </p>

                        <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-gray-500">Inventario:</span>{" "}
                            <span>{product.inventory}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Ventas:</span>{" "}
                            <span>{product.sales}</span>
                          </div>
                        </div>

                        <div className="mt-3 flex justify-end space-x-2">
                          <button className="text-xs text-[#4A69E2] hover:text-[#3A59D2]">
                            Editar
                          </button>
                          <button className="text-xs text-red-500 hover:text-red-700">
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Customers Tab */}
        {activeTab === "customers" && (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
              <h2
                style={{ fontFamily: "Righteous" }}
                className="text-xl sm:text-2xl font-bold text-gray-800"
              >
                Tus Clientes
              </h2>
              <div className="w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Buscar cliente"
                  className="border rounded-lg px-3 py-1 sm:py-2 text-gray-700 text-sm sm:text-base w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-lg sm:text-xl font-bold text-gray-500">
                          {customer.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h3 className="text-base sm:text-lg font-medium text-gray-900">
                          {customer.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500">
                          {customer.email}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 border-t pt-3 sm:pt-4">
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-500">
                            Compras
                          </p>
                          <p className="text-base sm:text-lg font-medium">
                            {customer.totalPurchases}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-gray-500">
                            Total Gastado
                          </p>
                          <p className="text-base sm:text-lg font-medium">
                            ${customer.totalSpent.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
                        Última compra: {customer.lastPurchase}
                      </p>
                    </div>

                    <div className="mt-3 sm:mt-4 flex justify-end">
                      <button className="text-[#4A69E2] hover:text-[#3A59D2] text-xs sm:text-sm">
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Create Product Tab */}
        {activeTab === "new-product" && (
          <div>
            <h2
              style={{ fontFamily: "Righteous" }}
              className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6"
            >
              Crear Nuevo Producto
            </h2>

            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre del Producto
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newProduct.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A69E2] focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Precio ($)
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={newProduct.price}
                      onChange={handleInputChange}
                      step="0.01"
                      min="0"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A69E2] focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Categoría
                    </label>
                    <select
                      name="category"
                      value={newProduct.category}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A69E2] focus:border-transparent text-sm sm:text-base"
                      required
                    >
                      <option value="">Seleccionar categoría</option>
                      <option value="Sneakers">Sneakers</option>
                      <option value="Running">Running</option>
                      <option value="Casual">Casual</option>
                      <option value="Basketball">Basketball</option>
                      <option value="Training">Training</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Inventario
                    </label>
                    <input
                      type="number"
                      name="inventory"
                      value={newProduct.inventory}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A69E2] focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Descripción
                  </label>
                  <textarea
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A69E2] focus:border-transparent text-sm sm:text-base"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end gap-2 sm:gap-3">
                  <button
                    type="button"
                    className="px-4 sm:px-6 py-1 sm:py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm sm:text-base"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 sm:px-6 py-1 sm:py-2 bg-[#4A69E2] text-white rounded-lg hover:bg-[#3A59D2] text-sm sm:text-base"
                  >
                    Crear Producto
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
