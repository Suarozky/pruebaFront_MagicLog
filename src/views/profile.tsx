// components/UserProfile.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProfileView() {
  const [user] = useState({
    name: "Carlos Pérez",
    email: "carlos@example.com",
    avatar: "/user/cato.svg",
    favorites: [
      { id: 1, name: "Nike Air Max", image: "/product/zapato.svg" },
      { id: 2, name: "Adidas Ultraboost", image: "/product/zapato2.svg" },
      { id: 3, name: "Puma RS-X", image: "/product/zapato3.svg" },
      { id: 4, name: "Reebok Classic", image: "/product/zapato4.svg" },
      { id: 5, name: "New Balance 574", image: "/product/zapato2.svg" },
      { id: 6, name: "Converse Chuck Taylor", image: "/product/zapato.svg" },
      { id: 7, name: "Vans Old Skool", image: "/product/zapato3.svg" },
      { id: 8, name: "Asics Gel-Lyte III", image: "/product/zapato4.svg" },
    ],
    recentOrders: [
      {
        id: 101,
        product: "Nike Dunk Low",
        date: "2025-04-05",
        image: "/product/zapato.svg",
      },
      {
        id: 102,
        product: "Nike Dunk Low",
        date: "2025-04-05",
        image: "/product/zapato.svg",
      },
      {
        id: 103,
        product: "Nike Dunk Low",
        date: "2025-04-05",
        image: "/product/zapato.svg",
      },
      {
        id: 104,
        product: "Nike Dunk Low",
        date: "2025-04-05",
        image: "/product/zapato.svg",
      },
      {
        id: 105,
        product: "Nike Dunk Low",
        date: "2025-04-05",
        image: "/product/zapato.svg",
      },
    ],
  });

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-6 flex items-center gap-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-sm"></div>
            <Image
              src={user.avatar}
              alt="Avatar"
              width={100}
              height={100}
              className="rounded-full border-4 border-white relative z-10"
            />
          </div>
          <div
            style={{ fontFamily: "Righteous" }}
            className="flex flex-col tracking-wider"
          >
            <h2 className="text-3xl font-bold text-[#FFA52F]">{user.name}</h2>
            <p className="text-[#FFA52F] text-lg opacity-90">{user.email}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#4A69E2] to-[#5A79F2] p-6 rounded-b-3xl">
          <div
            style={{ fontFamily: "Righteous" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            <div className="col-span-1 md:col-span-4 mb-2">
              <h3 className="text-2xl text-white font-semibold">
                Datos del Usuario:
              </h3>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm text-white">
              <div className="text-3xl font-bold">
                {user.recentOrders.length}
              </div>
              <div className="text-lg">Productos comprados</div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm text-white">
              <div className="text-3xl font-bold">{user.favorites.length}</div>
              <div className="text-lg">Productos favoritos</div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm text-white">
              <div className="text-3xl font-bold">0</div>
              <div className="text-lg">Productos en carrito</div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm text-white">
              <div className="text-3xl font-bold">0</div>
              <div className="text-lg">Productos en wishlist</div>
            </div>
          </div>
        </div>
      </div>

      {/* Favorites Section */}
      <div className="mt-12">
        <div
          style={{ fontFamily: "Righteous" }}
          className="flex items-center gap-4 mb-6"
        >
          <h2 className="text-4xl font-bold text-gray-900">FAVORITOS</h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-[#FFA52F] to-transparent rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {user.favorites.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="p-4 flex items-center justify-center bg-gray-50">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={140}
                  height={100}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-3 border-t">
                <p className="font-medium text-center text-gray-800">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="mt-12 mb-12">
        <div
          style={{ fontFamily: "Righteous" }}
          className="flex items-center gap-4 mb-6"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            ORDENES RECIENTES
          </h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-[#FFA52F] to-transparent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {user.recentOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-4 flex items-center justify-center bg-gray-50">
                <Image
                  src={order.image}
                  alt={order.product}
                  width={120}
                  height={90}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 border-t">
                <p className="font-medium text-gray-800">{order.product}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Fecha: {order.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
