export type Lead = {
  id: number;
  clientName: string;
  carName: string;
};

export type AddLeadFormValue = {
  clientName: string;
  carName: string;
  year: Optional<number>;
};
