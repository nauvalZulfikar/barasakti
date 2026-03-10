import { createContext, useState } from 'react'
import { t } from '../lang'

export const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('id')
  return (
    <LangContext.Provider value={{ lang, setLang, tx: t[lang] }}>
      {children}
    </LangContext.Provider>
  )
}
