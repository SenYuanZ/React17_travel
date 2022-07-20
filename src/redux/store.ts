import { legacy_createStore as createStore } from 'redux'
import languageReducer from './language/languageReducer'

const store = createStore(languageReducer)

export default store
