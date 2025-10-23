import { FileText, UserCheck, CreditCard, GraduationCap, Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const AdministrationProcess = () => {
  const processes = [
    {
      icon: FileText,
      title: "Admission",
      description: "Apply online, submit documents, and track your application status",
      steps: ["Online Application", "Document Submission", "Entrance Exam", "Interview", "Acceptance Letter"],
    },
    {
      icon: UserCheck,
      title: "Registration",
      description: "Enroll in courses and complete semester registration",
      steps: ["Course Selection", "Schedule Approval", "Payment", "Student ID Activation"],
    },
    {
      icon: CreditCard,
      title: "Financial Services",
      description: "Manage tuition payments, scholarships, and financial aid",
      steps: ["Tuition Payment", "Scholarship Application", "Financial Aid Request", "Payment Plans"],
    },
    {
      icon: BookOpen,
      title: "Academic Services",
      description: "Access transcripts, grades, and academic records",
      steps: ["Grade Inquiry", "Transcript Request", "Course Evaluation", "Academic Advising"],
    },
    {
      icon: Award,
      title: "Certification",
      description: "Request official documents and certifications",
      steps: ["Letter Request", "Certificate Application", "Verification Services", "Document Collection"],
    },
    {
      icon: GraduationCap,
      title: "Graduation",
      description: "Complete graduation requirements and ceremony registration",
      steps: ["Requirement Check", "Application Submission", "Gown Fitting", "Ceremony Registration"],
    },
  ];

  return (
    <section id="administration" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Student Services
            </span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Administration Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive guide to essential administrative procedures and services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {processes.map((process) => {
            const Icon = process.icon;
            return (
              <Card
                key={process.title}
                className="p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant bg-card group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-card">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {process.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {process.description}
                </p>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Process Steps:
                  </div>
                  <ol className="space-y-1.5">
                    {process.steps.map((step, index) => (
                      <li
                        key={index}
                        className="text-sm text-foreground flex items-center gap-2"
                      >
                        <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-semibold flex-shrink-0">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdministrationProcess;
