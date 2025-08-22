import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const LatestNews = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Powermat partners with Jetsons Robotics for industrial wireless charging",
      excerpt: "A strategic partnership announcement for advancing wireless charging solutions in industrial robotics applications.",
      date: "January 20, 2021",
      source: "TechCrunch",
      link: "https://techcrunch.com/2021/01/20/wireless-charging-tech-developer-powermat-pivots-to-industrial-applications-with-jetsons-robotics-partnerhsip/",
      image: "/news_media/powermat-robotics-wireless-charigng-2.webp"
    },
    {
      id: 2,
      title: "8 Indian startups among 37 global finalists – JETRO Global Connection",
      excerpt: "Jetsons Robotics selected among elite Indian startups for international recognition and global expansion opportunities.",
      date: "October 2019",
      source: "YourStory",
      link: "https://yourstory.com/2019/10/8-indian-startups-among-37-global-startups",
      image: "/news_media/8_indian_startup.avif"
    },
    {
      id: 3,
      title: "Startups solving Japan's challenges at CEATEC 2021 – JETRO Global Connection",
      excerpt: "Innovative solutions presented at Japan's premier technology exhibition, showcasing robotics capabilities for industrial challenges.",
      date: "October 2021",
      source: "INTERNET Watch (Japan)",
      link: "https://internet.watch.impress.co.jp/docs/news/1359274.html",
      image: "/news_media/jt-01_l.jpg"
    },
    {
      id: 4,
      title: "Incubator IIT Kanpur celebrates India's 79th Independence Day",
      excerpt: "A celebration of India's 79th Independence Day by Incubator IIT Kanpur, an event shared on LinkedIn.",
      date: "August 2025",
      source: "LinkedIn",
      link: "https://www.linkedin.com/posts/incubatoriitk_celebrating-indias-79th-independence-day-activity-7362132762482397184-h6rJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkGCxwB96v-WoW0CLrB10dbw4yWqVe-bdc",
      image: "/partner_logos/ecosysterm/iitk_incubation.png"
    },
    {
      id: 5,
      title: "DigiAnalysys interview with Jetsons Robotics",
      excerpt: "Jatin Sharma, co-founder of Flip Robotics, discusses the company's focus on automating solar panel cleaning and future plans for warehouse automation.",
      date: "Recent",
      source: "YouTube Video",
      link: "https://www.youtube.com/watch?v=TAlZPfDdGOM&ab_channel=DigiAnalysys",
      image: "/news_media/digi_interview.png"
    }
  ];

  const handleReadMore = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleViewMoreNews = () => {
    window.location.href = '/news';
  };

  return (
    <section id="news" className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Latest News
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest developments and achievements from Jetsons Robotics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newsArticles.slice(0, 3).map((article, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border hover:border-primary/20 overflow-hidden rounded-xl bg-white">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center"><div class="text-2xl font-bold text-primary">${article.source.charAt(0)}</div></div>`;
                    }
                  }}
                />
              </div>
              
              <CardHeader className="space-y-3 p-6">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{article.date}</span>
                  </div>
                  <Badge variant="outline" className="text-xs font-semibold">{article.source}</Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {article.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-4 p-6 pt-0">
                <p className="text-muted-foreground line-clamp-3 leading-relaxed text-sm">
                  {article.excerpt}
                </p>
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary-dark transition-colors"
                  onClick={() => handleReadMore(article.link)}
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More News Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="group px-8 py-3 text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={handleViewMoreNews}
          >
            View More News
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;