import { Trophy, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MediaAwards = () => {
  const highlights = [
    {
      type: 'award',
      title: 'World Economic Forum Recognition',
      description: 'Global Technology Pioneer Award 2023',
      badge: 'Award',
      icon: Trophy
    },
    {
      type: 'media',
      title: 'Featured in Inc42',
      description: 'India\'s Most Promising CleanTech Startup',
      badge: 'Media',
      icon: Star
    },
    {
      type: 'award',
      title: 'YES SCALE Award',
      description: 'Best Innovation in Renewable Energy',
      badge: 'Award',
      icon: Trophy
    }
  ];

  return (
    <section id="media" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Recognition & Media Coverage
            </h2>
            <p className="text-muted-foreground">
              Awarded by global organizations and featured in leading publications
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="card-shadow hover:elegant-shadow smooth-transition">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 primary-gradient rounded-full flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {item.badge}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Button variant="outline" className="group">
            View All Media Coverage
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaAwards;