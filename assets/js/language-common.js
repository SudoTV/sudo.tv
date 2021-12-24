const getLanguage = () => {

    const localStorageLanguage = localStorage.getItem('sudo-tv-language');
    if (localStorageLanguage) {
        return localStorageLanguage;
    }

    const language = window.navigator.userLanguage || window.navigator.language;
    localStorage.setItem('sudo-tv-language', language);

    return language;
};

const setLanguage = (language) => {

    localStorage.setItem('sudo-tv-language', language);

    const path = window.location.pathname;

    if (path.startsWith('/zh')
        || path.startsWith('/en')) {
        window.location.href = path.substring(3);
    }
};
