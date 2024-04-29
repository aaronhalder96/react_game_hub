import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

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
        <GridItem area={"aside"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
