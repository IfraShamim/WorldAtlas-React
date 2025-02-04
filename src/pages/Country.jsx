import React, { useEffect, useTransition } from 'react'
import { getCountryData } from '../API/postApi'
import Loader from '../UI/Loader';

const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState()
    useEffect(() => {
        startTransition(async () => {
            const response = await getCountryData();
            console.log(response);
            setCountries(response.data)
        })
    }, [])
    if (isPending) return <Loader />
    return (
        <div>Country</div>
    )
}

export default Country