export const action = { type: "", payLoad: {} };

export const incrementCount = (hotel) => {
    return {
        type: "INCREMENT_COUNT",
        payLoad: { name: hotel },
    };
};

export const decrementCount = (hotel) => {
    return {
        type: "DECREMENT_COUNT",
        payLoad: { name: hotel },
    };
};