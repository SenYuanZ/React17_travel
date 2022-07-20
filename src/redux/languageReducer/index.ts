import i18n from 'i18next'

export interface LanguageState {
  language: 'en' | 'zh'
  languageList: { name: string; code: string }[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'EngLish', code: 'en' }
  ]
}
const languageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'change_language':
      i18n.changeLanguage(action.payload)
      return { ...state, language: action.payload }
    case 'add_language':
      return { ...state, languageList: [...state.languageList, action.payload] }
    default:
      return state
  }
}

export default languageReducer
