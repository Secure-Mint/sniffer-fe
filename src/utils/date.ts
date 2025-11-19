import { format, differenceInDays } from "date-fns";

export const getTokenAgeInfo = (dateStr: string) => {
  const date = new Date(dateStr);

  return {
    readable: format(date, "dd MMM, yyyy"),
    ageDays: differenceInDays(new Date(), date)
  };
};
