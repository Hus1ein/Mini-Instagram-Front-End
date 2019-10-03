import axios from 'axios';

let savedToken = localStorage.getItem('token');

let instance = {

    loginAndSignUp: axios.create({
        baseURL: "http://localhost:8080/",
    }),
    otherRequest: axios.create({
        baseURL: "http://localhost:8080/",
        headers: {
            common: {
                Authorization: 'Bearer ' + savedToken
            }
        }
    })

};

/*instance.loginAndSignUp.interceptors.request.use(request => {

    //Edit request config
    console.log(request);
    return request;

});*/

export default instance;
