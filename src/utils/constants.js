import { format } from "date-fns";

export const TODAY = format(new Date(), "EEEE, MMMM d");
export let NEW_DATE = new Date();
export const YESTERDAY = format(NEW_DATE.setDate(NEW_DATE.getDate() - 1), "EEEE, MMMM d");
export const BEFORE_YESTERDAY = format(NEW_DATE.setDate(NEW_DATE.getDate() - 2), "EEEE, MMMM d");