import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
const Launches = () => {
  const grqphQlQuery = gql`
    {
      launches {
        mission_name
        flight_number
        launch_success
        rocket {
          rocket_name
        }
      }
    }
  `;
  const { error, loading, data } = useQuery(grqphQlQuery);
  if (loading)
    return (
      <div class="alert alert-warning" role="alert">
        <strong className="h2">Loading...</strong>
      </div>
    );
  if (error)
    return (
      <div class="alert alert-error" role="alert">
        <strong className="h2">Error...</strong>
      </div>
    );

  return (
    <ul className="list group">
      {data.launches.map(launch => {
        return (
          <li
            className={`list-group-item border-bottom 
            ${launch.flight_number % 2 === 0 && 'bg-light'}`}
          >
            <div className="h4 text-primary">{launch.mission_name}</div>
            <div className="h6">{launch.rocket.rocket_name}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Launches;
