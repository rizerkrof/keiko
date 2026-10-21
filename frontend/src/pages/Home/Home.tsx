import styles from "./Home.module.css"
import { PokemonLayout } from "components/PokemonLayout/PokemonLayout"

export const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>Pokedex</h1>
      <PokemonLayout />
    </div>
  )
}
