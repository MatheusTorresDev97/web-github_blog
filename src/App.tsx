import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/defaultTheme";

import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
