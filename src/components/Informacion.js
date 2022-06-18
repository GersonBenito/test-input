import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';

export const Informacion = () => {

    const [ uri, setUri] = useState({
        url: '',
    });


    const obtenerUrl = ({ target }) =>{
        setUri(target.value);
    }

    const enviarDatos = () =>{
        console.log('url enviar', uri);
    }


    const getDatos = async() =>{
        const url2 = 'https://api.dataforseo.com/v3/merchant/amazon/asin/task_post';
        const data = [{
            "language_code": "es_MX",
            "location_coordinate": "42.192062, -72.307682",
            "asin": "B07G1NLMYG"
        }]


        const crendenciales = btoa(`${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}`);
        console.log(crendenciales);
        const respuesta = await fetch(url2, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Authorization': `Basic ${crendenciales}`
            }
        })
        const resultado = await respuesta.json();
        console.log(resultado);
    }

    useEffect(()=>{
        getDatos();
    }, [])

  return (
    <>
        <div>Informacion</div>
        <input type="text" name='url' onChange={ obtenerUrl } />
        <button onClick={enviarDatos}>buscar</button>
    </>
  )
}
