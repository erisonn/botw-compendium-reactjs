export const formatZeldadata = (data) => data && data.map(item => {
    return {
        img: item.image,
        name: item.name,
        id: item.id,
        link: `/${item.category}/${item.name}`
    }
})

export const checkIfCreatures = (data, setState) => {
    if('food' in data.data) {
        setState([...data.data.food, ...data.data.non_food])
    } else {
        setState(data.data)
    }
}