const BASE_URL = 'https://reqres.in/api';

export const verification = async (codigo) => {
  try {
    const response = await fetch(`${BASE_URL}/app-users/verify`, {
      method: "POST",
      headers: {

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: codigo,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Response error:', errorData);
      throw new Error(`Error ${response.status}: ${errorData.message || 'Verificación fallida'}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Hubo un problema en verification:', error);
    throw error;
  }
};
