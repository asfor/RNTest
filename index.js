/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import Route from './pages/Route';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Route);
