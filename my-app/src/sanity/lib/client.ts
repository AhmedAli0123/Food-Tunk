import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, Apitoken } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:Apitoken
})
