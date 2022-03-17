import React from 'react';
import { PlanetModel } from '../../models/planet.model';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { usePlanetsUpdate } from '../../contexts/PlanetsContext';
import { toast } from 'react-toastify';

const PlanetCard = ({ planet }: { planet: PlanetModel }) => {
  const updatePlanets = usePlanetsUpdate();

  const handlePlanetDelete = () => {
    updatePlanets(planet);
    toast(`${planet.name} was successfully deleted.`, { position: 'top-center', type: 'info' });
  }

  return (
      <div className="my-3 w-75 card-container position-relative">
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              Name: {planet.name}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Population: {Number(planet.population).toLocaleString()}
            </CardSubtitle>
            <CardText>
              Rotation Period: {planet.rotation_period}<br />
              Orbital Period: {planet.orbital_period}<br />
              Diameter: {planet.diameter}<br />
              Climate: {planet.climate}<br />
              Gravity: {planet.gravity}<br/>
              Terrain: {planet.terrain}<br />
              Surface Water: {planet.surface_water}
            </CardText>
            <Button color="danger" onClick={handlePlanetDelete}>
              Delete
            </Button>
          </CardBody>
        </Card>
      </div>
  );
}

export default PlanetCard;
