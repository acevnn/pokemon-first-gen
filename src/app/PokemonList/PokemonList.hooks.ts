import styles from "./PokemonList.module.scss";

export function usePokemonList() {
  const classes = {
    PokemonWrapper: styles["pokemon-wrapper"],
    PokemonListWrapper: styles["pokemon-wrapper__list"],
    PokemonListWrapperItem: styles["pokemon-wrapper__list-item"],
    PokemonListHeader: styles["pokemon-wrapper__header"],
    PokemonListToggleView: styles["pokemon-wrapper__toggle"],
    toggleViewWrapper: styles["pokemon-wrapper__toggle-wrapper"],
  };
  return { classes };
}
