type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type Contact = {
  phone: string;
  email: string;
};

type OpeningHours =
  | {
      open: string;
      close: string;
    }
  | {
      closed: boolean;
    };

type Pricing = {
  [timeRange: string]: number;
};

type TennisCourt = {
  courtId: string;
  surfaceType: string;
  playType: string;
  indoor: boolean;
  pricing: {
    weekday: Pricing;
    weekend: Pricing;
  };
};

type Areas = {
  tennisCourts: TennisCourt[];
};

type Club = {
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

type CourtsData = {
  clubs: Club[];
};
