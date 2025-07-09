const randomUserNames = [
  "Alex Johnson",
  "Sarah Davis",
  "Mike Wilson",
  "Emily Chen",
  "David Brown",
  "Jessica Taylor",
  "Ryan Martinez",
  "Amanda Garcia",
  "Kevin Lee",
  "Lisa Wang",
  "Chris Anderson",
  "Maria Rodriguez",
  "Jason Thompson",
  "Nicole Miller",
  "Brandon Clark",
  "Ashley Lewis",
  "Tyler Hall",
  "Megan Young",
  "Jordan Wright",
  "Samantha King",
];

export const getRandomUserName = () => {
  return randomUserNames[Math.floor(Math.random() * randomUserNames.length)];
};
