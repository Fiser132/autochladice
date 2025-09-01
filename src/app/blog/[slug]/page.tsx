import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// This would typically come from a CMS or database
const blogPosts = [
  {
    slug: 'diagnostika-autochladicov',
    title: 'Diagnostika autochladičov',
    content: 'Komplexná diagnostika autochladičov pomocou moderných technológií...',
    date: '2024-01-15',
    author: 'Tím autoservisu'
  },
  {
    slug: 'oprava-autochladicov',
    title: 'Oprava autochladičov',
    content: 'Profesionálna oprava autochladičov všetkých značiek...',
    date: '2024-01-10',
    author: 'Tím autoservisu'
  },
  {
    slug: 'vyroba-hlinikovych-dielov',
    title: 'Výroba hliníkových dielov',
    content: 'Špecializovaná výroba hliníkových dielov podľa vašich požiadaviek...',
    date: '2024-01-05',
    author: 'Tím autoservisu'
  },
  {
    slug: 'zvarenie-hlinika-bratislava',
    title: 'Zváranie hliníka Bratislava',
    content: 'Profesionálne zváranie hliníka v Bratislave s dlhoročnými skúsenosťami...',
    date: '2024-01-01',
    author: 'Tím autoservisu'
  }
];

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Článok nenájdený',
    };
  }

  return {
    title: `${post.title} - Blog`,
    description: post.content.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 text-sm">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('sk-SK')}
              </time>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {post.content}
            </p>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Potrebujete pomoc s vaším autochladičom?
              </h3>
              <p className="text-gray-600 mb-4">
                Kontaktujte nás pre profesionálnu diagnostiku a opravu vašich autochladičov.
              </p>
              <Link
                href="/#kontakt"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Kontaktovať nás
              </Link>
            </div>
          </div>
        </article>
        
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            ← Späť na blog
          </Link>
        </div>
      </div>
    </div>
  );
}
