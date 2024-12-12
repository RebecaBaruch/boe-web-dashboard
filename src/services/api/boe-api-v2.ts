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
        const statusCode = error.response?.status;
        const errorMessage =
          error.response?.data?.message ||
          'Falha na autenticação. Tente novamente.';

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
      console.log('Response:', data);
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWEyMmM1NmMxZDM1N2MyNDQyM2U2NSIsImlhdCI6MTczMzk2MTg3MiwiZXhwIjoxNzMzOTY1NDcyfQ.iw-KJ-ydLJspVhp4uQPoyR_zOsAPHVsyqoepu0Ouav8`,
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
      console.log('Response:', data);
      return data;
    } catch (error) {
      console.error('Farm Register Error:', error);
      throw error;
    }
  },
};

export default boeApiV2;
