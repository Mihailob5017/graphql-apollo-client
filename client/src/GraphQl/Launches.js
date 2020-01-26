import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';
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

  return (
    <>
      <ul className="list group">
        {data.launches.map(launch => {
          return (
            <li
              key={launch.flight_number}
              className={`list-group-item border-bottom 
            ${launch.flight_number % 2 === 0 && 'bg-light'}`}
            >
              <div
                className={`h4 ${
                  launch.launch_success ? 'text-success' : 'text-danger'
                }`}
              >
                {launch.mission_name}
              </div>
              <Link
                to={`/launch/${launch.flight_number}`}
                className="btn btn-outline-primary"
              >
                Launch Details
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Launches;
