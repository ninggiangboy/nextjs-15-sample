import {
  format,
  addDays,
  differenceInDays,
  parseISO,
  formatDistanceToNow,
} from "date-fns";

export const formatDate = (date: Date) => {
  try {
    return format(date, "dd-MM-yyyy");
  } catch {
    return undefined;
  }
};

export const formatDateTime = (date: Date) => {
  try {
    return format(date, "HH:mm dd-MM-yyyy");
  } catch {
    return undefined;
  }
};

export const formatDiff = (date: Date) => {
  try {
    return formatDistanceToNow(date, { addSuffix: true });
  } catch {
    return undefined;
  }
};

export const addDaysToDate = (date: Date, days: number) => {
  try {
    return addDays(date, days);
  } catch {
    return undefined;
  }
};

export const daysBetween = (date1: Date, date2: Date) => {
  try {
    return differenceInDays(date1, date2);
  } catch {
    return undefined;
  }
};

export const parseDate = (date: string) => {
  try {
    return parseISO(date);
  } catch {
    return undefined;
  }
};
