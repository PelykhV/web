const defaultState = {
    hotelList: [],
};

const findIndexByName = (arr, name) => {
    return arr.findIndex((item) => item.name === name);
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_HOTEL":
            const foundIndex = findIndexByName(state.hotelList, action.payLoad.name);
            if (foundIndex === -1) {
                return { ...state, hotelList: [...state.hotelList, action.payLoad] };
            } else {
                const updatedHotelArr = [...state.hotelList];
                updatedHotelArr[foundIndex] = {
                    ...updatedHotelArr[foundIndex],
                    count: updatedHotelArr[foundIndex].count + action.payLoad.count,
                };
                console.log(state.hotelList[foundIndex].count);
                return { ...state, hotelList: updatedHotelArr };
            }
        case "INCREMENT_COUNT":
            return {
                ...state,
                hotelList: state.hotelList.map((hotel) => {
                    if (hotel.name === action.payLoad.name) {
                        return { ...hotel, count: hotel.count + 1 };
                    }
                    return hotel;
                }),
            };
        case "DECREMENT_COUNT":
            return {
                ...state,
                hotelList: state.hotelList.map((hotel) => {
                    if (hotel.name === action.payLoad.name && hotel.count > 0) {
                        return { ...hotel, count: hotel.count - 1 };
                    }
                    return hotel;
                }),
            };
        default:
            return state;
    }
};