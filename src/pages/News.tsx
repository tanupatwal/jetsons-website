import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const News = () => {
  const navigate = useNavigate();
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const newsArticles = [
    {
      id: 1,
      slug: "powermat-partnership",
      title: "Powermat partners with Jetsons Robotics for industrial wireless charging",
      date: "January 20, 2021",
      readTime: "3 min read",
      author: "TechCrunch",
      source: "TechCrunch",
      link: "https://techcrunch.com/2021/01/20/wireless-charging-tech-developer-powermat-pivots-to-industrial-applications-with-jetsons-robotics-partnerhsip/",
      excerpt: "A strategic partnership announcement for advancing wireless charging solutions in industrial robotics applications.",
      image: "/news_media/powermat-robotics-wireless-charigng-2.webp",
      isExternal: true,
      content: `
        <p>This article is available on <strong>TechCrunch</strong>. Click the link below to read the full story.</p>
        <p><a href="https://techcrunch.com/2021/01/20/wireless-charging-tech-developer-powermat-pivots-to-industrial-applications-with-jetsons-robotics-partnerhsip/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Read on TechCrunch →</a></p>
      `
    },
    {
      id: 2,
      slug: "jetro-global-finalists",
      title: "8 Indian startups among 37 global finalists – JETRO Global Connection",
      date: "October 2019",
      readTime: "4 min read",
      author: "YourStory",
      source: "YourStory",
      link: "https://yourstory.com/2019/10/8-indian-startups-among-37-global-startups",
      excerpt: "Jetsons Robotics selected among elite Indian startups for international recognition and global expansion opportunities.",
      image: "/news_media/8_indian_startup.avif",
      isExternal: true,
      content: `
        <p>This article is available on <strong>YourStory</strong>. Click the link below to read the full story.</p>
        <p><a href="https://yourstory.com/2019/10/8-indian-startups-among-37-global-startups" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Read on YourStory →</a></p>
      `
    },
    {
      id: 3,
      slug: "ceatec-2021-startups",
      title: "Startups solving Japan's challenges at CEATEC 2021 – JETRO Global Connection",
      date: "October 2021",
      readTime: "5 min read",
      author: "INTERNET Watch",
      source: "INTERNET Watch (Japan)",
      link: "https://internet.watch.impress.co.jp/docs/news/1359274.html",
      excerpt: "Innovative solutions presented at Japan's premier technology exhibition, showcasing robotics capabilities for industrial challenges.",
      image: "/news_media/jt-01_l.jpg",
      isExternal: true,
      content: `
        <p>This article is available on <strong>INTERNET Watch (Japan)</strong>. Click the link below to read the full story.</p>
        <p><a href="https://internet.watch.impress.co.jp/docs/news/1359274.html" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Read on INTERNET Watch →</a></p>
      `
    },
    {
      id: 4,
      slug: "iitk-independence-day",
      title: "Incubator IIT Kanpur celebrates India's 79th Independence Day",
      date: "August 2025",
      readTime: "2 min read",
      author: "IIT Kanpur Incubator",
      source: "LinkedIn",
      link: "https://www.linkedin.com/posts/incubatoriitk_celebrating-indias-79th-independence-day-activity-7362132762482397184-h6rJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkGCxwB96v-WoW0CLrB10dbw4yWqVe-bdc",
      excerpt: "A celebration of India's 79th Independence Day by Incubator IIT Kanpur, an event shared on LinkedIn.",
      image: "/partner_logos/ecosysterm/iitk_incubation.png",
      isExternal: true,
      content: `
        <p>This post is available on <strong>LinkedIn</strong>. Click the link below to read the full post.</p>
        <p><a href="https://www.linkedin.com/posts/incubatoriitk_celebrating-indias-79th-independence-day-activity-7362132762482397184-h6rJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkGCxwB96v-WoW0CLrB10dbw4yWqVe-bdc" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">View on LinkedIn →</a></p>
      `
    },
    {
      id: 5,
      slug: "digianalysys-interview",
      title: "DigiAnalysys interview with Jetsons Robotics",
      date: "Recent",
      readTime: "Watch Video",
      author: "DigiAnalysys",
      source: "YouTube Video",
      link: "https://www.youtube.com/watch?v=TAlZPfDdGOM&ab_channel=DigiAnalysys",
      excerpt: "Jatin Sharma, co-founder of Flip Robotics, discusses the company's focus on automating solar panel cleaning and future plans for warehouse automation.",
      image: "/news_media/digi_interview.png",
      isExternal: true,
      content: `
        <p>This video interview is available on <strong>DigiAnalysys YouTube channel</strong>. Click the link below to watch.</p>
        <p><a href="https://www.youtube.com/watch?v=TAlZPfDdGOM&ab_channel=DigiAnalysys" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Watch on YouTube →</a></p>
      `
    }
  ];

  useEffect(() => {
    // Check for hash in URL to scroll to specific article
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setSelectedArticle(hash);
    }
  }, []);

  const goToHome = () => {
    navigate('/');
  };

  const handleArticleClick = (slug: string) => {
    setSelectedArticle(selectedArticle === slug ? null : slug);
    window.location.hash = slug;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center space-y-6 mb-16">
            <Button
              variant="outline"
              onClick={goToHome}
              className="group mb-8 bg-white hover:bg-gray-50 border-gray-200 shadow-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Home
            </Button>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                News & Updates
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay informed about the latest developments, innovations, and achievements from Jetsons Robotics
              </p>
            </div>
          </div>

          {/* News Articles Grid */}
          <div className="space-y-8">
            {newsArticles.map((article) => (
              <Card 
                key={article.id} 
                className={`group cursor-pointer hover:shadow-xl transition-all duration-300 border overflow-hidden ${
                  selectedArticle === article.slug ? 'border-primary shadow-lg' : 'border-border hover:border-primary/20'
                }`}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Article Image */}
                  <div className="aspect-[16/10] md:aspect-square overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Article Content */}
                  <div className="md:col-span-2 p-6">
                    <CardHeader className="p-0 space-y-3">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <Badge variant="outline">News</Badge>
                      </div>
                      
                      <h2 
                        className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer"
                        onClick={() => handleArticleClick(article.slug)}
                      >
                        {article.title}
                      </h2>
                    </CardHeader>
                    
                    <CardContent className="p-0 mt-4">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex gap-4">
                        <Button 
                          variant="ghost" 
                          className="p-0 h-auto font-medium text-primary hover:text-primary-dark"
                          onClick={() => handleArticleClick(article.slug)}
                        >
                          {selectedArticle === article.slug ? 'Hide Details' : 'Show Details'}
                        </Button>
                        {article.isExternal && (
                          <Button 
                            variant="outline" 
                            className="px-4 py-2 text-sm"
                            onClick={() => window.open(article.link, '_blank', 'noopener,noreferrer')}
                          >
                            Visit {article.source} →
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
                
                {/* Full Article Content */}
                {selectedArticle === article.slug && (
                  <div className="border-t bg-muted/10 p-6">
                    <div 
                      className="prose prose-lg max-w-none text-foreground"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;