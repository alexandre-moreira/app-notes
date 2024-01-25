import { ThemeProvider } from 'styled-components/native'
import { StatusBar, Text } from "react-native";

import { Home } from "./src/screens/Home";

import ligth from './src/theme/ligth';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <ThemeProvider theme={ligth}>
        <Home />
    </ThemeProvider>
    </>
    
  );
}
