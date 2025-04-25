import { supabase } from './supabase';
import type { User, Product, Order, OrderItem } from './types';

// Error handling utility
const handleError = (error: any) => {
  console.error('API Error:', error);
  throw new Error(error.message || 'An unexpected error occurred');
};

// Rate limiting using a simple in-memory store
const rateLimiter = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT = 100; // requests per window
const RATE_WINDOW = 60000; // 1 minute in milliseconds

const checkRateLimit = (userId: string) => {
  const now = Date.now();
  const userLimit = rateLimiter.get(userId);

  if (!userLimit) {
    rateLimiter.set(userId, { count: 1, timestamp: now });
    return;
  }

  if (now - userLimit.timestamp > RATE_WINDOW) {
    rateLimiter.set(userId, { count: 1, timestamp: now });
    return;
  }

  if (userLimit.count >= RATE_LIMIT) {
    throw new Error('Rate limit exceeded');
  }

  userLimit.count++;
};

// User API
export const userAPI = {
  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) handleError(error);
    return user;
  },

  async updateProfile(profile: Partial<User>) {
    const { data, error } = await supabase
      .from('users')
      .update(profile)
      .eq('id', profile.id)
      .select()
      .single();

    if (error) handleError(error);
    return data;
  },
};

// Product API
export const productAPI = {
  async getProducts(category?: string) {
    let query = supabase.from('products').select('*');
    
    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query;
    if (error) handleError(error);
    return data;
  },

  async getProduct(id: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) handleError(error);
    return data;
  },

  async createProduct(product: Omit<Product, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('products')
      .insert(product)
      .select()
      .single();

    if (error) handleError(error);
    return data;
  },

  async updateProduct(id: string, updates: Partial<Product>) {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) handleError(error);
    return data;
  },

  async deleteProduct(id: string) {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) handleError(error);
  },
};

// Order API
export const orderAPI = {
  async createOrder(order: Omit<Order, 'id' | 'created_at' | 'updated_at'>) {
    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert(order)
      .select()
      .single();

    if (orderError) handleError(orderError);

    // Create order items
    const orderItems = order.items.map(item => ({
      order_id: orderData.id,
      product_id: item.product_id,
      quantity: item.quantity,
      price_at_time: item.price_at_time,
    }));

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems);

    if (itemsError) handleError(itemsError);

    return orderData;
  },

  async getUserOrders(userId: string) {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (
          *,
          product:products (*)
        )
      `)
      .eq('user_id', userId);

    if (error) handleError(error);
    return data;
  },

  async getOrder(id: string) {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (
          *,
          product:products (*)
        )
      `)
      .eq('id', id)
      .single();

    if (error) handleError(error);
    return data;
  },

  async updateOrderStatus(id: string, status: Order['status']) {
    const { data, error } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) handleError(error);
    return data;
  },
};