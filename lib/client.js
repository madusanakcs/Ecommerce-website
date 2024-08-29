import product from '@/ecs1/schemaTypes/product'
import sanityClient from '@sanity/client'
import imageUrlBuilder  from '@sanity/image-url'

export const client = sanityClient({
    projectId:"1vksuww9",
    dataset:"production",
    apiVersion:"2024-08-27",
    useCdn: true,
    token:process.env.SANITY_API_TOKEN1
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)