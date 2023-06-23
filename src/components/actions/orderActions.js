
export const setOrder = (order) => {
    return {
        type: 'SET_ORDER',
        payload: order,
    }
}

export const setProducts = (products) => {
    return {
        type: 'SET_PRODUCTS',
        payload: products,
    }
}

