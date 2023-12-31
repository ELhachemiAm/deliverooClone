export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
   {
    name: "name",
    type: "string", 
    title: "Restaurant name",
    validation: (Rule) => Rule.required(),
   },
   {
    name: "short_description",
    type: "string", 
    title: "Short description",
    validation: (Rule) => Rule.max(200),
   },
   {
    name: "image",
    type: "image", 
    title: "Image of the restaurant",
   },
   {
    name: "lat",
    type: "number", 
    title: "Latitude of the restaurant",
   },
   {
    name: "lon",
    type: "number", 
    title: "Longitude of the restaurant",
   },
   {
    name: "address",
    type: "string", 
    title: "Restaurant address",
    validation: (Rule) => Rule.required(),
   },
   {
    name: "rating",
    type: "number", 
    title: "Restaurant rating",
    validation: (Rule) => 
      Rule.required()
      .min(1)
      .max(5)
      .error("please entre a number between 1 and 5 !"),
   },
   {
    name: "type",
    title: "Category",
    validation: (Rule) => Rule.required(),
    type: "reference", 
    to: [{ type: "category" }],
   },
   {
    name: "dishes",
    type: "array", 
    title: "Dishes",
    of: [{ type: "reference", to: [{ type: "dish" }] }],
   },

  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`,
  //     })
  //   },
  // },

}
