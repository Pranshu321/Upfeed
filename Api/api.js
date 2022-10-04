// https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741

export const categories = [
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/news.png",
        name: "general",
    },
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
        name: "business",
    },
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
        name: "entertainment",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
        name: "health",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
        name: "science",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
        name: "sports",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
        name: "technology",
    },
];

export const country = [
    {
        code: "in",
        name: "India",
    },
    {
        code: "us",
        name: "USA",
    },
    {
        code: "au",
        name: "Australia",
    },
    {
        code: "ru",
        name: "Russia",
    },
    {
        code: "fr",
        name: "France",
    },
    {
        code: "gb",
        name: "United Kingdom",
    },
];

export const sources = [
    {
        id: "bbc-news",
        name: "BBC News",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
    },
    {
        id: "cnn",
        name: "CNN",
        pic: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png",
    },
    {
        id: "fox-news",
        name: "Fox News",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
    },
    {
        id: "google-news",
        name: "Google News",
        pic: "data:image/png;base64,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",
    },
    {
        id: "cnbc",
        name: "CNBC",
        pic: "data:image/png;base64,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",
    },
    {
        id: "mtv-news",
        name: "MTV News",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIhhTt3epmmc52ZzD3pJ-cGO39G6TI4_WWYg&usqp=CAU",
    }
];

export const BASE_URL = "https://saurav.tech/NewsAPI/";

export const getNewsAPI = (category, country = "in") => {
    return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
};

export const getSourceAPI = (source) => {
    return `${BASE_URL}/everything/${source}.json`;
};