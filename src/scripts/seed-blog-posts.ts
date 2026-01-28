import { getPayload } from 'payload'
import config from '@/payload.config'

// Existing blog posts from the old HTML site
const existingBlogPosts: any[] = [
    {
        title: 'Deep Learning DevCon (DLDC) 2023: Top Highlights and Insights',
        slug: 'deep-learning-devcon-dldc-2023-highlights',
        category: 'AI',
        tags: ['deep-learning', 'conference', 'ai'],
        excerpt:
            'Deep Learning DevCon (DLDC) 2023 has been concluded, explore here the top highlights and insights from the conference.',
        content: [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'Deep Learning DevCon (DLDC) 2023 has been concluded, explore here the top highlights and insights from the conference.',
                    },
                ],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'Read the full article on ',
                    },
                    {
                        text: 'ADASCI',
                        bold: true,
                    },
                    {
                        text: ': ',
                    },
                ],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'https://adasci.org/deep-learning-devcon-dldc-2023-wrap-unveiling-the-top-highlights-and-insights/',
                    },
                ],
            },
        ],
        status: 'published' as const,
        publishedDate: '2023-12-15T00:00:00.000Z',
    },
    {
        title: 'Generative AI in Finance: Transforming Investment Strategies',
        slug: 'generative-ai-finance-investment-strategies',
        category: 'Finance',
        tags: ['generative-ai', 'finance', 'investment', 'risk-assessment'],
        excerpt:
            'This talk highlights the importance of generative AI in finance and how it is revolutionizing investment strategies and risk assessment.',
        content: [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'This talk highlights the importance of generative AI in finance and how it is revolutionizing investment strategies and risk assessment.',
                    },
                ],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'Read the full article on ',
                    },
                    {
                        text: 'ADASCI',
                        bold: true,
                    },
                    {
                        text: ': ',
                    },
                ],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'https://adasci.org/generative-ai-in-finance-transforming-investment-strategies-and-risk-assessment-rathnakumar-udaykumar-at-dldc-2023/',
                    },
                ],
            },
        ],
        status: 'published',
        publishedDate: '2023-11-20T00:00:00.000Z',
    },
    {
        title: "AI Leaders' Responsibility in Shaping the Job Market",
        slug: 'ai-leaders-responsibility-job-market',
        category: 'Leadership',
        tags: ['ai-leadership', 'job-market', 'automation', 'workforce'],
        excerpt:
            'Encouraging a culture of continuous learning within organizations is vital, as is advocating for policies that facilitate a smooth transition for the workforce.',
        content: [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'Encouraging a culture of continuous learning within organizations is vital, as is advocating for policies that facilitate a smooth transition for the workforce.',
                    },
                ],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'Read the full article on ',
                    },
                    {
                        text: 'AIM Research',
                        bold: true,
                    },
                    {
                        text: ': ',
                    },
                ],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'https://aimresearch.co/council-posts/council-post-ai-leaders-responsibility-in-shaping-the-job-market-amidst-intelligent-automation',
                    },
                ],
            },
        ],
        status: 'published',
        publishedDate: '2023-10-10T00:00:00.000Z',
    },
    {
        title: 'SMART Strategy to Create Your Goals for 2025',
        slug: 'smart-strategy-goals-2025',
        category: 'Product',
        tags: ['productivity', 'goals', 'smart-strategy', 'planning'],
        excerpt:
            'Learn the SMART strategy to create the goals that you wish to achieve in 2025 to step ahead from others.',
        content: [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'Learn the SMART strategy to create the goals that you wish to achieve in 2025 to step ahead from others.',
                    },
                ],
            },
            {
                type: 'h2',
                children: [{ text: 'What is SMART?' }],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'SMART is an acronym that stands for Specific, Measurable, Achievable, Relevant, and Time-bound.',
                    },
                ],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'This article will be published soon with detailed insights on how to set effective goals for 2025.',
                    },
                ],
            },
        ],
        status: 'draft',
        publishedDate: '2025-01-01T00:00:00.000Z',
    },
    {
        title: 'Corporate Scholarships for Students in 2025',
        slug: 'corporate-scholarships-students-2025',
        category: 'Tech',
        tags: ['education', 'scholarships', 'students', 'career'],
        excerpt:
            'Learn how to get the amazing corporate scholarships for students in 2025 and accelerate your career.',
        content: [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'Learn how to get the amazing corporate scholarships for students in 2025 and accelerate your career.',
                    },
                ],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'This comprehensive guide will cover top corporate scholarship programs, eligibility criteria, and application tips.',
                    },
                ],
            },
            {
                type: 'paragraph',
                children: [{ text: 'Coming soon!' }],
            },
        ],
        status: 'draft',
        publishedDate: '2025-02-01T00:00:00.000Z',
    },
    {
        title: 'Research on Unicorn Founders: 15-Year Analysis',
        slug: 'unicorn-founders-15-year-analysis',
        category: 'Leadership',
        tags: ['startups', 'unicorns', 'founders', 'research', 'entrepreneurship'],
        excerpt:
            'Fascinating research results about unicorn founders and what patterns emerge from the last 15 years of startup success.',
        content: [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'Fascinating research results about unicorn founders and what patterns emerge from the last 15 years of startup success.',
                    },
                ],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'This in-depth analysis will reveal key traits, backgrounds, and decision-making patterns of successful unicorn founders.',
                    },
                ],
            },
            {
                type: 'paragraph',
                children: [{ text: 'Stay tuned for the full research paper!' }],
            },
        ],
        status: 'draft',
        publishedDate: '2025-03-01T00:00:00.000Z',
    },
]

async function seedBlogPosts() {
    console.log('🌱 Starting blog post seeding...')

    try {
        const payload = await getPayload({ config })

        // Get the first user to set as author
        const users = await payload.find({
            collection: 'users',
            limit: 1,
        })

        const authorId = users.docs[0]?.id

        if (!authorId) {
            console.error('❌ No users found. Please create an admin user first via /admin')
            return
        }

        console.log(`✅ Found author: ${users.docs[0].email}`)

        // Create each blog post
        for (const postData of existingBlogPosts) {
            // Check if post already exists
            const existingPosts = await payload.find({
                collection: 'posts',
                where: {
                    slug: {
                        equals: postData.slug,
                    },
                },
                limit: 1,
            })

            if (existingPosts.docs.length > 0) {
                console.log(`⏭️  Skipping "${postData.title}" - already exists`)
                continue
            }

            // Create the post
            await payload.create({
                collection: 'posts',
                data: {
                    ...postData,
                    author: authorId,
                },
            })

            console.log(`✅ Created: "${postData.title}" (${postData.status})`)
        }

        console.log('🎉 Blog post seeding completed!')
        console.log(`📊 Total posts: ${existingBlogPosts.length}`)
        console.log(
            `📝 Published: ${existingBlogPosts.filter((p) => p.status === 'published').length}`
        )
        console.log(`📋 Drafts: ${existingBlogPosts.filter((p) => p.status === 'draft').length}`)
    } catch (error) {
        console.error('❌ Error seeding blog posts:', error)
        throw error
    }
}

// Run the seed function
seedBlogPosts()
    .then(() => {
        console.log('✅ Seeding process finished successfully')
        process.exit(0)
    })
    .catch((error) => {
        console.error('❌ Seeding process failed:', error)
        process.exit(1)
    })
