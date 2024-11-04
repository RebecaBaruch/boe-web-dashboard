const API_URL = process.env.NEXT_PUBLIC_API_URL;

const BoeApiV2 = {
  user: {
    signUp: async (userData) => {
      const response = await fetch(`${API_URL}/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Error creating user');
      }

      return response.json();
    },

    signIn: async (credentials) => {
      const response = await fetch(`${API_URL}/user/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Error logging in');
      }

      return response.json();
    },

    update: async (userId, userData) => {
      const response = await fetch(`${API_URL}/user/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          userId: userId,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Error updating user');
      }

      return response.json();
    },

    delete: async (userId) => {
      const response = await fetch(`${API_URL}/user/delete`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          userId: userId,
        },
      });

      if (!response.ok) {
        throw new Error('Error deleting user');
      }

      return response.json();
    },
  },
};

export default BoeApiV2;
