import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"
import React, { useEffect } from "react"

import { PokemonProps } from "components/Pokemon/Pokemon"

export const Home = () => {
  const [pokemonList, setPokemonList] = React.useState<PokemonProps[]>([])

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
      const pokemonData = await response.json()
      setPokemonList(pokemonData)
    }
    fetchPokemons()
  }, [])

  return (
    <div>
      <h1 className={styles.title}>Pokedex</h1>
      <div className={styles.pokedex}>
        {pokemonList.map(({ id, name, height, weight }) => (
          <Pokemon name={name} id={id} weight={weight} height={height} key={id} />
        ))}
      </div>
    </div>
  )
}
