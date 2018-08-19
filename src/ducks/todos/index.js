import { combineReducers } from 'redux';

import tasks from './tasks';
import categories from './categories';

export default combineReducers({ tasks, categories });
