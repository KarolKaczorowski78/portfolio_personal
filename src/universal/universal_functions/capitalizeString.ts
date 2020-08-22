const capitalizeString = (str: string) => 
    `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;

export default capitalizeString;