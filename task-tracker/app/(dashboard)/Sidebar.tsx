'use client';

import styles from '@/styles/sidebar.module.scss';
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, CheckSquare, House, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  const handleLogout = async () => {    
    await signOut({ redirect: true, callbackUrl: "/login" });
  };
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoSection}>
        <Image
          src="/logo.png"
          alt="Task Flow"
          width={42}
          height={42}
        />

        <h1>
          Task <span>Flow</span>
        </h1>
      </div>

      <nav className={styles.navLinks}>
        <Link href="/dashboard">
          <House size={22} />
          <span>Dashboard</span>
        </Link>

        <Link href="/tasks">
          <CheckSquare size={22} />
          <span>Tasks</span>
        </Link>
        <button onClick={handleLogout}>
          <LogOut size={22} />
          <span>Logout</span>
        </button>
      </nav>

      <div className={styles.bottomSection}>
        <p>Task Flow © 2026</p>
      </div>
    </aside>
  );
}