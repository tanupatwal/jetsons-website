import { MapPin, Calendar, Zap, Droplets, Leaf, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const majorProjects = [
    {
      name: 'Bhadla Solar Park',
      location: 'Rajasthan, India',
      capacity: '2,245 MW',
      type: 'Utility-Scale',
      status: 'Operational',
      panels: '450M+',
      savings: '15M+ Liters',
      completion: '2023',
      image: '/placeholder.svg?height=200&width=300',
      description: 'World\'s largest solar park featuring our autonomous cleaning robots across multiple phases.'
    },
    {
      name: 'Rewa Ultra Mega Solar',
      location: 'Madhya Pradesh, India',
      capacity: '750 MW',
      type: 'Utility-Scale',
      status: 'Operational',
      panels: '200M+',
      savings: '8M+ Liters',
      completion: '2023',
      image: '/placeholder.svg?height=200&width=300',
      description: 'One of India\'s largest single-location solar plants with comprehensive automated cleaning.'
    },
    {
      name: 'Pavagada Solar Park',
      location: 'Karnataka, India',
      capacity: '2,050 MW',
      type: 'Utility-Scale',
      status: 'Operational',
      panels: '380M+',
      savings: '12M+ Liters',
      completion: '2022',
      image: '/placeholder.svg?height=200&width=300',
      description: 'Ultra-mega solar park with advanced robotic cleaning infrastructure.'
    },
    {
      name: 'Industrial Solar Plants',
      location: 'Upleta, Gujarat',
      capacity: '150 MW',
      type: 'Industrial',
      status: 'Operational',
      panels: '45M+',
      savings: '3M+ Liters',
      completion: '2023',
      image: '/placeholder.svg?height=200&width=300',
      description: 'Multiple industrial-scale installations with customized cleaning solutions.'
    },
    {
      name: 'Commercial Solar Network',
      location: 'Hyderabad, Telangana',
      capacity: '85 MW',
      type: 'Commercial',
      status: 'Operational',
      panels: '25M+',
      savings: '2M+ Liters',
      completion: '2022',
      image: '/placeholder.svg?height=200&width=300',
      description: 'Network of commercial buildings with integrated smart cleaning systems.'
    },
    {
      name: 'Urban Solar Initiative',
      location: 'Mumbai, Maharashtra',
      capacity: '120 MW',
      type: 'Urban',
      status: 'Operational',
      panels: '35M+',
      savings: '2.5M+ Liters',
      completion: '2023',
      image: '/placeholder.svg?height=200&width=300',
      description: 'Urban rooftop and ground-mounted installations with portable cleaning solutions.'
    }
  ];

  const impactMetrics = [
    {
      title: 'Water Saved',
      value: '70M+',
      unit: 'Liters',
      projection: '5-Year Goal',
      icon: Droplets,
      color: 'text-blue-500'
    },
    {
      title: 'Solar Yield Restored',
      value: '15M',
      unit: 'Units',
      projection: 'Annual',
      icon: Zap,
      color: 'text-primary'
    },
    {
      title: 'Carbon Offset',
      value: '6M+',
      unit: 'Tons CO2',
      projection: '5-Year Impact',
      icon: Leaf,
      color: 'text-green-500'
    },
    {
      title: 'Efficiency Improvement',
      value: '15%',
      unit: 'Average',
      projection: 'Per Installation',
      icon: TrendingUp,
      color: 'text-orange-500'
    }
  ];

  const sdgGoals = [
    { goal: 7, title: 'Affordable and Clean Energy', icon: '⚡' },
    { goal: 8, title: 'Decent Work and Economic Growth', icon: '💼' },
    { goal: 9, title: 'Industry, Innovation and Infrastructure', icon: '🏭' },
    { goal: 11, title: 'Sustainable Cities and Communities', icon: '🏙️' },
    { goal: 13, title: 'Climate Action', icon: '🌍' }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary">
            Our Impact
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Transforming Solar 
            <span className="text-primary"> Infrastructure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From utility-scale solar parks to urban installations, our robotic cleaning solutions 
            are optimizing solar performance across India's renewable energy landscape.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <Card key={index} className="card-shadow hover:elegant-shadow smooth-transition text-center">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-muted/50`}>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">{metric.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{metric.unit}</div>
                  <div className="text-xs text-primary">{metric.projection}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Major Projects Grid */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground">Major Project Deployments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorProjects.map((project, index) => (
              <Card key={index} className="card-shadow hover:elegant-shadow smooth-transition group">
                <CardHeader className="p-0">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 smooth-transition"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg font-bold text-foreground">{project.name}</CardTitle>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground">{project.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Capacity:</span>
                        <div className="font-semibold text-primary">{project.capacity}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Panels:</span>
                        <div className="font-semibold text-foreground">{project.panels}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Water Saved:</span>
                        <div className="font-semibold text-blue-500">{project.savings}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Completed:</span>
                        <div className="font-semibold text-foreground">{project.completion}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Badge 
                        variant="secondary" 
                        className={project.status === 'Operational' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}
                      >
                        {project.status}
                      </Badge>
                      <Button variant="ghost" size="sm" className="text-primary">
                        View Details →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* UN SDG Goals */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-foreground">
            Contributing to UN Sustainable Development Goals
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {sdgGoals.map((sdg, index) => (
              <Card key={index} className="card-shadow hover:elegant-shadow smooth-transition cursor-pointer group">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-4xl group-hover:scale-110 smooth-transition">{sdg.icon}</div>
                  <div>
                    <div className="font-bold text-foreground">Goal {sdg.goal}</div>
                    <div className="text-xs text-muted-foreground mt-1">{sdg.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center space-y-6 bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground">
            Ready to Transform Your Solar Installation?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of solar operators who have increased their energy output 
            and reduced maintenance costs with our robotic cleaning solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="primary-gradient">
              Schedule Site Assessment
            </Button>
            <Button size="lg" variant="outline">
              Download Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;