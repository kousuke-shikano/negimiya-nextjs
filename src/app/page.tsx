'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
    <Header />


      {/* ヒーローセクション */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="glass max-w-5xl mx-auto text-center px-8 py-24 rounded-3xl shadow-2xl relative z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-accent-light mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            葱野みやとは？
          </motion.h2>

          <motion.h1
            className="text-5xl md:text-8xl font-black text-accent leading-tight mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            style={{ textShadow: "0 10px 30px rgba(76,175,80,0.3)" }}
          >
            セルフ受肉系Vtuber個人勢<br />
            好きなものは<br />
            ネギとアニメとねこ！
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl mb-16 opacity-90 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 1.2 }}
          >
            このサイトは葱野みやのファンが勝手に作ったネタサイトです。
          </motion.p>

          <motion.a
            href="https://www.youtube.com/@葱野みや"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-14 py-6 bg-red-600 text-white font-bold text-xl rounded-full shadow-2xl"
            whileHover={{ scale: 1.1, backgroundColor: "#dc2626" }}
            whileTap={{ scale: 0.95 }}  /* ← ここを直した！！ */
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            YouTubeチャンネルへ
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute w-96 h-96 bg-accent/30 rounded-full blur-3xl -z-10"
          animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </section>

      {/* 活動内容セクション */}
      <section id="活動内容" className="about-bg py-32">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-accent text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            活動内容
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Vtuber活動", img: "/images/Image-1.jpeg", text: "2021年デビュー。ゲーム実況・雑談・歌枠など、明るく元気な配信でみんなを笑顔に！" },
              { title: "イラストレーター", img: "/images/Image-2.jpeg", text: "可愛くて独特なタッチのイラストが大人気。ファンアートもたくさんもらってます！" },
              { title: "うたってみた", img: "/images/Image-3.jpeg", text: "透き通る歌声でアニメソングからボカロまで。心に染みる歌唱力…" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass p-8 rounded-3xl text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent-light">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <h3 className="text-3xl font-bold text-accent mb-4">{item.title}</h3>
                <p className="text-lg leading-relaxed opacity-90">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 投稿動画セクション（以下同文） */}
      <section id="投稿動画" className="works-bg py-32">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2 className="text-5xl md:text-6xl font-bold text-accent text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            投稿動画
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { title: "ハロウィン×グミ＝お祭り", video: "https://www.youtube.com/embed/iY6u2zJ9X78" },
              { title: "アルピニストとしてのプライド", video: "https://www.youtube.com/embed/FJ-lsDIjono" },
              { title: "食事を楽しみましょう", video: "https://www.youtube.com/embed/z1HCukNoFFE" },
              { title: "悲鳴はリスナーの栄養", video: "https://www.youtube.com/embed/f2vSnWngjJY" },
            ].map((item, i) => (
              <motion.div key={i} className="glass p-8 rounded-3xl" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold text-accent mb-6 text-center">{item.title}</h3>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <iframe width="100%" height="100%" src={item.video} title={item.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS・Links・フッター */}
      <section id="NEWS" className="contact-bg py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.h2 className="text-5xl md:text-6xl font-bold text-accent mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            NEWS
          </motion.h2>
          <motion.div className="glass p-12 rounded-3xl text-left text-lg leading-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <ul className="space-y-6">
              <li><span className="text-accent font-bold">2025.11.11</span> ・化野ネコさん、ついにNext.jsで葱野みや公式超えのファンサイト完成させる</li>
              <li><span className="text-accent font-bold">永遠</span> ・葱野みやは永遠に可愛い</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <footer id="Links" className="py-24 text-center bg-black/20">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-accent mb-16">Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "YouTube", url: "https://www.youtube.com/@葱野みや", color: "bg-red-600" },
              { name: "X（Twitter）", url: "https://x.com/Negi_008", color: "bg-black" },
              { name: "マシュマロ", url: "https://marshmallow-qa.com/negi_008", color: "bg-pink-400" },
              { name: "BOOTH", url: "https://neginomiya.booth.pm", color: "bg-orange-500" },
            ].map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                className={`${link.color} text-white py-6 rounded-2xl font-bold text-xl shadow-2xl hover:scale-110 transition-all block`}>
                {link.name}
              </a>
            ))}
          </div>
          <p className="mt-20 text-lg opacity-80">
            © 2025 葱野みや（本物）＆ 化野ネコ（ファンサイト作った人）<br />
            後方ガッツポーズ組、いつもありがとう！
          </p>
        </div>
      </footer>
    </>
  )
}