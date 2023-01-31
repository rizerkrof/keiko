import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"
import React, { useEffect } from "react"

import { PokemonProps } from "components/Pokemon/Pokemon"

function filterPokemonsByName(pokemons: PokemonProps[], name: string) {
  return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
}

export const Home = () => {
  const [pokemonList, setPokemonList] = React.useState<PokemonProps[]>([])
  const [filterValue, setFilterValue] = React.useState("")

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
      const pokemonData = await response.json()
      setPokemonList(pokemonData)
    }
    fetchPokemons()
  }, [])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setFilterValue(event.target.value)
  }

  return (
    <div>
      <h1 className={styles.title}>Pokedex</h1>
      <div className={styles.pokedex}>
        {filterPokemonsByName(pokemonList, filterValue).map(({ id, name, height, weight }) => (
          <Pokemon name={name} id={id} weight={weight} height={height} key={id} />
        ))}
      </div>
    </div>
  )
}
