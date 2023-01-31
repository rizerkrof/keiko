import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"
import React, { useEffect } from "react"

import { PokemonProps } from "components/Pokemon/Pokemon"

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

function fetchPokemons() {
  return fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } }).then(response =>
    response.json(),
  )
}

function filterPokemonsByName(pokemons: PokemonProps[], name: string) {
  return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
}

export const Home = () => {
  const [pokemonList, setPokemonList] = React.useState<PokemonInfo[]>([])
  const [filterValue, setFilterValue] = React.useState("")

  useEffect(() => {
    fetchPokemons().then(pokemonData => setPokemonList(pokemonData))
  })

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setFilterValue(event.target.value)
  }

  return (
    <div>
      <input className={styles.input} onChange={onInputChange} value={filterValue} />
      {filterPokemonsByName(pokemonList, filterValue).map(pokemon => (
        <Pokemon name={pokemon.name} id={pokemon.id} key={pokemon.id} />
      ))}
    </div>
  )
}
