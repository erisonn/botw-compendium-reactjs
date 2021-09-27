import React from 'react';
import { useParams } from 'react-router';
import useZeldaApi from '../../hooks/useZeldaApi';
import Loading from '../Loading/Loading'
import CardList from '../CardList/CardList'
import Error from '../Error/Error';
import { formatZeldadata } from '../../utils/helpers';

const Main = () => {

    const { category = 'monsters' } = useParams();
    const apiUrl = `https://botw-compendium.herokuapp.com/api/v2/category/${category}`
    const { isLoading, data, error, fetchAPI } = useZeldaApi(apiUrl);

    if(isLoading) return <Loading/>

    if(error) return <Error errorMessage={error} handleError={() => fetchAPI(apiUrl)} buttonText={'Reload'}/>
   
    return (
        <CardList data={formatZeldadata(data)}/> 
    )
}

export default Main;