"use client";

import { Plus } from "lucide-react";
import styles from '@/styles/dashboard.module.scss';
import { useRouter } from "next/navigation";


export default function Dashboard() {
  const router = useRouter();
    return (
      <>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Welcome Dakshna!</h1>
            <p>Here's what happening today</p>
          </div>
          <Plus className={styles.createTask} onClick={() => router.push('tasks/create')}/>
        </div>
      </>
      
    )
}