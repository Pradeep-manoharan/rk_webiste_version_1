import type { CollectionConfig } from 'payload'

const formatSlug = (value: string): string => {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/[\s_]+/g, '-')   // Replace spaces and underscores with hyphens
        .replace(/-+/g, '-')       // Remove consecutive hyphens
        .replace(/^-+|-+$/g, '')   // Trim hyphens from start/end
}

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'status', 'publishedDate'],
    },
    access: {
        read: () => true, // Public can read published posts
    },
    hooks: {
        beforeChange: [
            ({ data }) => {
                // Auto-generate slug from title if slug is empty
                if (data && !data.slug && data.title) {
                    data.slug = formatSlug(data.title)
                }
                // Always format the slug to be URL-friendly
                if (data && data.slug) {
                    data.slug = formatSlug(data.slug)
                }
                return data
            },
        ],
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
                description: 'URL-friendly version of the title (auto-generated if left empty)',
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

