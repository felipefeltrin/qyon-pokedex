function Endpoints() {
  this.pokeApi = "https://pokeapi.co/api/v2";

  this.getPaginationUrl = (limit, offset) => {
    return `${this.pokeApi}/pokemon/?limit=${limit}&offset=${offset}`;
  }

  this.getSearchUrl = (idOrName) => {
    return `${this.pokeApi}/pokemon/${idOrName}/`;
  }

  this.getPokeDetailsBySpecies = (species) => {
    return `${this.pokeApi}/pokemon-species/${species}/`;
  }

  this.getPokeEvolutionChain = (chainId) => {
    return `${this.pokeApi}/evolution-chain/${chainId}/`;
  }

  this.getPokeTypeByType = (typeId) => {
    return `${this.pokeApi}/type/${typeId}/`;
  }
}

export default Endpoints;