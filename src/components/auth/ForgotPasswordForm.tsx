import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, AlertCircle, CheckCircle } from 'lucide-react';
import { authAPI } from '../../lib/auth';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await authAPI.resetPassword(email);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-md w-full mx-auto text-center">
        <div className="mb-4 flex justify-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Check your email</h2>
        <p className="text-gray-600 mb-6">
          We've sent password reset instructions to {email}
        </p>
        <button
          onClick={() => navigate('/login')}
          className="text-black hover:underline"
        >
          Back to login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Reset Password</h2>
      
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-600">
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Mail size={20} />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending instructions...' : 'Send Reset Instructions'}
        </button>

        <p className="text-center text-sm text-gray-600">
          Remember your password?{' '}
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-black hover:underline"
          >
            Back to login
          </button>
        </p>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;