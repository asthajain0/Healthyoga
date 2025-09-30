import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Heart, Brain, Leaf } from "lucide-react";

const Info = () => {
  return (
    <div className="min-h-screen pb-20 calm-gradient">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-12 animate-fade-in text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Learn More</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Yoga & Wellness
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the ancient practice of yoga and its benefits for modern wellness
          </p>
        </div>

        <div className="space-y-6 animate-fade-in">
          <Card className="p-6 card-gradient shadow-card border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  What is Yoga?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Yoga is an ancient practice that originated in India over 5,000 years ago. 
                  It combines physical postures (asanas), breathing techniques (pranayama), 
                  and meditation to promote physical, mental, and spiritual well-being.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 card-gradient shadow-card border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Health Benefits
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Improves flexibility and strength</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Reduces stress and anxiety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Enhances respiratory and cardiovascular health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Improves sleep quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Supports digestion and metabolism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Promotes better posture and balance</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6 card-gradient shadow-card border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is yoga suitable for beginners?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Absolutely! Yoga is for everyone, regardless of age, fitness level, or flexibility. 
                      Start with beginner-friendly poses and gradually progress at your own pace.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How often should I practice?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Even 10-15 minutes daily can make a difference. For best results, aim for 
                      3-5 sessions per week. Consistency is more important than duration.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>When is the best time to practice?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      The best time is when you can be consistent. Morning practice energizes you for the day, 
                      while evening practice helps you unwind. Choose what fits your schedule.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Do I need special equipment?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      A yoga mat is helpful but not essential when starting. Comfortable clothing that 
                      allows movement is all you really need. Props like blocks or straps can be added later.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Can yoga help with specific health issues?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, yoga can complement medical treatment for various conditions like back pain, 
                      digestive issues, stress, and sleep problems. However, always consult your healthcare 
                      provider before starting a new practice, especially if you have health concerns.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </Card>

          <Card className="p-6 card-gradient shadow-card border-primary/20 border-2">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Important Safety Note
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              While yoga is generally safe, always listen to your body and respect its limits. 
              If you have any medical conditions, injuries, or concerns, consult with a healthcare 
              professional before beginning a yoga practice. Never push through pain, and always 
              read the contraindications for each pose.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Info;
