import styles from "./Pokemon.module.css"
import { Loader } from "components/Loader"
import { useEffect, useState } from "react"
import { PokemonProps } from "components/Pokemon/Pokemon"
import { useParams } from "react-router-dom"

// interface PokemonProps {
//   heigth: number
//   id: number
//   name: string
//   weight: number
// }

export const Pokemon = () => {
  const { id } = useParams()
  const frontView: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
  const backView: string =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + id + ".png"
  const frontViewShiny: string =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + id + ".png"
  const backViewShiny: string =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/" + id + ".png"

  const [pokemonInfo, setPokemonInfo] = useState<PokemonProps>({} as PokemonProps)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(`http://localhost:8000/pokemon/${id}`, { headers: { accept: "application/json" } })
        if (response.status !== 200) {
          setError(true)
        }
        const pokemonData = await response.json()
        setPokemonInfo(pokemonData)
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPokemons()
  }, [])

  if (isLoading) {
    return <Loader />
  }
  if (error) {
    return (
      <div className={styles.title}>
        <h1>ERROR trying fetching pokemon :(</h1>
      </div>
    )
  }

  return (
    <div>
      <h1 className={styles.center}>{pokemonInfo.name}</h1>
      <div className={styles.center}>
        <img src={frontView} alt="" />
        <img src={backView} alt="" />
      </div>
      <div className={styles.center}>
        <img src={frontViewShiny} alt="" />
        <img src={backViewShiny} alt="" />
      </div>
      <div className={styles.center}>
        <p>Height: {pokemonInfo.height}</p>
        <p>Weight: {pokemonInfo.weight}</p>
        <p>ID: {pokemonInfo.id}</p>
      </div>
    </div>
  )
}
