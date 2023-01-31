import styles from "./Pokemon.module.css"

export interface PokemonProps {
  name: string
  id: number
}

export const Pokemon = ({ name, id }: PokemonProps) => {
  const imageLink: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"

  return (
    <div className={styles.card}>
      <img src={imageLink} alt="" />

      <p>Name: {name}</p>
      <p> Number: {id}</p>
    </div>
  )
}
