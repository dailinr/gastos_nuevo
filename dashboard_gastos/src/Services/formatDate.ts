export function formatDate(dateString : string){
    const dateObj = new Date(dateString);

    const options : Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return new Intl.DateTimeFormat('es-Es', options).format(dateObj);
}

export function formatDateGrap(dateString : string){
    const dateObj = new Date(dateString);

    const options : Intl.DateTimeFormatOptions = {
        // weekday: 'long',
        // year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return new Intl.DateTimeFormat('es-Es', options).format(dateObj);
}
