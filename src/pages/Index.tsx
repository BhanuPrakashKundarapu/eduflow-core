import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8 shadow-[var(--shadow-elegant)]">
            <GraduationCap className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Educational Institution
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Management System
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Streamline your institution's operations with our comprehensive management platform. 
            Handle colleges, departments, courses, and student attendance all in one place.
          </p>
          
          <Button 
            onClick={() => navigate("/auth")}
            size="lg"
            className="text-lg px-8 py-6 rounded-xl shadow-[var(--shadow-elegant)] hover:scale-105 transition-transform"
          >
            Get Started
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-6xl mx-auto">
          <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-[var(--shadow-elegant)] transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">User Management</h3>
            <p className="text-muted-foreground">
              Efficiently manage faculty and students with role-based access control and comprehensive profiles.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-[var(--shadow-elegant)] transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Course Management</h3>
            <p className="text-muted-foreground">
              Organize courses, sections, and academic terms with ease. Track enrollments and assignments.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-[var(--shadow-elegant)] transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Analytics & Reports</h3>
            <p className="text-muted-foreground">
              Generate comprehensive reports on attendance, fees, and academic performance with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
