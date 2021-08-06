export const formatIdUtils = (id: number): string => {
    if (Number.isNaN(id)) return '#000';
    return id < 10 ? `#00${id}` : id >= 10 && id < 100 ? `#0${id}` : `#${id}`;
};