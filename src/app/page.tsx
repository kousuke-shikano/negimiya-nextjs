'use client';
import Image from 'next/image';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* ヘッダー（固定 + ハンバーガーメニュー対応） */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md px-6 py-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-green-400 scramble-text">
              葱野みやファンサイト｜Vtuber・ゲーム実況・歌ってみた
            </h1>
          </div>
        </header>

        {/* 第1パララックス + 葱野みやとは？ */}
        <section className="relative h-screen flex items-center justify-center pt-20 parallax-bg" style={{ backgroundImage: "url('/parallax1.jpg')" }}>
          <div className="absolute inset-0 opacity-30">
            <Image src="/parallax1.jpg" alt="パララックス1" fill className="object-cover" />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-8xl font-black text-green-400 drop-shadow-2xl">葱野みやとは？</h2>
            <p className="mt-8 text-2xl max-w-2xl mx-auto">
              # セルフ受肉系Vtuber個人勢(*'▽'*)<br />
              好きなものはネギとアニメとねこ！<br />
              このサイトは葱野みやのファンが勝手に作ったネタサイトです。
            </p>
            <a
              href="https://www.youtube.com/@negimiya" // 実際URLに
              className="inline-block mt-8 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full text-xl font-bold transition-all"
            >
              YouTubeチャンネルへ
            </a>
          </div>
        </section>

        {/* 活動内容セクション */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-16 text-green-400">↓活動内容↓</h2>
            
            {/* Vtuber活動 */}
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Vtuber活動</h3>
                <p className="text-lg opacity-90">
                  葱野みやは、2021年にデビューしたバーチャルYouTuber（Vtuber）です。彼女は主にゲーム実況や歌ってみた動画を投稿しており、その明るい性格と魅力的な声で多くのファンを獲得しています。...（続きは元のHTMLからコピー）
                </p>
              </div>
              
              {/* イラストレーター */}
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">イラストレーター</h3>
                <p className="text-lg opacity-90">イラストレーターとしても活動しており、...（続きコピー）</p>
              </div>
              
              {/* うたってみた */}
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">うたってみた</h3>
                <p className="text-lg opacity-90">葱野みやは、歌ってみた動画も人気があります。...（続きコピー）</p>
              </div>
            </div>
          </div>
        </section>

        {/* 第2パララックス */}
        <section className="relative h-screen flex items-center justify-center parallax-bg" style={{ backgroundImage: "url('/parallax2.jpg')" }}>
          <div className="absolute inset-0 opacity-30">
            <Image src="/parallax2.jpg" alt="パララックス2" fill className="object-cover" />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold">↓動画・アーカイブ↓</h2>
          </div>
        </section>

        {/* 動画アーカイブセクション */}
        <section className="py-20 container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* ハロウィン×グミ */}
            <div className="bg-green-900/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">ハロウィン×グミ＝お祭り</h3>
              <p>25種類のグミを使ってハロウィンパーティーを開催！...（続きコピー）</p>
              <Image src="/gumi-thumb.jpg" alt="グミ" width={300} height={200} className="mt-4 rounded" />
            </div>
            
            {/* アルピニストとしてのプライド */}
            <div className="bg-green-900/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">アルピニストとしてのプライド</h3>
              <p>登山ゲーム「PEAK」を...（続き）</p>
            </div>
            
            {/* 食事を楽しみましょう */}
            <div className="bg-green-900/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">食事を楽しみましょう</h3>
              <p>葱野みやは、食事を楽しむことも大好きです。...（続き）</p>
            </div>
            
            {/* 悲鳴はリスナーの栄養 */}
            <div className="bg-green-900/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">悲鳴はリスナーの栄養</h3>
              <p>葱野みやは、ホラー実況も得意としています。...（続き）</p>
            </div>
            
            {/* 心の葛藤 */}
            <div className="bg-green-900/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">心の葛藤</h3>
              <p>葱野みやは、活動を続けていく中で、心の葛藤を抱えることもあります。...（続き）</p>
            </div>
            
            {/* 伸びろーッ！ */}
            <div className="bg-green-900/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">「伸びろーッ！」</h3>
              <p>（続きコピー）</p>
            </div>
          </div>
        </section>

        {/* NEWSセクション（Markdown化準備） */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-12 text-green-400">NEWS</h2>
            <ul className="space-y-4 max-w-2xl mx-auto">
              <li className="border-l-4 border-green-400 pl-4">
                <strong>2025.11.03</strong> ・配信追加しました グミ配信を追加しました ・文化の日なので文化的にコードをいじる
              </li>
              <li className="border-l-4 border-green-400 pl-4">
                <strong>2025.10.28</strong> ・配信追加しました PEAK配信を追加しました ・更新頻度激落ちくん。
              </li>
              {/* 他のNEWSを続きでコピー */}
            </ul>
          </div>
        </section>

        {/* ちびみやクリック効果（JS移植） */}
        <div
          className="fixed bottom-6 right-6 z-50 cursor-pointer"
          onClick={() => {
            alert('ちびみやが飛び散った！かわいい！');
          }}
        >
          <Image
            src="/chibi-miya.png"
            alt="ちびみや"
            width={80}
            height={80}
            className="rounded-full drop-shadow-2xl hover:scale-110 transition-transform"
          />
        </div>
      </main>
    </Suspense>
  );
}