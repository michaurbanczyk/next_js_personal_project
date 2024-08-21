export type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type Contact = {
  phone: string;
  email: string;
};

export type OpeningHours =
  | {
      open: string;
      close: string;
    }
  | {
      closed: boolean;
    };

export type Pricing = {
  [timeRange: string]: number;
};

export type TennisCourt = {
  courtId: string;
  surfaceType: string;
  playType: string;
  indoor: boolean;
  pricing: {
    weekday: Pricing;
    weekend: Pricing;
  };
};

export type Areas = {
  tennisCourts: TennisCourt[];
};

export type Club = {
  id: number;
  name: string;
  address: Address;
  contact: Contact;
  openingHours: {
    monday: OpeningHours;
    tuesday: OpeningHours;
    wednesday: OpeningHours;
    thursday: OpeningHours;
    friday: OpeningHours;
    saturday: OpeningHours;
    sunday: OpeningHours;
  };
  areas: Areas;
};

export type CourtsData = {
  clubs: Club[];
};
