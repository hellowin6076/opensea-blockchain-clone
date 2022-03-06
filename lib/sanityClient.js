import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'w6nwhqb0',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk23FtHRwLIr3q9AWeLlI3MBili7VtfFHoLNRIrKTPsqU5PUmg7b6HkD4c9ZfeKbjJCXMvva4OVvlR1O0h4W2zg5rYdofm5FNEQy1FWWCXzvwtXJu56Q9uDxxhIhaO7HZEs0scEFqr0owvqFLg5LEZIrzWlWk6MUVkkkV3OFqWl8l921Du8H',
  useCdn: false,
})
