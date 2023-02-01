import { useState, useEffect } from "react"
import styles from "./PokemonLayout.module.css"
import { Pokemon, PokemonProps } from "components/Pokemon/Pokemon"
import { Loader } from "components/Loader"

export const PokemonLayout = () => {
  const [pokemonList, setPokemonList] = useState<PokemonProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
        if (response.status !== 200) {
          setError(true)
        }
        const pokemonData = await response.json()

        setPokemonList(pokemonData)
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
    <div className={styles.pokedex}>
      {pokemonList.map(({ id, name, height, weight }) => (
        <Pokemon name={name} id={id} weight={weight} height={height} key={id} />
      ))}
    </div>
  )
}