import styles from "./PokemonList.module.scss";

export function usePokemonList() {
  const classes = {
    PokeTrainerImg: styles["poke-trainer"],
    PokemonWrapper: styles["pokemon-wrapper"],
    pokemonListContainer: styles["pokemon-wrapper__container"],
    PokemonListWrapper: styles["pokemon-wrapper__list"],
    PokemonListWrapperContainer: styles["pokemon-wrapper__list-container"],
    PokemonListWrapperItem: styles["pokemon-wrapper__list-item"],
    PokemonListContentWrapper: styles["pokemon-wrapper__content"],
    pokemonListHeader: styles["pokemon-wrapper__list-header"],
    LayoutPokemonListHeader: styles["pokemon-wrapper__header"],
    LayoutPokemonListWrapper: styles["pokemon-wrapper__list-wrapper"],
    PokemonListToggleView: styles["pokemon-wrapper__toggle"],
    toggleViewWrapper: styles["pokemon-wrapper__toggle-wrapper"],
  };
  return { classes };
}
