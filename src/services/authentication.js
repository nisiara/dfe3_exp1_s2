const BASE_URL = "http://localhost:3001/api";

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(
      `${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    
    console.error('Hubo un problema en loginUser:', error);
    throw error;
  }
};
