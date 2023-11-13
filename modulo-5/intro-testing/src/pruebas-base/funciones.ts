import { technologies } from '../data/technologies';

export const getTechnologiesByGroup = (group:string) => {
  return technologies.filter((tech) => tech.group === group);
}
