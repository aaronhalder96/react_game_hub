import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header"
        "main"`,
        lg: `"header header"
        "aside main"`,
      }}
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>Aside</GridItem>
      </Show>
      <GridItem area={"main"}>Main</GridItem>
    </Grid>
  );
}

export default App;
