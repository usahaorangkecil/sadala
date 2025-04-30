
import React from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart2,
  Upload,
  FileText,
  User,
  LogOut
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ElementType;
  title: string;
  to: string;
  collapsed?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, title, to, collapsed }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-4 py-3 text-sm transition-colors ${
          isActive
            ? "bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-500"
            : "text-gray-600 hover:bg-gray-50"
        }`
      }
    >
      <Icon className="h-5 w-5 shrink-0" />
      {!collapsed && <span className="ml-3">{title}</span>}
    </NavLink>
  );
};

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  collapsed?: boolean;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children, collapsed }) => {
  return (
    <div className="py-2">
      {!collapsed && (
        <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {title}
        </h3>
      )}
      <div>{children}</div>
    </div>
  );
};

interface EditorSidebarProps {
  collapsed?: boolean;
}

const EditorSidebar: React.FC<EditorSidebarProps> = ({ collapsed = false }) => {
  return (
    <nav className="py-4">
      {!collapsed && (
        <div className="px-4 mb-6">
          <img 
            src="/lovable-uploads/323b466a-00c8-4cae-ae5d-8c00d89f1996.png" 
            alt="SADALA Logo" 
            className="h-12 mx-auto" 
          />
          <div className="text-center mt-2">
            <p className="text-xs text-gray-500">Editor OPD</p>
          </div>
        </div>
      )}

      <SidebarSection title="Dashboard" collapsed={collapsed}>
        <SidebarItem icon={BarChart2} title="Dashboard Pribadi" to="/admin/editor" collapsed={collapsed} />
      </SidebarSection>

      <SidebarSection title="Data" collapsed={collapsed}>
        <SidebarItem icon={Upload} title="Upload Data" to="/admin/editor/upload" collapsed={collapsed} />
        <SidebarItem icon={FileText} title="Riwayat Upload" to="/admin/editor/history" collapsed={collapsed} />
      </SidebarSection>

      <SidebarSection title="Akun" collapsed={collapsed}>
        <SidebarItem icon={User} title="Profil Saya" to="/admin/editor/profile" collapsed={collapsed} />
        <SidebarItem icon={LogOut} title="Logout" to="/login" collapsed={collapsed} />
      </SidebarSection>
    </nav>
  );
};

export default EditorSidebar;
