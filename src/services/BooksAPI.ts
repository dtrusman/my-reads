const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const get = async (bookId: any) => {
    const res = await fetch(`${api}/books/${bookId}`, { headers });
    const data = await res.json();

    return data.book;
}    
        

export const getAll = async () => {
    const res = await fetch(`${api}/books`, { headers });
    const data = await res.json();
    
    return data.books;
}


export const update = async (book: any, shelf: any) => {
    await fetch(`${api}/books/${book.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ shelf })
    });
}

export const search = async (query: string) => {
    const res = await fetch(`${api}/search`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    });
    const data = await res.json();

    return data.books;
}