import Http from "api/http";
import { Lead } from "../models/Lead";

const LEADS_SERVICE_ROUTES = {
  leads: () => "leads"
};

export const getLeads = (): Promise<Lead[]> => {
  return Http.get<Lead[]>(LEADS_SERVICE_ROUTES.leads()).then(
    (response) => response.data
  );
};

export const createLead = (newLead: Lead): Promise<Lead> => {
  return Http.post<Lead>(LEADS_SERVICE_ROUTES.leads(), newLead).then(
    (response) => response.data
  );
};
