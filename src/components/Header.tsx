// src/components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = ['活動内容', '投稿動画', 'NEWS', 'Links']

    return (
        <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-xl border-b border-accent/20'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            {/* ロゴ */}
            <motion.h1
            className="text-2xl md:text-3xl font-black text-accent tracking-tight"
            whileHover={{ scale: 1.05 }}
            >
            葱野みやファンサイト
            </motion.h1>

            {/* PCナビ */}
            <nav className="hidden lg:flex gap-12">
            {navItems.map((item) => (
                <a
                key={item}
                href={`#${item}`}
                className="text-lg font-medium text-accent-light hover:text-accent transition-all duration-300 hover:translate-y-[-2px]"
                >
                {item}
                </a>
            ))}
            </nav>

    {/* ハンバーガーボタン（完璧×バージョン） */}
        <button
        className="lg:hidden z-50 relative w-10 h-10"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="メニューを開く"
        >
        {/* 上の棒 → ×の右上 */}
        <motion.span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-8 h-0.5 bg-accent origin-center"
            animate={{
            rotate: mobileOpen ? 45 : 0,
            y: mobileOpen ? 0 : -8,
            }}
            transition={{ duration: 0.3 }}
        />
        {/* 中の棒 → 消える */}
        <motion.span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-8 h-0.5 bg-accent"
            animate={{
            opacity: mobileOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
        />
        {/* 下の棒 → ×の左下 */}
        <motion.span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-8 h-0.5 bg-accent origin-center"
            animate={{
            rotate: mobileOpen ? -45 : 0,
            y: mobileOpen ? 0 : 8,
            }}
            transition={{ duration: 0.3 }}
        />
    </button>
    </div>

    {/* モバイルメニュー（完璧版） */}
    {mobileOpen && (
            <>
            {/* 背景オーバーレイ（タップで閉じる＋スクロールロック） */}
            <motion.div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
            />

            {/* 実際のメニュー本体（スライドイン） */}
            <motion.div
                className="fixed right-0 top-0 bottom-0 w-80 bg-gradient-to-b from-white/98 to-accent/10 backdrop-blur-2xl lg:hidden z-50 shadow-2xl"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 300 }}
            >
                <div className="flex flex-col items-center justify-center h-full gap-16">
                {navItems.map((item, i) => (
                    <motion.a
                    key={item}
                    href={`#${item}`}
                    className="text-5xl font-black text-accent tracking-tight"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => setMobileOpen(false)}
                    >
                    {item}
                    </motion.a>
                ))}
                </div>
            </motion.div>
            </>
        )}

        {/* bodyスクロール完全ロック（メニュー開いてる時だけ） */}
        {mobileOpen && (
            <style jsx global>{`
            body {
                overflow: hidden !important;
            }
            `}</style>
        )}
        </motion.header>
    )
}