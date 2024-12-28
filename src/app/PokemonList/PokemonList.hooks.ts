import styles from "./PokemonList.module.scss";

export function usePokemonList() {
  const classes = {
    PokemonWrapper: styles["pokemon-wrapper"],
    pokemonListContainer: styles["pokemon-wrapper__container"],
    PokemonListWrapper: styles["pokemon-wrapper__list"],
    PokemonListWrapperItem: styles["pokemon-wrapper__list-item"],
    LayoutPokemonListHeader: styles["pokemon-wrapper__header"],
    LayoutPokemonListWrapper: styles["pokemon-wrapper__list-wrapper"],
    PokemonListToggleView: styles["pokemon-wrapper__toggle"],
    toggleViewWrapper: styles["pokemon-wrapper__toggle-wrapper"],
  };
  return { classes };
}
