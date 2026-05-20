'use client';

import styles from '@/styles/layout.module.scss';
import Sidebar from './Sidebar';

export default function Applayout({ children }: { children: React.ReactNode }) {
    return(
        <div className={styles.container}>
            <Sidebar />
            <main className={styles.main}>{children}</main>
        </div>
    )
}