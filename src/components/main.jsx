import React from 'react';
import { useParams } from 'react-router';
import useZeldaApi from '../hooks/useZeldaApi';
import Loading from './loading'
import CardList from './CardList/CardList'
import { formatZeldadata } from '../utils/helpers';

const Main = () => {

    const { category = 'monsters' } = useParams();
    const apiUrl = `https://botw-compendium.herokuapp.com/api/v2/category/${category}`
    const { isLoading, data, error } = useZeldaApi(apiUrl);

    if(isLoading) return <Loading/>
   
    return (
        <CardList data={formatZeldadata(data)}/> 
    )
}

export default Main;