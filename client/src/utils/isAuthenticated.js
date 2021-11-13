
const isAuthenticated = () => {
    return window.localStorage.getItem('USE_DASH')?true:false;
}

export default isAuthenticated
