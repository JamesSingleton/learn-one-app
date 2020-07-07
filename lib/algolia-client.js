import algoliasearch from 'algoliasearch/lite';

export default class AlgoliaClient {
  client = algoliasearch('', '');

  async search(requests) {
    if (requests.every(({ params: { query } }) => !query)) {
      return {
        results: results.map(() => {
          return {
            processingTimeMS: 0,
            nbHits: 0,
            hits: [],
            facets: {}
          };
        })
      };
    }
    return this.client.search(requests);
  }
  async searchForFacetValues(requests) {
    return this.client.searchForFacetValues(requests);
  }
}
