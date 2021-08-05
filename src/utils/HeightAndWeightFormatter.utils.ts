export const formatToMetricSystem = (measure: number): number => {
    return measure / 10;
};
export const convertKgToPounds = (measure: number) => {
    return (measure / 4.5359237).toFixed(2);
};

export const convertToFeetAndInches = (measure: number) => {
    
    let feet = Math.floor(measure / 3.048);
    let inches = Math.round(( feet) * 12);
    return `${feet}' ${inches} ''`;
};