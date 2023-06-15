const token = "ea3314619f42d6730f89b190a5404274069890e667e40032"; // api token for flask app

export const server_calls = {
    get: async () => {
        const response = await fetch('https://flask-library.onrender.com/api/books', {
            method: 'GET',
            headers: {
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    }
    // TODO - add other API methods
}