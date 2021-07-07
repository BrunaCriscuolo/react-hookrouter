import { useRoutes } from 'hookrouter';

import { routes } from './routes';

const RouteWrapper = () => {
  const routeResult = useRoutes(routes);

  const { props } = routeResult;

  return props.isPrivate ? 'Página privada' : routeResult;
};

export default RouteWrapper;

