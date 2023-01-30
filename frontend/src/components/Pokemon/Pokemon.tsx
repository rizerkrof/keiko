import styles from "./Pokemon.module.css"

interface Props {
  name: string
  id: number
}

export const Pokemon = ({ name, id }: Props) => {
  const imageLink: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"

  return (
    <div className={styles.intro}>
      <img src={imageLink} alt="" />

      <p>Name: {name}</p>
      <p> Number: {id}</p>
    </div>
  )
}
