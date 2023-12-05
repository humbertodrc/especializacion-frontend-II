

export interface Character{
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
}

export interface CharactersData {
  characters: {
    results: Character[]
  }
}

export interface CharacterData {
  character: Character
}