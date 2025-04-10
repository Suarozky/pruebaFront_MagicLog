"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiShoppingCart, FiCreditCard } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ProductView() {
  const images = [
    "/product/zapatoReview.svg",
    "/product/zapatoReview2.svg",
    "/product/zapatoReview3.svg",
    "/product/zapato2.svg",
  ];

  const [selectedImage, setSelectedImage] = useState("/product/zapato2.svg");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos carga de imágenes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Animación para la transición entre imágenes
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white mt-10 rounded-4xl">
      {/* Barra de navegación */}
      <div className="w-full px-6 py-4 bg-white shadow-sm  rounded-t-4xl">
        <Link
          href="/account"
          className="flex items-center gap-2 text-blue-600  rounded-4xl hover:text-blue-800 transition-colors duration-300"
        >
          <FiChevronLeft className="text-lg" />
          <span className="text-sm font-medium tracking-wide">
            VOLVER A MI CUENTA
          </span>
        </Link>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Columna izquierda - Imágenes */}
          <div className="flex-1">
            {/* Imagen principal */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg mb-6"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            >
              {isLoading ? (
                <div className="w-full h-96 lg:h-[500px] flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                <Image
                  src={selectedImage}
                  alt="Imagen de Producto"
                  width={800}
                  height={800}
                  className="w-full h-96 lg:h-[500px] object-contain p-4"
                />
              )}
            </motion.div>

            {/* Miniaturas */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative min-w-[80px] h-20 rounded-xl overflow-hidden cursor-pointer ${
                    selectedImage === img
                      ? "ring-4 ring-blue-500"
                      : "ring-1 ring-gray-200 opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Columna derecha - Detalles del producto */}
          <div className="flex-1">
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Encabezado del producto */}
              <div className="mb-6">
                <h1 className="text-3xl font-extrabold text-gray-800">
                  OTOPLASTIA
                </h1>
                <p className="text-gray-500 mt-1">Cirugía General</p>
              </div>

              {/* Precio */}
              <div className="mb-6 bg-blue-50 p-4 rounded-xl">
                <div className="flex items-baseline flex-wrap">
                  <span className="text-2xl font-bold text-blue-700 mr-3">
                    Cuotas de $200
                  </span>
                  <span className="text-sm text-gray-500">
                    (Valor Total $4000)
                  </span>
                </div>
                <div className="w-full h-1 bg-blue-200 my-4 rounded-full"></div>
                <p className="text-sm text-gray-500">
                  Financia tu procedimiento en cómodas cuotas mensuales sin
                  intereses adicionales.
                </p>
              </div>

              {/* Términos y Condiciones */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  TÉRMINOS Y CONDICIONES
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Este procedimiento incluye consulta previa, materiales
                  quirúrgicos y una sesión de seguimiento post-operatorio. El
                  pago inicial debe realizarse con al menos 48 horas de
                  anticipación a la fecha programada. Aplican restricciones
                  médicas según evaluación previa.
                </p>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-4 px-6 bg-white border-2 border-blue-600 rounded-xl flex justify-center items-center gap-2 hover:bg-blue-50 transition-colors duration-300"
                >
                  <FiShoppingCart className="text-blue-600" />
                  <span className="font-bold text-blue-600">
                    AÑADIR AL CARRITO
                  </span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-4 px-6 bg-blue-600 border-2 border-blue-600 rounded-xl flex justify-center items-center gap-2 hover:bg-blue-700 transition-colors duration-300"
                >
                  <FiCreditCard className="text-white" />
                  <span className="font-bold text-white">PAGAR AHORA</span>
                </motion.button>
              </div>

              {/* Características adicionales */}
              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs font-medium text-blue-700">DURACIÓN</p>
                  <p className="text-sm">2-3 horas</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs font-medium text-blue-700">
                    RECUPERACIÓN
                  </p>
                  <p className="text-sm">7-10 días</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs font-medium text-blue-700">ANESTESIA</p>
                  <p className="text-sm">Local</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs font-medium text-blue-700">
                    SEGUIMIENTO
                  </p>
                  <p className="text-sm">Incluido</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
