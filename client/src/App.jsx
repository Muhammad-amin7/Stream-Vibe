import React from 'react'
import { MyContextProvider } from './Context/Context'
import AppRouter from './Routes/AppRouter'
// https://www.figma.com/design/tKxDdAw520DiNC6KnLHLAS/OTT-Dark-Theme-Website-UI-Design-Template-for-Media-Streaming--Movies-and-TV---FREE-Editable----Community-?node-id=34-919&t=hwPgv37cduUhnOsh-0

export default function App() {
  return (
    <MyContextProvider>
      <AppRouter />
    </MyContextProvider>
  )
}
