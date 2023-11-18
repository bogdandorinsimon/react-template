import dayjs from "dayjs";

export const DATE_FORMAT_DD_MM_YYYY = "DD/MM/YYYY";

export const formatDate = (date: string, dateFormat?: string) => {
  return dayjs(date, dateFormat).format(DATE_FORMAT_DD_MM_YYYY);
};
