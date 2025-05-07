import moment from 'moment/moment';

export const DateFormatter = (datestring) => {
    if(!datestring) return "";

    return moment(datestring).format("MMM Do YYYY, hh:mm a");

};

export const NumberFormatter = (number) => {
    if(!number) return "";

    return new Intl.NumberFormat('en-US').format(number)
}

export const titleFormater = (title) => {
    const len = title?.length;
    if(len < 30) return title;

    return title.slice(0,30) + "...."
}