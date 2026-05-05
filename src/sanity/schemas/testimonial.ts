import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'text', title: 'Review', type: 'text', rows: 4, validation: r => r.required() }),
    defineField({ name: 'stars', title: 'Star Rating', type: 'number', validation: r => r.required().min(1).max(5) }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'text' },
  },
})
