import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"

export const Home = () => {
  const pokemonList = [
    {
      name: "Carapuce",
      id: 7,
    },
    {
      name: "Carabaffe",
      id: 8,
    },
    {
      name: "Tortank",
      id: 9,
    },
  ]

  return (
    <div className={styles.intro}>
      <Pokemon name="Carapuce" id={7} />
      <Pokemon name="Carabaffe" id={8} />
      <Pokemon name="Tortank" id={9} />
    </div>
  )
}
