export type Archive = {
  name: string;
  description: string;
  plates: string; // e.g. "Plates I, II, IV"
  url: string;
};

export const archives: Archive[] = [
  { name: 'Osborn Engineering Records, Cleveland State University Special Collections', description: 'Primary architectural drawings and firm records for Osborn Engineering projects, 1892–1960.', plates: 'Plates I, II, IV, VI, IX, XI', url: 'https://library.csuohio.edu/speccoll' },
  { name: 'Library of Congress, Prints & Photographs Division', description: 'HABS/HAER documentation and period photography of American civic and sporting architecture.', plates: 'Plates I–XII', url: 'https://www.loc.gov/pictures/' },
  { name: 'Yale University Library, Manuscripts and Archives', description: 'University records and architectural documentation for Yale Bowl and athletic facilities.', plates: 'Plate VII', url: 'https://archives.yale.edu' },
  { name: 'University of Notre Dame Archives', description: 'University records, construction documents, and photography related to Notre Dame Stadium.', plates: 'Plate VI', url: 'https://archives.nd.edu' },
  { name: 'Bentley Historical Library, University of Michigan', description: 'University archives including records of Michigan Stadium construction and expansion.', plates: 'Plate XI', url: 'https://bentley.umich.edu' },
  { name: 'Ohio State University Archives', description: 'University records and construction documentation for Ohio Stadium, 1921–1922.', plates: 'Plate XII', url: 'https://library.osu.edu/archives' },
  { name: 'Boston Public Library, Leslie Jones Collection', description: 'Photographic archive of mid-twentieth-century Boston sporting and civic events.', plates: 'Plate II', url: 'https://www.bpl.org/leslie-jones-collection/' },
  { name: 'Chicago History Museum', description: 'Institutional records and photographic collections documenting Chicago sporting venues.', plates: 'Plate III', url: 'https://www.chicagohistory.org' },
  { name: 'University of Pittsburgh Archives', description: 'University and community records related to Forbes Field and Pittsburgh sporting history.', plates: 'Plate IX', url: 'https://www.library.pitt.edu/archives' },
  { name: 'Pasadena Museum of History', description: 'Regional history collections documenting the Rose Bowl and Pasadena civic architecture.', plates: 'Plate X', url: 'https://pasadenahistory.org' },
  { name: 'University of Louisville Archives', description: 'Institutional records documenting Churchill Downs and Louisville sporting venues.', plates: 'Plate V', url: 'https://library.louisville.edu/archives' },
  { name: 'New York Public Library, Manuscripts and Archives Division', description: 'Architectural records, photographs, and ephemera related to New York sporting venues.', plates: 'Plates I, IV, VIII', url: 'https://www.nypl.org/locations/schwarzman/manuscripts-and-archives-division' },
];
