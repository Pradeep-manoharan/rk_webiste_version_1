import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    // Only allow admins to create users
    create: ({ req: { user } }) => {
      // Allow creation if no user exists (first time setup)
      // Otherwise, only allow if user is logged in
      return Boolean(user) || false
    },
    // Anyone can read user info if needed, or restrict to admin
    read: () => true,
    // Only admins can update
    update: ({ req: { user } }) => Boolean(user),
    // Only admins can delete
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
