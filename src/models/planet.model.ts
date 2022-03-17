export type PlanetModel = {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
}

export const defaultPlanet = {
  name: 'portrait',
  rotation_period: '1rp',
  orbital_period: '1op',
  diameter: '1d',
  climate: 'calid',
  gravity: '5g',
  terrain: 'beach',
  surface_water: '1sw',
  population: '1000',
};
