import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'status', 'publishedDate'],
    },
    access: {
        read: () => true, // Public can read published posts
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                description: 'URL-friendly version of the title',
            },
        },
        {
            name: 'excerpt',
            type: 'textarea',
            admin: {
                description: 'Short description for listings and SEO',
            },
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
            admin: {
                description: 'Main image for the post',
            },
        },
        {
            name: 'category',
            type: 'select',
            options: [
                { label: 'AI & Deep Learning', value: 'ai' },
                { label: 'Generative AI in Finance', value: 'finance' },
                { label: 'AI Leadership', value: 'leadership' },
                { label: 'Product Management', value: 'product' },
                { label: 'Technology', value: 'tech' },
            ],
            required: true,
        },
        {
            name: 'tags',
            type: 'array',
            fields: [
                {
                    name: 'tag',
                    type: 'text',
                },
            ],
        },
        {
            name: 'publishedDate',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
        },
        {
            name: 'status',
            type: 'select',
            options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Published', value: 'published' },
            ],
            defaultValue: 'draft',
            required: true,
        },
        {
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
            admin: {
                description: 'Author of the post',
            },
        },
    ],
}
