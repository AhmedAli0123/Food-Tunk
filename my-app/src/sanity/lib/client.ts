import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:"wyzsknba",
  dataset: "production",
  apiVersion: '2023-03-25',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "skLlt1g5MaMSxUu6DQzR0fKEmGjClyt46j3n49Kj2OOuaRXbVU1ssnN1ZleX5dpYy8zHpcns4OF1knUvRZI1uESIHvnfIaZo3qtRQv9uKBZZ64dxFi40dO88UOBPejdCRAhDDiaau4dLCCO6DMsxtO8JVqZOB3CRr0U877Nq35AsgV6SkQPY",
})