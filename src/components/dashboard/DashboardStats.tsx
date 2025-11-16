import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Layers, BookOpen, Users, Calendar, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const DashboardStats = () => {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => {
      const [colleges, departments, courses, sections, terms, profiles] = await Promise.all([
        supabase.from("colleges").select("*", { count: "exact", head: true }),
        supabase.from("departments").select("*", { count: "exact", head: true }),
        supabase.from("courses").select("*", { count: "exact", head: true }),
        supabase.from("sections").select("*", { count: "exact", head: true }),
        supabase.from("academic_terms").select("*", { count: "exact", head: true }),
        supabase.from("profiles").select("*", { count: "exact", head: true }),
      ]);

      return {
        colleges: colleges.count ?? 0,
        departments: departments.count ?? 0,
        courses: courses.count ?? 0,
        sections: sections.count ?? 0,
        terms: terms.count ?? 0,
        users: profiles.count ?? 0,
      };
    },
  });

  const statCards = [
    { title: "Colleges", value: stats?.colleges ?? 0, icon: Building2, color: "text-blue-500" },
    { title: "Departments", value: stats?.departments ?? 0, icon: Layers, color: "text-purple-500" },
    { title: "Courses", value: stats?.courses ?? 0, icon: BookOpen, color: "text-green-500" },
    { title: "Active Terms", value: stats?.terms ?? 0, icon: Calendar, color: "text-orange-500" },
    { title: "Sections", value: stats?.sections ?? 0, icon: Users, color: "text-pink-500" },
    { title: "Total Users", value: stats?.users ?? 0, icon: Users, color: "text-cyan-500" },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statCards.map((stat) => (
        <Card key={stat.title} className="border-border hover:shadow-[var(--shadow-elegant)] transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={cn("w-5 h-5", stat.color)} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;