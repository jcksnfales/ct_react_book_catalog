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
            throw new Error('Failed to fetch data from server');
        }

        return await response.json();
    },

    create: async (data:any = {}) => {
        const response = await fetch('https://flask-library.onrender.com/api/books', {
            method: 'POST',
            headers: {
                'x-access-token': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on server');
        }

        return await response.json();
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://flask-library.onrender.com/api/books/${id}`, {
            method: 'POST',
            headers: {
                'x-access-token': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to update data on server');
        }

        return await response.json();
    },

    delete: async (id:string) => {
        const response = await fetch(`https://flask-library.onrender.com/api/books/${id}`, {
            method: 'DELETE',
            headers: {
                'x-access-token': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete data on server');
        }

        return;
    }
}