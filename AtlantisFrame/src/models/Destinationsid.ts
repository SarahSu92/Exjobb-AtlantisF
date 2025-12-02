export interface Destination {
  id: string; 
  country: string;
  name: string;
  region: "EUROPE" | "NORTH AMERICA" | "AFRICA" | "ASIA";
  image?: string;

  shortDescription: string;
  longDescription?: string;

  language: {
    main: string;
    regional?: string[];
    commonPhrases?: { phrase: string; translation: string }[];
  };

  religion?: string[];
  currency: string;

  payment: {
    cardsAccepted: string[];
    notes?: string[];
  };

  climate: {
    summary: string;
    summer?: string;
    winter?: string;
    springAutumn?: string;
  };

  bestTimeToTravel: string;

  tips: string[];

  hotels: {
    name: string;
    description: string;
  }[];

  attractions: {
    title: string;
    description: string;
    notes?: string[];
  }[];

  budget: {
    low: string;
    mid: string;
    high: string;
  };
}