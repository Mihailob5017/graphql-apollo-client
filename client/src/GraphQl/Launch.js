import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';
const Launch = props => {
  const SingleLaunchQuery = gql`
    {
      launch(flight_number: "${props.match.params.flight_number}") {
        flight_number
        mission_name
        launch_year
        launch_success
        rocket {
          rocket_id
          rocket_name
          rocket_type
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(SingleLaunchQuery);
  if (loading)
    return (
      <div className="alert alert-warning" role="alert">
        <strong className="h2">Loading...</strong>
      </div>
    );
  if (error)
    return (
      <div className="alert alert-error" role="alert">
        <strong className="h2">Error...</strong>
      </div>
    );
  const { launch } = data;
  return (
    <div className="card bg-light">
      <div className="card-header h4 bg-primary text-light">
        Name: {launch.mission_name}
      </div>
      <div className="card-body">
        <h5 className="card-title">Year: {launch.launch_year}</h5>
        <h5
          className={`alert  ${
            launch.launch_success ? 'alert-success' : 'alert-danger'
          }`}
        >
          {launch.launch_success ? 'Success' : 'Failure'}
        </h5>
        <div className="card-text my-2">
          <h6 className="text-primary">Rocket:</h6>
          ID:{launch.rocket.rocket_id}
          <br />
          Name:{launch.rocket.rocket_name}
          <br />
          Type:{launch.rocket.rocket_type}
        </div>
        <Link to="/" className="btn btn-primary">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Launch;
