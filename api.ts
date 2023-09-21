/* eslint-disable no-useless-catch */
import axios from 'axios';
import { FormData } from './src/components/Form';

const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
});

export const submitForm = async (formData: FormData) => {
    try {
        const response = await api.post("/api/forms", formData);
        return response.data;
    }
    catch (error) {
        throw error;
    }
};

export const getFormData = async (username: string) => {
    try {
      const response = await api.get(`/api/forms/${username}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const updateForm = async (username: string, formData: FormData) => {
    try {
      const response = await api.put(`/api/forms/${username}`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };