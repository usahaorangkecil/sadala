
import React from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart2,
  Users,
  Settings,
  Database,
  FileText,
  Eye,
  Activity,
  Link,
  Layout,
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

interface PemkabSidebarProps {
  collapsed?: boolean;
}

const PemkabSidebar: React.FC<PemkabSidebarProps> = ({ collapsed = false }) => {
  return (
    <nav className="py-4">
      {!collapsed && (
        <div className="px-4 mb-6">
          <img 
            src="/lovable-uploads/323b466a-00c8-4cae-ae5d-8c00d89f1996.png" 
            alt="SADALA Logo" 
            className="h-12 mx-auto" 
          />
        </div>
      )}

      <SidebarSection title="Dashboard" collapsed={collapsed}>
        <SidebarItem icon={BarChart2} title="Dashboard Utama" to="/admin/pemkab" collapsed={collapsed} />
      </SidebarSection>

      <SidebarSection title="Manajemen" collapsed={collapsed}>
        <SidebarItem icon={Users} title="Manajemen OPD" to="/admin/pemkab/opd" collapsed={collapsed} />
        <SidebarItem icon={Users} title="Manajemen Pengguna" to="/admin/pemkab/users" collapsed={collapsed} />
        <SidebarItem icon={Database} title="Manajemen Data Global" to="/admin/pemkab/data" collapsed={collapsed} />
      </SidebarSection>

      <SidebarSection title="Validasi" collapsed={collapsed}>
        <SidebarItem icon={FileText} title="Validasi Metadata" to="/admin/pemkab/validation" collapsed={collapsed} />
      </SidebarSection>

      <SidebarSection title="Pemantauan" collapsed={collapsed}>
        <SidebarItem icon={Activity} title="Monitoring Aktivitas" to="/admin/pemkab/monitoring" collapsed={collapsed} />
        <SidebarItem icon={Link} title="Integrasi Sistem" to="/admin/pemkab/integration" collapsed={collapsed} />
      </SidebarSection>

      <SidebarSection title="Pengaturan" collapsed={collapsed}>
        <SidebarItem icon={Layout} title="Pengaturan Website" to="/admin/pemkab/website-settings" collapsed={collapsed} />
        <SidebarItem icon={PieChart} title="Laporan & Statistik" to="/admin/pemkab/reports" collapsed={collapsed} />
      </SidebarSection>

      <SidebarSection title="Akun" collapsed={collapsed}>
        <SidebarItem icon={User} title="Profil Saya" to="/admin/pemkab/profile" collapsed={collapsed} />
        <SidebarItem icon={LogOut} title="Logout" to="/login" collapsed={collapsed} />
      </SidebarSection>
    </nav>
  );
};

export default PemkabSidebar;
