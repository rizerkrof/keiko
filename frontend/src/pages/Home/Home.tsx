import styles from "./Home.module.css"
import { PokemonLayout } from "components/PokemonLayout/PokemonLayout"
import { useEffect, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"

export const Home = () => {
  const MAX_PAGE = 10
  const { page } = useParams()
  const pageNumber = Number(page)
  
  const changePage = (next: boolean) => {
    if(next && pageNumber!==MAX_PAGE){
      return pageNumber+1
    } else if(!next && pageNumber !==0){
      return pageNumber-1
    } else {
      return pageNumber
    }
  }

  return (
    <div>
      <h1 className={styles.title}>Pokedex</h1>
      <div className={styles.navigation}>
        <div>
          <Link to={`/pokedex/${changePage(false)}`}>
            <h1>{'<'}</h1>
          </Link>
        </div>
        <div>
          <Link to={`/pokedex/${changePage(true)}`}>
            <h1>{'>'}</h1>
          </Link>
        </div>
      </div>
      <PokemonLayout page={pageNumber} />
    </div>
  )
}
