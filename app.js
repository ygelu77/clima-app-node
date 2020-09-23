const { getLugarLatLng } = require('./lugar/lugar');

const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


// lugar.getLugarLatLng(argv.direccion)
// .then(console.log);

// const encodedURL = encodeURI(argv.direccion);            //No funciona bien

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

    //salida
    //El clima de xxxx lugar es de XXX
    //No se pudo determinar el clima de xxx

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);