"use client";

import LoginView from "@/views/login";
import RegisterView from "@/views/register";
import { useAuthStore } from "@/store/auth/authStore";

export default function Login() {
  const { isLogin, toggleAuthMode } = useAuthStore();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 ">
      {isLogin ? <LoginView /> : <RegisterView />}

      <button
        onClick={toggleAuthMode}
        className="text-blue-600 underline mt-52 sm:mt-10 md:mt-44 lg:mt-10"
      >
        {isLogin
          ? "¿No tienes una cuenta? Regístrate"
          : "¿Ya tienes una cuenta? Inicia sesión"}
      </button>
    </div>
  );
}
