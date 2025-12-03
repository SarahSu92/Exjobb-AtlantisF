export interface Destination {
  id: string;
  name: string;
  country: string;
  region: 'EUROPE' | 'NORTH AMERICA' | 'AFRICA' | 'ASIA';
  image?: string;
  description?: string;
  shortDescription?: string;
  longDescription?: string;
  activities?: string[];
   language: {
    main: string;
    regional?: string;
    commonPhrases?: { phrase: string; translation: string }[];
  };
  religion?: string[];
  currency?: string;
  payment?: { cardsAccepted: string[]; cashRecommended?: boolean };
  climate?: string;
  bestTimeToTravel?: string;
  tips?: string[];
  hotels?: string;
  attractions?: string;
  budget?: string;
}
