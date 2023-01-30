import styles from "./Pokemon.module.css"

interface Props {
  name: string
  number: number
}

export const Pokemon = ({ name, number }: Props) => {
  const imageLink: string =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number + ".png"

  return (
    <div className={styles.intro}>
      <img src={imageLink} alt="" />

      <p>Name: {name}</p>
      <p> Number: {number}</p>
    </div>
  )
}
