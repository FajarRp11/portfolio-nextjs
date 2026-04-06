"use client";

import * as React from "react";

import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Code2,
  Terminal,
  Wrench,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Navigation",
      items: [
        {
          title: "Dashboard",
          url: "/admin/dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: "Content Management",
      items: [
        {
          title: "Skills",
          url: "/admin/skills",
          icon: Code2,
        },
        {
          title: "Technologies",
          url: "/admin/technologies",
          icon: Terminal,
        },
        {
          title: "Services",
          url: "/admin/services",
          icon: Wrench,
        },
        {
          title: "Projects",
          url: "/admin/projects",
          icon: FolderGit2,
        },
        {
          title: "Work Experience",
          url: "/admin/work-experience",
          icon: Briefcase,
        },
        {
          title: "Education",
          url: "/admin/education",
          icon: GraduationCap,
        },
        {
          title: "Certificates",
          url: "/admin/certificates",
          icon: Award,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <item.icon className="h-4 w-4" />
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
