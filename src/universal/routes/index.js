import AppContainer from 'universal/containers/App/AppContainer';
import CounterContainer from 'universal/modules/counter/containers/Counter/CounterContainer';
import Home from 'universal/components/Home/Home';

export default (store) => {
  return {
    component: AppContainer, 
    childRoutes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/counter',
			component: CounterContainer
		}
    ]
  }
}
