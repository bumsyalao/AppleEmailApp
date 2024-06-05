import { formatDistanceToNow, parseISO } from 'date-fns';

export const formatDate = (created_at) => {
    const date = parseISO(created_at);
    const formattedDate = formatDistanceToNow(date, { addSuffix: true });
    const cleanedDate = formattedDate.replace(/about /, '');
    return cleanedDate
}