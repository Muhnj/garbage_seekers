"use client";

import { useState } from "react";
import Head from "next/head";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function RegisterAdmin() {
  const [formData, setFormData] = useState({
    role: "admin",
    fName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState({ label: "", color: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "password") {
      setPasswordStrength(getPasswordStrength(value));
    }
  };

  const getPasswordStrength = (password) => {
    if (password.length < 6) return { label: "Very Weak", color: "text-red-600" };
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[@$!%*?&]/.test(password);
    const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
    if (score === 1) return { label: "Weak", color: "text-yellow-600" };
    if (score === 2 || score === 3) return { label: "Medium", color: "text-blue-600" };
    if (score === 4) return { label: "Strong", color: "text-green-600" };
    return { label: "Weak", color: "text-red-600" };
  };

  const togglePassword = (id) => {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
  };

  const validate = () => {
    let temp = {};
    temp.fName = formData.fName ? "" : "Full name is required.";
    temp.email = /\S+@\S+\.\S+/.test(formData.email) ? "" : "Email is not valid.";
    temp.phone = formData.phone ? "" : "Phone number is required.";
    temp.password = formData.password.length >= 6 ? "" : "Password must be at least 6 characters.";
    temp.confirmPassword = formData.password === formData.confirmPassword ? "" : "Passwords do not match.";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      Swal.fire({
        title: "Registration Successful!",
        icon: "success",
        confirmButtonColor: "#16a34a",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Admin Register | Garbage Seekers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-600 text-center mb-2">Create Admin Account</h2>
          <p className="text-sm text-gray-600 text-center mb-6">Join Garbage Seekers for efficient waste management</p>
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="fName" className="block text-gray-700 font-semibold mb-1">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  id="fName"
                  name="fName"
                  value={formData.fName}
                  onChange={handleChange}
                  className="w-full pl-10 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter full name"
                />
                <i className="fas fa-user absolute top-3 left-3 text-green-600"></i>
              </div>
              {errors.fName && <p className="text-red-500 text-sm mt-1">{errors.fName}</p>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter email"
                />
                <i className="fas fa-envelope absolute top-3 left-3 text-green-600"></i>
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter phone number"
                />
                <i className="fas fa-phone absolute top-3 left-3 text-green-600"></i>
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Create password"
                />
                <i className="fas fa-lock absolute top-3 left-3 text-green-600"></i>
                <span onClick={() => togglePassword("password")} className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-green-600">
                  <i className="fas fa-eye"></i>
                </span>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              {formData.password && <p className={`text-sm mt-1 font-semibold ${passwordStrength.color}`}>Strength: {passwordStrength.label}</p>}
            </div>

            {/* Confirm Password */}
            <div className="mb-4 relative">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Confirm password"
                />
                <i className="fas fa-lock absolute top-3 left-3 text-green-600"></i>
                <span onClick={() => togglePassword("confirmPassword")} className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-green-600">
                  <i className="fas fa-eye"></i>
                </span>
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300">
              <i className="fas fa-user-plus mr-2"></i>Register Admin
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account? <a href="/login" className="text-green-600 font-semibold hover:underline">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
