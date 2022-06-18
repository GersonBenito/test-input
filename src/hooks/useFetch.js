export const useFetch = () => {
  const obtenerDatos = async ({ method = 'GET', url = '', body = {}, header = {}  }) =>{
    try {
        if(method === 'GET'){
            const response = await fetch(url);
            const result = await response.json();
            console.log(result);
            return result;
        }else{
            const response = await fetch(url,{
                method: method,
                body: body,
                'Autorization': header
            })

            const result = await response.json();
            console.log('result', result);
            return result;

        }
    } catch (error) {
        console.log('error', error);
    }
  }

  return [ obtenerDatos ]
}
