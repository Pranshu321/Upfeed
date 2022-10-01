import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getNewsAPI } from './api';

export const NewsContext = createContext()

const Context = ({ children }) => {

    const [News, setNews] = useState([]);
    const [Category, setCategory] = useState("general");
    const [index, setindex] = useState(1);

    const fetchNews = async () => {
        const { data } = await axios.get(getNewsAPI(Category));

        setNews(data);
        setindex(1);
    }

    useEffect(() => {
        fetchNews();
    }, [Category]);

    return <NewsContext.Provider value={{ News, index, setindex, fetchNews }}>
        {children}
    </NewsContext.Provider>
}
export default Context;