export type Plate = {
  id: string; // Roman numeral
  name: string;
  city: string;
  state: string;
  yearOpened: number;
  architect: string;
  status: 'in production' | 'forthcoming';
};

export const catalog: Plate[] = [
  { id: 'I', name: 'Yankee Stadium', city: 'New York', state: 'NY', yearOpened: 1923, architect: 'Osborn Engineering', status: 'in production' },
  { id: 'II', name: 'Fenway Park', city: 'Boston', state: 'MA', yearOpened: 1912, architect: 'Osborn Engineering', status: 'forthcoming' },
  { id: 'III', name: 'Wrigley Field', city: 'Chicago', state: 'IL', yearOpened: 1914, architect: 'Zachary Taylor Davis', status: 'forthcoming' },
  { id: 'IV', name: 'Polo Grounds', city: 'New York', state: 'NY', yearOpened: 1911, architect: 'Henry Herts', status: 'forthcoming' },
  { id: 'V', name: 'Churchill Downs', city: 'Louisville', state: 'KY', yearOpened: 1895, architect: 'Joseph Dominic Baldez', status: 'forthcoming' },
  { id: 'VI', name: 'Notre Dame Stadium', city: 'Notre Dame', state: 'IN', yearOpened: 1930, architect: 'Osborn Engineering', status: 'forthcoming' },
  { id: 'VII', name: 'Yale Bowl', city: 'New Haven', state: 'CT', yearOpened: 1914, architect: 'Charles A. Ferry', status: 'forthcoming' },
  { id: 'VIII', name: 'Ebbets Field', city: 'Brooklyn', state: 'NY', yearOpened: 1913, architect: 'Clarence Van Buskirk', status: 'forthcoming' },
  { id: 'IX', name: 'Forbes Field', city: 'Pittsburgh', state: 'PA', yearOpened: 1909, architect: 'Osborn Engineering', status: 'forthcoming' },
  { id: 'X', name: 'Rose Bowl', city: 'Pasadena', state: 'CA', yearOpened: 1922, architect: 'Myron Hunt', status: 'forthcoming' },
  { id: 'XI', name: 'Michigan Stadium', city: 'Ann Arbor', state: 'MI', yearOpened: 1927, architect: 'Osborn Engineering', status: 'forthcoming' },
  { id: 'XII', name: 'Ohio Stadium', city: 'Columbus', state: 'OH', yearOpened: 1922, architect: 'Howard Dwight Smith', status: 'forthcoming' },
];
