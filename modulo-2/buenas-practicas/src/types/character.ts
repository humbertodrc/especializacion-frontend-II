export interface Character {
  created: string;
  episode: [];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface ApiResponse {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: null;
  };
  results: Character[];
}

