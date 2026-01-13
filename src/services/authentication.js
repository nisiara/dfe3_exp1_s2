const BASE_URL = 'https://reqres.in/api';
const API_KEY = "pub_36a0e5d6b0c9d86dc8d2bb498dcc0f0f0a66a9cabf9869a2e64f7ce8c6750bf6";
const PROJECT_ID = '1566';

export const loginUser = async (mail) => {
  try {
    const response = await fetch(
      `${BASE_URL}/app-users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY
        },
        body: JSON.stringify({
          email: mail,
          project_id: PROJECT_ID
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
