export const dateNow = () => {
    let dateObj = new Date();
    return (dateObj.getUTCFullYear()) + "-" + (dateObj.getMonth() + 1) + "-" + (dateObj.getUTCDate());
}

export const dateNowMinusSeven = () => {
    let dateObj = new Date();
    return (dateObj.getUTCFullYear()) + "-" + (dateObj.getMonth() + 1) + "-" + (dateObj.getUTCDate() - 7);
}