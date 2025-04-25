import { supabase } from './supabase';
import type { AuthError, AuthResponse } from '@supabase/supabase-js';

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const authAPI = {
  async signUp(email: string, password: string, username: string) {
    // Validate password strength
    if (!PASSWORD_REGEX.test(password)) {
      throw new Error(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      );
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    if (error) throw error;

    // Create user profile
    if (data.user) {
      const { error: profileError } = await supabase
        .from('users')
        .insert({
          id: data.user.id,
          username,
          created_at: new Date().toISOString(),
        });

      if (profileError) throw profileError;
    }

    return data;
  },

  async signIn(email: string, password: string, rememberMe: boolean = false) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
      options: {
        // Set session duration based on remember me option
        persistSession: rememberMe,
      },
    });

    if (error) throw error;

    // Update last login timestamp
    if (data.user) {
      await supabase
        .from('users')
        .update({ last_login: new Date().toISOString() })
        .eq('id', data.user.id);
    }

    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async resetPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) throw error;
  },

  async updatePassword(newPassword: string) {
    if (!PASSWORD_REGEX.test(newPassword)) {
      throw new Error(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      );
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) throw error;
  },

  onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback);
  },
};