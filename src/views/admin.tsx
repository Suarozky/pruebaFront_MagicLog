// components/VendorDashboard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function AdminView() {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-[#4A69E2] to-[#5A79F2] rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div
            style={{ fontFamily: "Righteous" }}
            className="text-white mb-4 md:mb-0"
          >
            <h1 className="text-3xl font-bold">Panel de Administrador</h1>
            <p className="opacity-90">Gestiona productos y clientes</p>
          </div>

          <div className="flex gap-4">
            <button className="bg-white text-[#4A69E2] px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition">
              Exportar Datos
            </button>
            <button className="bg-[#FFA52F] text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition">
              Configuración
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-white opacity-80">Ventas Totales</p>
            <p className="text-2xl font-bold text-white">
              ${new Intl.NumberFormat("en-US").format(stats.totalSales)}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-white opacity-80">Productos</p>
            <p className="text-2xl font-bold text-white">
              {stats.totalProducts}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-white opacity-80">Clientes</p>
            <p className="text-2xl font-bold text-white">
              {stats.totalCustomers}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-white opacity-80">Valoración</p>
            <p className="text-2xl font-bold text-white">
              {stats.averageRating}/5
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex mb-6 border-b">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-6 py-3 font-medium ${
            activeTab === "products"
              ? "text-[#4A69E2] border-b-2 border-[#4A69E2]"
              : "text-gray-500"
          }`}
        >
          Productos
        </button>
        <button
          onClick={() => setActiveTab("customers")}
          className={`px-6 py-3 font-medium ${
            activeTab === "customers"
              ? "text-[#4A69E2] border-b-2 border-[#4A69E2]"
              : "text-gray-500"
          }`}
        >
          Clientes
        </button>
      </div>

      {/* Content based on active tab */}
      <div className="pb-12">
        {/* Products Tab */}
        {activeTab === "products" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2
                style={{ fontFamily: "Righteous" }}
                className="text-2xl font-bold text-gray-800"
              >
                Todos Los Productos
              </h2>
              <div className="flex gap-2">
                <select className="border rounded-lg px-3 py-2 text-gray-700">
                  <option>Todos los productos</option>
                  <option>Sneakers</option>
                  <option>Running</option>
                  <option>Casual</option>
                </select>
                <button className="bg-[#FFA52F] text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition">
                  Ordenar
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Producto
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categoría
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Precio
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Inventario
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ventas
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
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
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {product.category}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          ${product.price}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {product.inventory}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {product.sales}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
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
          </div>
        )}

        {/* Customers Tab */}
        {activeTab === "customers" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2
                style={{ fontFamily: "Righteous" }}
                className="text-2xl font-bold text-gray-800"
              >
                Todos Los Clientes
              </h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Buscar cliente"
                  className="border rounded-lg px-3 py-2 text-gray-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
                        {/* This would be the avatar image in a real implementation */}
                        <span className="text-xl font-bold text-gray-500">
                          {customer.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {customer.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {customer.email}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 border-t pt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Compras</p>
                          <p className="text-lg font-medium">
                            {customer.totalPurchases}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Total Gastado</p>
                          <p className="text-lg font-medium">
                            ${customer.totalSpent.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-gray-500">
                        Última compra: {customer.lastPurchase}
                      </p>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button className="text-[#4A69E2] hover:text-[#3A59D2] text-sm">
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
