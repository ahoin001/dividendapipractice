import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Tracker = () => {

    // const [response, setresponse] = useState(null)

    useEffect(() => {

        const fetch = async () => {

            const responseFromApi = await axios(
                'https://cloud.iexapis.com/stable/stock/aapl/dividends/1y/?token=pk_2519bf9fdbe44c1ab9079927ecc10d49&symbols=aapl',
            );

            console.log(responseFromApi.data[0])
            console.log(responseFromApi)

        }
        fetch();

    }, []); // Or [] if effect doesn't need props or state





    return (
        <div>
            Boom
        </div>
    );

};

export default Tracker;