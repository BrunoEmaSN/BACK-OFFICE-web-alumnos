import axios from "axios";

export const get = async (url: string): Promise<any> => {
    const config = {
        method: 'GET',
        url,
        headers: { 
          'Content-Type': 'application/json',
        },
    };

    let result;
    await axios( config )
        .then((res) => {
            result = res;
        }).catch((error) => {
            result = false;
            console.log(error.message);
        });

    return result;
}