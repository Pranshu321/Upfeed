import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getNewsAPI, getSourceAPI } from './api';

export const NewsContext = createContext()

const Context = ({ children }) => {

    const [News, setNews] = useState([]);
    const [Category, setCategory] = useState("general");
    const [index, setindex] = useState(1);
    const [darkTheme, setDarkTheme] = useState(true);
    const [source, setSource] = useState();

    const fetchNews = async (reset = Category) => {
        const { data } = await axios.get(getNewsAPI(reset));

        setNews(data);
        setindex(1);
    }

    const fetchNewsfromSource = async () => {
        try {
            const { data } = await axios.get(getSourceAPI(source));
            setNews(data);
            setindex(1);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [Category]);

    useEffect(() => {
        fetchNewsfromSource();
    }, [source]);

    return <NewsContext.Provider value={{ News, index, setindex, fetchNews, setSource, setDarkTheme, darkTheme, setCategory }}>
        {children}
    </NewsContext.Provider>
}
export default Context;