import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styles.intro}>
      {/* <div>Bienvenue sur ton futur pokédex !</div> */}
      {/* <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div> */}
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="" />
      <p>Name: Carapuce</p>
      <p>Number: 7</p>
    </div>
  )
}
