import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { sendContactEmail, ContactFormData } from "@/services/emailService";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  business: z.string().min(2, "Business name must be at least 2 characters"),
  location: z.string().min(2, "Location is required"),
  service: z.string().optional(),
  budget: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormType = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export default function ContactForm({ className = "", onSuccess, compact = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
  });

  const watchedService = watch("service");
  const watchedBudget = watch("budget");

  const onSubmit = async (data: ContactFormType) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendContactEmail(data);
      if (success) {
        setSubmitStatus('success');
        reset();
        if (onSuccess) {
          onSuccess();
        }
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Healthcare Website",
    "Restaurant Website",
    "E-commerce Store",
    "Service Business Website",
    "Fitness/Gym Website",
    "SEO Services",
    "Custom Solution"
  ];

  const budgets = [
    "₹15,000 - ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹75,000",
    "₹75,000+"
  ];

  const locations = [
    "Pune",
    "Mumbai",
    "Thane",
    "Navi Mumbai",
    "Pimpri-Chinchwad",
    "Other Maharashtra",
    "Other Location"
  ];

  return (
    <div className={className}>
      {submitStatus === 'success' && (
        <Alert className="mb-6 border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-700">
            Thank you! Your message has been sent successfully. We'll get back to you within 2 hours.
          </AlertDescription>
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-700">
            Sorry, there was an error sending your message. Please try again or contact us directly at sales@nextreachstudio.com
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {!compact && (
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-white">First Name *</Label>
              <Input
                {...register("firstName")}
                id="firstName"
                placeholder="John"
                className="mt-1 bg-white/10 border-white/20 text-white placeholder-white/60"
                disabled={isSubmitting}
              />
              {errors.firstName && (
                <p className="text-red-300 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName" className="text-white">Last Name *</Label>
              <Input
                {...register("lastName")}
                id="lastName"
                placeholder="Doe"
                className="mt-1 bg-white/10 border-white/20 text-white placeholder-white/60"
                disabled={isSubmitting}
              />
              {errors.lastName && (
                <p className="text-red-300 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>
        )}

        {compact && (
          <div>
            <Label htmlFor="fullName" className="text-white">Full Name *</Label>
            <div className="grid md:grid-cols-2 gap-2 mt-1">
              <Input
                {...register("firstName")}
                placeholder="First Name"
                className="bg-white/10 border-white/20 text-white placeholder-white/60"
                disabled={isSubmitting}
              />
              <Input
                {...register("lastName")}
                placeholder="Last Name"
                className="bg-white/10 border-white/20 text-white placeholder-white/60"
                disabled={isSubmitting}
              />
            </div>
            {(errors.firstName || errors.lastName) && (
              <p className="text-red-300 text-sm mt-1">
                {errors.firstName?.message || errors.lastName?.message}
              </p>
            )}
          </div>
        )}

        <div>
          <Label htmlFor="email" className="text-white">Email Address *</Label>
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="john@example.com"
            className="mt-1 bg-white/10 border-white/20 text-white placeholder-white/60"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="business" className="text-white">Business Name *</Label>
          <Input
            {...register("business")}
            id="business"
            placeholder="Your Business/Clinic Name"
            className="mt-1 bg-white/10 border-white/20 text-white placeholder-white/60"
            disabled={isSubmitting}
          />
          {errors.business && (
            <p className="text-red-300 text-sm mt-1">{errors.business.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="location" className="text-white">Location *</Label>
          <Select onValueChange={(value) => setValue("location", value)} disabled={isSubmitting}>
            <SelectTrigger className="mt-1 bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Select your location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.location && (
            <p className="text-red-300 text-sm mt-1">{errors.location.message}</p>
          )}
        </div>

        {!compact && (
          <div>
            <Label htmlFor="phone" className="text-white">Phone Number</Label>
            <Input
              {...register("phone")}
              id="phone"
              type="tel"
              placeholder="+91-XXXXXXXXXX"
              className="mt-1 bg-white/10 border-white/20 text-white placeholder-white/60"
              disabled={isSubmitting}
            />
          </div>
        )}

        <div>
          <Label htmlFor="service" className="text-white">Service Needed</Label>
          <Select onValueChange={(value) => setValue("service", value)} disabled={isSubmitting}>
            <SelectTrigger className="mt-1 bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="budget" className="text-white">Budget Range</Label>
          <Select onValueChange={(value) => setValue("budget", value)} disabled={isSubmitting}>
            <SelectTrigger className="mt-1 bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgets.map((budget) => (
                <SelectItem key={budget} value={budget}>
                  {budget}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message" className="text-white">Tell us about your project *</Label>
          <Textarea
            {...register("message")}
            id="message"
            placeholder="Tell us about your business, website goals, and any specific requirements..."
            className="mt-1 bg-white/10 border-white/20 text-white placeholder-white/60 min-h-24"
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}