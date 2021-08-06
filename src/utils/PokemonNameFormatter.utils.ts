export const capitalizeFirstLetterUtils = (name: string): string => {
    return name?.charAt(0).toUpperCase() + name?.slice(1);
};

export const formatToLowerCase = (value: string): string => {
    return value.toLowerCase();
};