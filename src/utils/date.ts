import { format, differenceInDays } from "date-fns";

export const getTokenAgeInfo = (dateStr: string) => {
  const date = new Date(dateStr);

  return {
    readable: format(date, "PPP p"),
    ageDays: differenceInDays(new Date(), date)
  };
};
