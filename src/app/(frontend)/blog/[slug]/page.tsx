import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

// Generate static paths for all published posts (optional - for static generation)
export async function generateStaticParams() {
    const payload = await getPayload({ config })

    const posts = await payload.find({
        collection: 'posts',
        where: {
            status: {
                equals: 'published',
            },
        },
        limit: 1000,
    })

    return posts.docs.map((post: any) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const payload = await getPayload({ config })

    const posts = await payload.find({
        collection: 'posts',
        where: {
            slug: {
                equals: slug,
            },
        },
        limit: 1,
    })

    const post = posts.docs[0]

    if (!post || post.status !== 'published') {
        notFound()
    }

    // Format date
    const publishedDate = post.publishedDate
        ? new Date(post.publishedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        : ''

    return (
        <main>
            {/* Blog Post Header */}
            <section
                className="section--free"
                style={{
                    paddingTop: 'calc(var(--header-height) + 2rem)',
                    paddingBottom: '2rem',
                    background: 'var(--color-gray-50)',
                }}
            >
                <div className="container" style={{ maxWidth: '800px' }}>
                    {/* Breadcrumb */}
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                        <Link
                            href="/blog"
                            className="text-small"
                            style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}
                        >
                            ← Back to Blog
                        </Link>
                    </div>

                    {/* Category & Date */}
                    <div style={{ marginBottom: 'var(--space-3)' }}>
                        <span
                            className="text-small"
                            style={{
                                color: 'var(--color-primary)',
                                fontWeight: 'var(--font-semibold)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                            }}
                        >
                            {post.category || 'Uncategorized'}
                        </span>
                        {publishedDate && (
                            <span className="text-small" style={{ color: 'var(--color-text-muted)', marginLeft: 'var(--space-3)' }}>
                                {publishedDate}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h1 style={{ marginBottom: 'var(--space-4)' }}>{post.title}</h1>

                    {/* Excerpt */}
                    {post.excerpt && (
                        <p className="hero__subtitle" style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-4)' }}>
                            {post.excerpt}
                        </p>
                    )}

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex gap-2 flex-wrap">
                            {post.tags.map((tagItem: any, index: number) => {
                                const tagText = typeof tagItem === 'string' ? tagItem : tagItem?.tag || '';
                                return (
                                    <span
                                        key={index}
                                        className="text-small"
                                        style={{
                                            background: 'var(--color-gray-100)',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: 'var(--radius-full)',
                                            color: 'var(--color-text)',
                                        }}
                                    >
                                        #{tagText}
                                    </span>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Featured Image */}
            {post.featuredImage && (
                <section className="section--free">
                    <div className="container" style={{ maxWidth: '1200px', padding: '0' }}>
                        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                            <Image
                                src={
                                    typeof post.featuredImage === 'string'
                                        ? post.featuredImage
                                        : post.featuredImage.url || '/images/placeholder.jpg'
                                }
                                alt={post.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Blog Post Content */}
            <section className="section--free" style={{ padding: '3rem 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <article className="prose">
                        {/* Render Rich Text Content */}
                        {post.content && <RenderRichText content={post.content} />}
                    </article>

                    {/* Author Info (if needed later) */}
                    <div
                        style={{
                            marginTop: 'var(--space-12)',
                            paddingTop: 'var(--space-6)',
                            borderTop: '1px solid var(--color-gray-200)',
                        }}
                    >
                        <p className="text-small" style={{ color: 'var(--color-text-muted)' }}>
                            Written by <strong>Rathnakumar</strong>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

// Simple Rich Text Renderer for Payload Lexical Editor
function RenderRichText({ content }: { content: any }): React.ReactElement | null {
    if (!content) return null;

    // Lexical content structure usually has a 'root' object
    const nodes = content.root ? content.root.children : content;

    if (!Array.isArray(nodes)) {
        return null;
    }

    return (
        <div className="rich-text">
            {nodes.map((node: any, index: number) => (
                <RenderNode key={index} node={node} />
            ))}
        </div>
    );
}

function RenderNode({ node }: { node: any }) {
    if (!node) return null;

    // Handle different node types
    switch (node.type) {
        case 'heading':
            const HeadingTag = node.tag as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
            return <HeadingTag>{renderChildren(node.children)}</HeadingTag>

        case 'paragraph':
            return <p>{renderChildren(node.children)}</p>

        case 'list':
            const ListTag = node.tag === 'ol' ? 'ol' : 'ul'
            return <ListTag className="list-inside mb-4">{renderChildren(node.children)}</ListTag>

        case 'listitem':
            return <li>{renderChildren(node.children)}</li>

        case 'quote':
            return blockquote({ children: renderChildren(node.children) })

        case 'link':
            return (
                <a href={node.fields?.url || '#'} target={node.fields?.newTab ? "_blank" : "_self"} rel={node.fields?.newTab ? "noopener noreferrer" : undefined}>
                    {renderChildren(node.children)}
                </a>
            )

        case 'text':
            let text = node.text
            if (node.format & 1) text = <strong>{text}</strong> // Bold
            if (node.format & 2) text = <em>{text}</em> // Italic
            if (node.format & 8) text = <u>{text}</u> // Underline
            if (node.format & 16) text = <code>{text}</code> // Code
            return <>{text}</>

        case 'linebreak':
            return <br />

        default:
            return <p>{renderChildren(node.children)}</p>
    }
}

function blockquote({ children }: { children: React.ReactNode }) {
    return <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
}


function renderChildren(children: any[]) {
    if (!children || !Array.isArray(children)) {
        return null
    }

    return children.map((child: any, index: number) => (
        <RenderNode key={index} node={child} />
    ))
}
