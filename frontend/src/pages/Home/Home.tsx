import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"
import { Loader } from "components/Loader"
import React, { useEffect } from "react"

import { PokemonProps } from "components/Pokemon/Pokemon"

export const Home = () => {
  const [pokemonList, setPokemonList] = React.useState<PokemonProps[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
      const pokemonData = await response.json()
      setPokemonList(pokemonData)
      setIsLoading(false)
    }
    fetchPokemons()
  }, [])

  function renderPokemonList() {
    if (isLoading) {
      return <Loader />
    }
    return (
      <div className={styles.pokedex}>
        {pokemonList.map(({ id, name, height, weight }) => (
          <Pokemon name={name} id={id} weight={weight} height={height} key={id} />
        ))}
      </div>
    )
  }

  return (
    <div>
      <h1 className={styles.title}>Pokedex</h1>
      {renderPokemonList()}
    </div>
  )
}
