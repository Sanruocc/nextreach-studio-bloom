import { motion } from "motion/react";
import { MapPin, Calendar, ExternalLink, TrendingUp } from "lucide-react";
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle, EnhancedCardDescription } from "./EnhancedCard";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  layout?: 'card' | 'detailed' | 'featured';
  showResults?: boolean;
  onClick?: () => void;
}

export const ProjectCard = ({ 
  project, 
  layout = 'card', 
  showResults = true,
  onClick 
}: ProjectCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  if (layout === 'featured') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="col-span-full"
      >
        <EnhancedCard 
          variant="elevated" 
          hoverEffect="lift" 
          interactive={!!onClick}
          onClick={onClick}
          className="overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <motion.img
                src={project.images[0]?.src || '/placeholder.svg'}
                alt={project.images[0]?.alt || project.title}
                className="w-full h-64 md:h-full object-cover"
                variants={imageVariants}
                whileHover="hover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-white/90 text-gray-900">
                  {project.client.industry}
                </Badge>
              </div>
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
                    Featured
                  </Badge>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
              <EnhancedCardHeader className="p-0 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{project.client.location}</span>
                  <Calendar className="w-4 h-4 ml-2" />
                  <span>{project.timeline.duration}</span>
                </div>
                <EnhancedCardTitle className="text-2xl mb-2">
                  {project.title}
                </EnhancedCardTitle>
                <EnhancedCardDescription className="text-base">
                  {project.challenge.substring(0, 150)}...
                </EnhancedCardDescription>
              </EnhancedCardHeader>

              {/* Key Results */}
              {showResults && project.results.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                    Key Results
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.results.slice(0, 2).map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="text-center p-3 bg-muted/50 rounded-lg"
                      >
                        <div className="text-2xl font-bold text-primary mb-1">
                          {result.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {result.metric}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech.name}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Testimonial Preview */}
              {project.testimonial && (
                <div className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg">
                  <p className="text-sm italic text-muted-foreground mb-2">
                    "{project.testimonial.content.substring(0, 100)}..."
                  </p>
                  <div className="text-xs font-medium">
                    {project.testimonial.author}, {project.testimonial.company}
                  </div>
                </div>
              )}
            </div>
          </div>
        </EnhancedCard>
      </motion.div>
    );
  }

  if (layout === 'detailed') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <EnhancedCard 
          variant="elevated" 
          hoverEffect="lift" 
          interactive={!!onClick}
          onClick={onClick}
          className="h-full"
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-t-xl">
            <motion.img
              src={project.images[0]?.src || '/placeholder.svg'}
              alt={project.images[0]?.alt || project.title}
              className="w-full h-48 object-cover"
              variants={imageVariants}
              whileHover="hover"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-white/90 text-gray-900">
                {project.client.industry}
              </Badge>
            </div>
          </div>

          <EnhancedCardContent className="p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <MapPin className="w-4 h-4" />
              <span>{project.client.location}</span>
            </div>

            <EnhancedCardTitle className="text-xl mb-3">
              {project.title}
            </EnhancedCardTitle>

            <EnhancedCardDescription className="mb-4 line-clamp-3">
              {project.challenge}
            </EnhancedCardDescription>

            {/* Key Metric */}
            {showResults && project.results.length > 0 && (
              <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg mb-4">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-semibold text-green-700 dark:text-green-400">
                    {project.results[0].value} {project.results[0].improvement}
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-500">
                    {project.results[0].metric}
                  </div>
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tech.name}
                </Badge>
              ))}
            </div>
          </EnhancedCardContent>
        </EnhancedCard>
      </motion.div>
    );
  }

  // Default card layout
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <EnhancedCard 
        variant="default" 
        hoverEffect="lift" 
        interactive={!!onClick}
        onClick={onClick}
        className="h-full group cursor-pointer"
      >
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-xl">
          <motion.img
            src={project.images[0]?.src || '/placeholder.svg'}
            alt={project.images[0]?.alt || project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="w-5 h-5 text-white" />
          </div>
        </div>

        <EnhancedCardContent className="p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <MapPin className="w-4 h-4" />
            <span>{project.client.location}</span>
          </div>

          <EnhancedCardTitle className="text-lg mb-2">
            {project.client.name}
          </EnhancedCardTitle>

          <EnhancedCardDescription className="mb-4 line-clamp-2">
            {project.challenge.substring(0, 120)}...
          </EnhancedCardDescription>

          {/* Key Result */}
          {showResults && project.results.length > 0 && (
            <div className="text-center p-3 bg-primary/10 rounded-lg">
              <div className="text-lg font-bold text-primary">
                {project.results[0].value}
              </div>
              <div className="text-xs text-muted-foreground">
                {project.results[0].improvement} in {project.results[0].metric}
              </div>
            </div>
          )}
        </EnhancedCardContent>
      </EnhancedCard>
    </motion.div>
  );
};

export default ProjectCard;