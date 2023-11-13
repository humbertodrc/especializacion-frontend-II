interface Technology {
  id: number;
  name: string;
  description: string;
  group: string;
}

export const technologies: Technology[] = [
	{
		id: 1,
		name: "HTML",
    description: "HyperText Markup Language",
    group: "Frontend"
	},
	{
		id: 2,
		name: "CSS",
    description: "Cascading Style Sheets",
    group: "Frontend"
	},
	{
		id: 3,
		name: "JavaScript",
    description: "JavaScript is a programming language",
    group: "Frontend"
	},
	{
		id: 4,
		name: "React",
    description: "React is a JavaScript library",
    group: "Frontend"
	},
	{
		id: 5,
		name: "Angular",
    description: "Angular is a TypeScript framework",
    group: "Frontend"
  },
  {
    id: 6,
    name: "Node",
    description: "Node is a JavaScript runtime",
    group: "Backend"
  },
  {
    id: 7,
    name: "Express",
    description: "Express is a web framework for Node",
    group: "Backend"
  },
];
