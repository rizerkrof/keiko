import LoaderLogo from "./loader.svg"
import styles from "./Loader.module.css"

export const Loader = () => {
  return (
    <div className={styles.logo}>
      <img height={300} src={LoaderLogo} alt="Loading Pokemons!" />
    </div>
  )
}
