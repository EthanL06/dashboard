import Dashboard from "./pages/Dashboard";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    text: {
      primary: "#212B36",
    },
  },
  typegraphy: {
    fontFamily: ["Public Sans", "sans-serif"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
};
export default App;
