import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
interface CustomError extends Error {
  statusCode?: number;
}

const boeApiV2 = {
  signIn: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/api/user/signin`, {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        let statusCode = error.response?.status;

        if (!error.response) {
          statusCode = 503;
        }

        const errorMessage =
          statusCode === 503
            ? 'Servidor indisponível. Por favor, tente novamente mais tarde.'
            : error.response?.data?.message ||
              `Erro ${statusCode}. Tente novamente.`;

        const axiosError: CustomError = new Error(errorMessage);
        axiosError.statusCode = statusCode;

        throw axiosError;
      }

      throw new Error('Erro desconhecido');
    }
  },

  userSignUp: async (
    name: string,
    email: string,
    phone: string,
    password: string,
  ) => {
    try {
      const response = await fetch(`${API_URL}/api/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('SignIn Error:', error);
      throw error;
    }
  },

  farmRegister: async (
    propertyName: string,
    propertyPhone: string,
    taxId: string,
    zipCode: string,
    state: string,
    city: string,
    address: string,
  ) => {
    try {
      const response = await fetch(`${API_URL}/api/farm/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWQ4MWZjN2VlZTAwOGViMDQ0ZGQxMiIsImlhdCI6MTczNDMxMjcyNCwiZXhwIjoxNzM0MzE2MzI0fQ.2k1TVwkHgvjKBvvfByRYEq0S9H5G2yqs3GiwqFJBxvM`,
        },
        body: JSON.stringify({
          name: propertyName,
          tax_id: taxId,
          phone: propertyPhone,
          zip_code: zipCode,
          state,
          city,
          address,
        }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Farm Register Error:', error);
      throw error;
    }
  },

  getFarmEmployees: async () => {
    try {
      const response = await fetch(`${API_URL}/api/farm/employees`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWQ4MWZjN2VlZTAwOGViMDQ0ZGQxMiIsImlhdCI6MTczNDMxMjcyNCwiZXhwIjoxNzM0MzE2MzI0fQ.2k1TVwkHgvjKBvvfByRYEq0S9H5G2yqs3GiwqFJBxvM`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error('Farm Register Error:', error);
      throw error;
    }
  },

  getAnalysisHistory: async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/farm/farm-detailed-statistics`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWQ4MWZjN2VlZTAwOGViMDQ0ZGQxMiIsImlhdCI6MTczNDMxMjcyNCwiZXhwIjoxNzM0MzE2MzI0fQ.2k1TVwkHgvjKBvvfByRYEq0S9H5G2yqs3GiwqFJBxvM`,
          },
        },
      );
      return await response.json();
    } catch (error) {
      console.error('Farm Register Error:', error);
      throw error;
    }
  },

  getAnimalsList: async () => {
    try {
      const response = await fetch(`${API_URL}/api/farm/all-animals`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWQ4MWZjN2VlZTAwOGViMDQ0ZGQxMiIsImlhdCI6MTczNDMxMjcyNCwiZXhwIjoxNzM0MzE2MzI0fQ.2k1TVwkHgvjKBvvfByRYEq0S9H5G2yqs3GiwqFJBxvM`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error('Farm Register Error:', error);
      throw error;
    }
  },
};

export default boeApiV2;
