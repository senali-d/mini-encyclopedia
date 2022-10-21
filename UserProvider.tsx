import React, { useContext } from 'react'
import { useUserData } from '@nhost/nextjs'

const UserContext = React.createContext<any | null>(null)

export function UserProvider({ children }: any) {
  const user: any = useUserData()
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

export function useUserContext() {
  return useContext(UserContext)
}
