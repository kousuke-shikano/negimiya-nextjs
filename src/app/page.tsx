// src/app/page.tsx
import Image from 'next/image';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Loadingは別ファイルで管理 */}
        
        {/* ヘッダー */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider animate-pulse text-green-400">
              葱野みやファンサイト
            </h1>
            <p className="text-sm md:text-lg opacity-80">Vtuber・ゲーム実況・歌ってみた</p>
          </div>
        </header>

        {/* メインヒーロー */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/parallax1.jpg" // 後でpublicに置く
              alt="背景"
              fill
              priority
              className="object-cover opacity-40"
            />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-8xl md:text-9xl font-black tracking-wider text-green-400 drop-shadow-2xl animate-pulse">
              NEGIMIYA
            </h2>
            <p className="text-2xl mt-8 tracking-widest">セルフ受肉系Vtuber個人勢(*'▽'*)</p>
          </div>
        </section>

        {/* 好きなもの */}
        <section className="py-20 text-center">
          <h3 className="text-5xl font-bold mb-10">好きなものは</h3>
          <div className="flex justify-center gap-12 text-6xl">
            <span className="animate-bounce">ネギ</span>
            <span className="animate-bounce delay-200">アニメ</span>
            <span className="animate-bounce delay-500">ねこ！</span>
          </div>
          <p className="mt-10 text-xl opacity-80">
            このサイトは葱野みやのファンが勝手に作ったネタサイトです。
          </p>
        </section>

        {/* YouTubeリンク */}
        <section className="text-center py-16 bg-green-900/30">
          <a
            href="https://www.youtube.com/@negimiya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-6 bg-red-600 hover:bg-red-700 rounded-full text-3xl font-bold transition-all hover:scale-110"
          >
            YouTubeチャンネルへ
          </a>
        </section>
      </main>
    </Suspense>
  );
}