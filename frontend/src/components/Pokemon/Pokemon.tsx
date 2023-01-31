import styles from "./Pokemon.module.css"

export interface PokemonProps {
  id: number
  name: string
  height: number
  weight: number
}

export const Pokemon = ({ id, name, height, weight }: PokemonProps) => {
  const imageLink: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"

  return (
    <div className={styles.card}>
      <p>{name}</p>
      <img src={imageLink} alt="" />

      <p> ID: {id}</p>
      <p> Height: {height} cm</p>
      <p> Weight: {weight} kg</p>
    </div>
  )
}
