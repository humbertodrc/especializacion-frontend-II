export interface Name {
  first: string;
  last: string;
}

export interface Picture {
  large: string;
}

export interface Result {
  name: Name;
  email: string;
  picture: Picture;
}

export interface User {
  results: Result[];
}