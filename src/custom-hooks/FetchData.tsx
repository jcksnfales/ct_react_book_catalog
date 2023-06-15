import { useEffect, useState } from 'react';
import { server_calls } from '../api/server';

export const fetchData = () => {
    const [bookData, setBookData] = useState<[]>([])

    const handleDataFetch = async () => {
        const fetched = await server_calls.get();
        setBookData(fetched)
    }

    useEffect(() => {
        handleDataFetch()
    }, []);

    return {bookData, getData:handleDataFetch};
}