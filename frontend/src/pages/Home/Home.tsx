import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"

export const Home = () => {
  return (
    <div className={styles.intro}>
      <Pokemon name="Carapuce" number={7} />
      <Pokemon name="Carabaffe" number={8} />
      <Pokemon name="Tortank" number={9} />
    </div>
  )
}
