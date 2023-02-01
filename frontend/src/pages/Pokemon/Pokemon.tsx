import styles from "./Pokemon.module.css"
// import { PokemonLayout } from "components/PokemonLayout/PokemonLayout"

import { useParams } from "react-router-dom"

export const Pokemon = () => {
  const { id } = useParams()

  return (
    <div>
      <h1 className={styles.title}>{id}</h1>
    </div>
  )
}
