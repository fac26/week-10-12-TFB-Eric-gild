import Airtable from 'airtable';

const base = new Airtable({
  apiKey: AIRTABLE_API_KEY,
}).base('appwjTMNZwwnhuRzz');

export default base;
