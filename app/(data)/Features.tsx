export default [
    {
      name: "Blog Title Generator",
      desc: "AI-powered tool to generate compelling blog titles based on your blog's niche.",
      category: "Blog",
      icon: "/templates/blog-title.png",
      aiPrompt: "Generate 5 unique and attention-grabbing blog titles based on the given niche in bullet points.",
      slug: "blog-title",
      form: [
        {
          label: "Enter your blog niche",
          field: "textarea",
          name: "niche",
          required: true
        }
      ]
    },
    {
      name: "Blog Content Generator",
      desc: "Generate high-quality blog content based on your provided niche.",
      category: "Blog",
      icon: "/templates/blog-content-icon.png",
      aiPrompt: "Create 5 detailed blog content ideas in bullet points based on the given niche.",
      slug: "blog-content",
      form: [
        {
          label: "Enter your blog niche",
          field: "textarea",
          name: "niche",
          required: true
        }
      ]
    },
    {
      name: "Blog Topic Ideas",
      desc: "Generate fresh and creative blog topic ideas tailored to your niche.",
      category: "Blog",
      icon: "/templates/blog-topic.png",
      aiPrompt: "Suggest 5 blog topic ideas in bullet points based on the provided niche and outline.",
      slug: "blog-topic-ideas",
      form: [
        {
          label: "Enter your blog niche",
          field: "textarea",
          name: "niche",
          required: true
        }
      ]
    },
    {
      name: "YouTube SEO Title Generator",
      desc: "AI tool to generate optimized YouTube video titles for better SEO performance.",
      category: "YouTube",
      icon: "/templates/youtube-seo.png",
      aiPrompt: "Generate 5 SEO-friendly YouTube video title ideas in bullet points based on the given niche.",
      slug: "youtube-seo-title",
      form: [
        {
          label: "Enter your niche or video topic",
          field: "textarea",
          name: "niche",
          required: true
        }
      ]
    },
    {
      name: "YouTube Description Generator",
      desc: "Generate engaging YouTube video descriptions to attract more viewers.",
      category: "YouTube",
      icon: "/templates/youtube-description.png",
      aiPrompt: "Create 5 YouTube video description ideas in bullet points based on the given niche.",
      slug: "youtube-description",
      form: [
        {
          label: "Enter your video topic or niche",
          field: "textarea",
          name: "niche",
          required: true
        }
      ]
    },
    {
      name: "YouTube Tags Generator",
      desc: "Generate relevant YouTube tags to improve your video visibility and ranking.",
      category: "YouTube",
      icon: "/templates/youtube-tags.png",
      aiPrompt: "Suggest 5 effective YouTube tags in bullet points based on the provided niche.",
      slug: "youtube-tags",
      form: [
        {
          label: "Enter your video topic or niche",
          field: "textarea",
          name: "niche",
          required: true
        }
      ]
    },
    {
      name: "Plagiarism-Free Article Rewriter",
      desc: "Rewrite existing articles to ensure they are plagiarism-free while maintaining quality.",
      category: "Blog",
      icon: "/templates/re-write-article.png",
      aiPrompt: "Rewrite the given article in a plagiarism-free format while retaining the original meaning.",
      slug: "rewrite-article",
      form: [
        {
          label: "Enter the article text",
          field: "textarea",
          name: "article",
          required: true
        }
      ]
    },
    {
      name: "Text Improver",
      desc: "Improve the quality of your text by making it clearer, more engaging, and professional.",
      category: "Blog",
      icon: "/templates/text-improver.png",
      aiPrompt: "Enhance the given text to make it more professional and engaging while retaining the original meaning.",
      slug: "text-improver",
      form: [
        {
          label: "Enter the text you want to improve",
          field: "textarea",
          name: "text",
          required: true
        }
      ]
    },
    {
      name: "Add Emojis to Text",
      desc: "Make your text more engaging by adding relevant emojis.",
      category: "Social Media",
      icon: "/templates/emoji.png",
      aiPrompt: "Enhance the given text by adding relevant emojis to make it more engaging and fun.",
      slug: "add-emojis-to-text",
      form: [
        {
          label: "Enter the text you want to add emojis to",
          field: "textarea",
          name: "text",
          required: true
        }
      ]
    },
    {
      name: "Instagram Post Generator",
      desc: "Create engaging Instagram post ideas based on your provided topic or niche.",
      category: "Social Media",
      icon: "/templates/instagram.png",
      aiPrompt: "Generate 5 Instagram post ideas in bullet points based on the given niche.",
      slug: "instagram-post-generator",
      form: [
        {
          label: "Enter your Instagram post topic or niche",
          field: "textarea",
          name: "niche",
          required: true
        }
      ]
    },
    {
      name: "Instagram Hashtag Generator",
      desc: "Generate effective Instagram hashtags to increase your post's reach and visibility.",
      category: "Instagram",
      icon: "/templates/hashtag.png",
      aiPrompt: "Suggest 5 relevant Instagram hashtags in bullet points based on the provided niche.",
      slug: "instagram-hashtag-generator",
      form: [
        {
          label: "Enter your post's topic or niche",
          field: "textarea",
          name: "niche",
          required: true
        }
      ]
    },
    {
        name: "TikTok Content Ideas",
        desc: "Generate creative TikTok content ideas based on your provided topic or niche.",
        category: "TikTok",
        icon: "/templates/tik-tok.png",
        aiPrompt: "Generate 5 TikTok content ideas in bullet points based on the given niche or topic.",
        slug: "tiktok-content-ideas",
        form: [
          {
            label: "Enter your TikTok niche or topic",
            field: "textarea",
            name: "niche",
            required: true
          }
        ]
    },
    
  ];
  