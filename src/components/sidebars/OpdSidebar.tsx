
import React from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart2,
  Database,
  FileText,
  Users,
  PieChart,
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

interface OpdSidebarProps {
  collapsed?: boolean;
}

const OpdSidebar: React.FC<OpdSidebarProps> = ({ collapsed = false }) => {
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
            <h3 className="text-sm font-bold">Dinas Kependudukan</h3>
            <p className="text-xs text-gray-500">OPD Admin</p>
          </div>
        </div>
      )}

      <SidebarSection title="Dashboard" collapsed={collapsed}>
        <SidebarItem icon={BarChart2} title="Dashboard OPD" to="/admin/opd" collapsed={collapsed} />
      </SidebarSection>

      <SidebarSection title="Manajemen" collapsed={collapsed}>
        <SidebarItem icon={Database} title="Kelola Data" to="/admin/opd/data" collapsed={collapsed} />
        <SidebarItem icon={FileText} title="Kelola Metadata" to="/admin/opd/metadata" collapsed={collapsed} />
        <SidebarItem icon={Users} title="Kelola Pengguna OPD" to="/admin/opd/users" collapsed={collapsed} />
      </SidebarSection>

      <SidebarSection title="Laporan" collapsed={collapsed}>
        <SidebarItem icon={PieChart} title="Statistik & Laporan" to="/admin/opd/reports" collapsed={collapsed} />
      </SidebarSection>

      <SidebarSection title="Akun" collapsed={collapsed}>
        <SidebarItem icon={User} title="Profil Saya" to="/admin/opd/profile" collapsed={collapsed} />
        <SidebarItem icon={LogOut} title="Logout" to="/login" collapsed={collapsed} />
      </SidebarSection>
    </nav>
  );
};

export default OpdSidebar;
