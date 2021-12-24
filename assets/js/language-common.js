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

    console.log(window.location.pathname);
};
