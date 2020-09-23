const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const instance = axios.create({
        baseURL: `https://geocode.xyz/?locate=${ dir }&json=1`,
        // timeout: 1000,
        // headers: {
        //     "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        //     "x-rapidapi-key": "760058be25msh73ed1e7eaf0dc4fp1851c6jsn3bece9651760",
        //     "useQueryString": true
        // }
    });

    const resp = await instance.get();
    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data;
    const direccion = data.standard.city;
    const lat = data.longt;
    const lng = data.latt;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}