import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import Image from 'next/image'

export const revalidate = 600 // Revalidate every 10 minutes

export default async function BlogPage() {
    const payload = await getPayload({ config })

    const posts = await payload.find({
        collection: 'posts',
        where: {
            status: {
                equals: 'published',
            },
        },
        sort: '-publishedDate',
        limit: 100,
    })

    // Group posts by category for filtering
    const categories = ['All', 'AI', 'Finance', 'Leadership', 'Product', 'Tech']

    // Interface for Post to avoid 'any'
    interface Post {
        id: string
        title: string
        slug: string
        category?: string
        excerpt?: string
        featuredImage?: string | { url: string }
    }

    return (
        <main>
            {/* Blog - Combined Header and Posts */}
            <section className="section section--page-header" id="ai">
                <div className="container">
                    <span className="page-header__label">Insights</span>
                    <h1 className="page-header__title">Blog</h1>
                    <p className="page-header__subtitle">
                        Get updated with the latest AI solutions and Technology Trends
                    </p>

                    {/* Category Filter */}
                    <div style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                        <div className="flex gap-3 flex-wrap">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`btn ${category === 'All' ? 'btn--accent' : 'btn--outline'}`}
                                    style={{ fontSize: 'var(--font-size-sm)', padding: '0.5rem 1rem' }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.docs.length === 0 ? (
                            <div className="col-span-full text-center" style={{ padding: 'var(--space-12) 0' }}>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>
                                    No blog posts yet. Check back soon!
                                </p>
                            </div>
                        ) : (
                            posts.docs.map((post: unknown) => {
                                const p = post as Post;
                                return (
                                    <article key={p.id} className="card">
                                        {p.featuredImage && (
                                            <div className="card__image">
                                                <Image
                                                    src={
                                                        typeof p.featuredImage === 'string'
                                                            ? p.featuredImage
                                                            : p.featuredImage.url || '/images/placeholder.jpg'
                                                    }
                                                    alt={p.title}
                                                    width={400}
                                                    height={250}
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                        <div className="card__body">
                                            <span className="text-small" style={{ color: 'var(--color-text-muted)' }}>
                                                {p.category || 'Uncategorized'}
                                            </span>
                                            <h4 className="card__title" style={{ marginTop: 'var(--space-2)' }}>
                                                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                                            </h4>
                                            {p.excerpt && <p className="card__text">{p.excerpt}</p>}
                                            <Link
                                                href={`/blog/${p.slug}`}
                                                className="text-small"
                                                style={{ fontWeight: 'var(--font-semibold)' }}
                                            >
                                                Read More →
                                            </Link>
                                        </div>
                                    </article>
                                )
                            })
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}
