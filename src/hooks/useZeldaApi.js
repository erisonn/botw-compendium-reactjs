import { useCallback, useEffect, useState } from "react";
import { checkIfCreatures } from "../utils/helpers";
const useZeldaApi = url => {

    const [isLoading, setIsLoading] = useState(null)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const fetchAPI = useCallback(() => {
        setIsLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            checkIfCreatures(data, setData)
        })
        .catch(error => {
            console.log(error)
            setError('Error on loading data, please try again.')
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [url])

    useEffect(() => {
        setError(null)
        fetchAPI();
    }, [url, fetchAPI])

    return {isLoading, data, error, fetchAPI}
}
 
export default useZeldaApi;