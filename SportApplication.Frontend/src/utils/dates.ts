import { Dayjs } from 'dayjs';

const STANDARD_DATE_FORMAT = 'DD.MM.YYYY';
const DATE_ONLY_FORMAT = 'YYYY-MM-DD';
const SHORT_DATE_ONLY_FORMAT = 'DD MMMM';
const TIME_ONLY_FORMAT = 'HH:mm:ss';
const SHORT_TIME_ONLY_FORMAT = 'HH:mm';

export const formatToStandardDate = (date: Dayjs) => date.format(STANDARD_DATE_FORMAT);
export const formatToDateOnly = (date: Dayjs) => date.format(DATE_ONLY_FORMAT);
export const formatToShortDateOnly = (date: Dayjs) => date.format(SHORT_DATE_ONLY_FORMAT);
export const formatToTimeOnly = (date: Dayjs) => date.format(TIME_ONLY_FORMAT);
export const formatToShortTimeOnly = (date: Dayjs) => date.format(SHORT_TIME_ONLY_FORMAT);
