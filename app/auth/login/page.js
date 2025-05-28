"use client"; // 👈 This must be the first line

import { useState } from 'react';
import Head from 'next/head';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// rest of the component...

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email or phone is required';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));

    Swal.fire({
      title: 'Login Successful!',
      text: 'You are being redirected to your dashboard',
      icon: 'success',
      confirmButtonColor: '#38a169',
      timer: 2000,
      timerProgressBar: true,
      willClose: () => {
        // Redirect or real submit
        // router.push('/dashboard');
        console.log('Logged in');
      },
    });

    setIsSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>Login | Garbage Collection System</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center"
           style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-green-500 text-white p-6 text-center relative">
            <h2 className="text-xl font-bold mb-1">Garbage Seekers</h2>
            <p className="text-sm opacity-90">Login to manage your waste collection</p>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-b from-black/10 to-transparent" />
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-blue-900 mb-1">Email or Phone</label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter email or phone"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 pl-10 rounded-md border text-sm focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" />
              </div>
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-blue-900 mb-1">Password</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-3 pl-10 pr-10 rounded-md border text-sm focus:outline-none focus:ring-2 ${
                    errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
                </span>
              </div>
              {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center gap-2 py-3 text-white bg-green-500 hover:bg-green-600 rounded-md text-sm font-semibold transition"
            >
              {isSubmitting ? <i className="fas fa-spinner fa-spin" /> : <i className="fas fa-sign-in-alt" />}
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>

            <div className="text-center text-sm text-gray-700 pt-4 border-t">
              Don't have an account?
              <a href="/signup" className="text-green-600 font-semibold ml-1 hover:underline">Register here</a>
              <br />
              <a href="/forgotp" className="text-green-600 font-semibold hover:underline">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
