import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Users,
  Calendar,
  BookOpen,
  Trophy,
  MessageCircle,
  GraduationCap,
  Star,
  Heart,
  Award,
  ShieldCheck,
  FileText,
  Wallet,
  Sparkles,
  TrendingUp,
  Clock, // added
  MapPin, // added
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Data kelas XI.F7 Wabifosvenn
  const classInfo = {
    name: "XI.F7 (Wabifosvenn)",
    motto: "Where Innovation Meets Friendship",
    year: "2025-2026",
    teacher: "Syafni Anita Putri, S.Pd.",
    vision:
      "Menjadi kelas yang unggul dalam akademik, aktif dalam kegiatan, dan solid dalam persaudaraan.",
    values: [
      { icon: Sparkles, text: "Kreatif & Inovatif" },
      { icon: TrendingUp, text: "Prestasi Akademik" },
      { icon: Heart, text: "Saling Mendukung" },
      { icon: ShieldCheck, text: "Integritas Tinggi" },
    ],
  };

  // Struktur kepengurusan
  const leadershipStructure = [
    {
      role: "Ketua Kelas",
      name: "ODELIO JULYUS HENDRI",
      color: "from-indigo-500 to-purple-600",
      icon: ShieldCheck,
    },
    {
      role: "Wakil Ketua Kelas",
      name: "AGHA ARYASATYA INKHA",
      color: "from-purple-500 to-pink-500",
      icon: Users,
    },
    {
      role: "Sekretaris",
      name: "HIKMATUL SYAHRANI & ZIFANA LETISHA ANANTHA",
      color: "from-blue-500 to-cyan-500",
      icon: FileText,
    },
    {
      role: "Bendahara",
      name: "NAILA SEPTI HAMDANI & NIKEISHA AUFA HUMAIRA",
      color: "from-emerald-500 to-teal-500",
      icon: Wallet,
    },
    {
      role: "Seksi Keamanan",
      name: "MAULANA ARRASYID & NADIF ABIYYU",
      color: "from-amber-500 to-orange-500",
      icon: ShieldCheck,
    },
  ];

  // Daftar 36 siswa (dengan koreksi spasi di image URL)
  const students = [
    {
      id: 1,
      name: "AGHA ARYASATYA INKHA",
      role: "Wakil Ketua Kelas",
      image: "https://placehold.co/120x120/4f46e5/white?text=AA",
    },
    {
      id: 2,
      name: "AIRIL FURQAN",
      role: "Anggota",
      image: "https://placehold.co/120x120/1e40af/white?text=AF",
    },
    {
      id: 3,
      name: "FAJRI FEBRIANSYAH",
      role: "Anggota",
      image: "https://placehold.co/120x120/1e3a8a/white?text=FF",
    },
    {
      id: 4,
      name: "FATHIMAH AZZAHRA",
      role: "Anggota",
      image: "https://placehold.co/120x120/ec4899/white?text=FA",
    },
    {
      id: 5,
      name: "HANIN AS-SYAHIDAH",
      role: "Anggota",
      image: "https://placehold.co/120x120/be185d/white?text=HA",
    },
    {
      id: 6,
      name: "HIKMATUL SYAHRANI",
      role: "Sekretaris",
      image: "https://placehold.co/120x120/0891b2/white?text=HS",
    },
    {
      id: 7,
      name: "JIHAN OKTRI HANY",
      role: "Anggota",
      image: "https://placehold.co/120x120/0e7490/white?text=JO",
    },
    {
      id: 8,
      name: "KELVIN ALTHAF HERNANDO",
      role: "Anggota",
      image: "https://placehold.co/120x120/0ea5e9/white?text=KA",
    },
    {
      id: 9,
      name: "LATIFAH RAMADHANI",
      role: "Anggota",
      image: "https://placehold.co/120x120/0284c7/white?text=LR",
    },
    {
      id: 10,
      name: "M. RAKHA ALFARIZI",
      role: "Anggota",
      image: "https://placehold.co/120x120/7c3aed/white?text=MR",
    },
    {
      id: 11,
      name: "MAULANA ARRASYID",
      role: "Seksi Keamanan",
      image: "https://placehold.co/120x120/6d28d9/white?text=MA",
    },
    {
      id: 12,
      name: "MEVIOLA NURUL ANANTA",
      role: "Anggota",
      image: "https://placehold.co/120x120/c084fc/white?text=MN",
    },
    {
      id: 13,
      name: "MUHAMMAD AIDIL IKHLAS",
      role: "Anggota",
      image: "https://placehold.co/120x120/a855f7/white?text=MA",
    },
    {
      id: 14,
      name: "MUHAMMAD FAJRUL FALAH",
      role: "Anggota",
      image: "https://placehold.co/120x120/9333ea/white?text=MF",
    },
    {
      id: 15,
      name: "MUHAMMAD HAFIZ IRDI",
      role: "Anggota",
      image: "https://placehold.co/120x120/7e22ce/white?text=MH",
    },
    {
      id: 16,
      name: "MUHAMMAD HERITH IRFAN",
      role: "Anggota",
      image: "https://placehold.co/120x120/10b981/white?text=MH",
    },
    {
      id: 17,
      name: "MUHAMMAD MUSYAFA ADAM",
      role: "Anggota",
      image: "https://placehold.co/120x120/059669/white?text=MM",
    },
    {
      id: 18,
      name: "MUHAMMAD RADITHYA ADIFFY",
      role: "Anggota",
      image: "https://placehold.co/120x120/14b8a6/white?text=MR",
    },
    {
      id: 19,
      name: "NADIF ABIYYU",
      role: "Seksi Keamanan",
      image: "https://placehold.co/120x120/0f766e/white?text=NA",
    },
    {
      id: 20,
      name: "NAILA SEPTI HAMDANI",
      role: "Bendahara",
      image: "https://placehold.co/120x120/f59e0b/white?text=NS",
    },
    {
      id: 21,
      name: "NAWREL PUTRA DIWA ARMANSYAH",
      role: "Anggota",
      image: "https://placehold.co/120x120/d97706/white?text=NP",
    },
    {
      id: 22,
      name: "NAYLA SALLY KIRANA",
      role: "Anggota",
      image: "https://placehold.co/120x120/f97316/white?text=NS",
    },
    {
      id: 23,
      name: "NIKEISHA AUFA HUMAIRA",
      role: "Bendahara",
      image: "https://placehold.co/120x120/ea580c/white?text=NA",
    },
    {
      id: 24,
      name: "ODELIO JULYUS HENDRI",
      role: "Ketua Kelas",
      image: "/images/odelio.jpg",
    },
    {
      id: 25,
      name: "QAILANI SAFITRI",
      role: "Anggota",
      image: "https://placehold.co/120x120/ec4899/white?text=QS",
    },
    {
      id: 26,
      name: "RAFA HANIFIO ARLEY",
      role: "Anggota",
      image: "https://placehold.co/120x120/ef4444/white?text=RH",
    },
    {
      id: 27,
      name: "RAVIL FERNANDES RAMADHAN",
      role: "Anggota",
      image: "https://placehold.co/120x120/dc2626/white?text=RF",
    },
    {
      id: 28,
      name: "ROHIB ALBUQHORI",
      role: "Anggota",
      image: "https://placehold.co/120x120/94a3b8/white?text=RA",
    },
    {
      id: 29,
      name: "SHAWAL ANDHIKA",
      role: "Anggota",
      image: "https://placehold.co/120x120/64748b/white?text=SA",
    },
    {
      id: 30,
      name: "SHELVIRA SYAHFITRI",
      role: "Anggota",
      image: "https://placehold.co/120x120/475569/white?text=SS",
    },
    {
      id: 31,
      name: "SUCI RAHMADIAH ELVYRA",
      role: "Anggota",
      image: "https://placehold.co/120x120/1e293b/white?text=SR",
    },
    {
      id: 32,
      name: "VAULINNE DWI DEZA ASRI",
      role: "Anggota",
      image: "https://placehold.co/120x120/0f172a/white?text=VD",
    },
    {
      id: 33,
      name: "YUSUF FEBRIANTO",
      role: "Anggota",
      image: "https://placehold.co/120x120/7c2d12/white?text=YF",
    },
    {
      id: 34,
      name: "ZHAFIRA FAUZIYA DANIA",
      role: "Anggota",
      image: "https://placehold.co/120x120/b45309/white?text=ZF",
    },
    {
      id: 35,
      name: "ZIFANA LETISHA ANANTHA",
      role: "Sekretaris",
      image: "https://placehold.co/120x120/16a34a/white?text=ZL",
    },
    {
      id: 36,
      name: "ZORA ZELDA FEBRIYAN",
      role: "Anggota",
      image: "https://placehold.co/120x120/15803d/white?text=ZZ",
    },
  ];

  // Event dengan detail lengkap
  const events = [
    {
      id: 1,
      title: "Pelaksana Upacara Bendera",
      date: "19 Januari 2026",
      time: "07.00 - 08.00",
      location: "Lapangan Sekolah",
      description: "Kami menjadi petugas upacara bendera bulan Januari",
      icon: Calendar,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Class Meeting XI",
      date: "Soon",
      time: "08.00 - 15.00",
      location: "Lapangan Sekolah",
      description: "Kompetisi olahraga dan kreativitas antar kelas",
      icon: Trophy,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Kultum Jumat",
      date: "21 November 2025",
      time: "07.00 - 08.00",
      location: "Lapangan Sekolah",
      description:
        "Menyampaikan kultum singkat di depan seluruh siswa dan guru",
      icon: GraduationCap,
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Kegiatan Sosial",
      date: "Soon",
      time: "Soon",
      location: "Soon",
      description: "Berbagi kasih dengan sesama melalui donasi dan kegiatan",
      icon: Heart,
      color: "bg-amber-500",
    },
  ];

  // Testimoni
  const testimonials = [
    {
      id: 1,
      quote:
        "Menjadi bagian dari XI.F7 Wabifosvenn adalah kebanggaan. Kami belajar, tertawa, dan tumbuh bersama!",
      author: "ODELIO JULYUS HENDRI",
      role: "Ketua Kelas",
      avatar: "OJ",
    },
    {
      id: 2,
      quote:
        "Dukungan dari teman-teman dan Bu Syafni membuat setiap hari di kelas terasa menyenangkan dan penuh semangat.",
      author: "ODELIO JULYUS HENDRI",
      role: "Ketua Kelas",
      avatar: "OJ",
    },
    {
      id: 3,
      quote:
        "Di Wabifosvenn, tidak ada yang ditinggalkan. Kami saling membantu, saling menguatkan, dan terus berkembang bersama.",
      author: "MUHAMMAD RADITHYA ADIFFY",
      role: "Anggota Kelas",
      avatar: "MR",
    },
  ];

  // Prestasi (mock data)
  const achievements = [
    {
      year: "2025",
      title: "Soon",
      description: "Soon",
      icon: Award,
    },
    {
      year: "2025",
      title: "Nilai Rata-rata Tertinggi",
      description: "Soon",
      icon: Trophy,
    },
    {
      year: "2025",
      title: "Infak",
      description: "Mengumpulkan infak untuk kegiatan sosial",
      icon: Heart,
    },
    {
      year: "2026",
      title: "Proyek Inovasi",
      description: "Soon",
      icon: Sparkles,
    },
  ];

  // Auto-rotate testimonial
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Filter students by role
  const [activeTab, setActiveTab] = useState("all");

  const filteredStudents =
    activeTab === "all"
      ? students
      : students.filter((student) =>
          student.role.toLowerCase().includes(activeTab)
        );

  const roleTabs = [
    { id: "all", label: "Semua" },
    { id: "ketua", label: "Pengurus" },
    { id: "anggota", label: "Anggota" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav id="navbar">
        <div className="navbar container">
          <a href="#home" className="logo">
            <div className="logo-icon">
              <GraduationCap size={20} />
            </div>
            <span>Wabifosvenn</span>
          </a>
          <div className="nav-links">
            <a href="#home" className="nav-link">
              Beranda
            </a>
            <a href="#about" className="nav-link">
              Tentang
            </a>
            <a href="#students" className="nav-link">
              Siswa
            </a>
            <a href="#events" className="nav-link">
              Acara
            </a>
            <a href="#achievements" className="nav-link">
              Prestasi
            </a>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu active">
            <a
              href="#home"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </a>
            <a
              href="#about"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang
            </a>
            <a
              href="#students"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Siswa
            </a>
            <a
              href="#events"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Acara
            </a>
            <a
              href="#achievements"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Prestasi
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="badge">
            <Star size={14} />
            Kelas XI.F7 • Tahun Ajaran 2025-2026
          </div>
          <h1 className="hero-title">XI.F7 Wabifosvenn</h1>
          <p className="hero-subtitle">"{classInfo.motto}"</p>
          <p className="hero-teacher">
            Dibimbing oleh <strong>{classInfo.teacher}</strong>
          </p>

          <div className="hero-buttons">
            <a href="#students" className="btn btn-primary">
              Kenalan dengan 36 Siswa Kami
            </a>
            <a href="#about" className="btn btn-outline">
              Tentang Kelas Kami
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={24} />
              </div>
              <div className="stat-value">36</div>
              <div className="stat-label">Siswa</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Calendar size={24} />
              </div>
              <div className="stat-value">4+</div>
              <div className="stat-label">Acara</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Trophy size={24} />
              </div>
              <div className="stat-value">4</div>
              <div className="stat-label">Prestasi</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <GraduationCap size={24} />
              </div>
              <div className="stat-value">14</div>
              <div className="stat-label">Guru</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <h2 className="section-title">Tentang Kelas Kami</h2>
          <div className="divider"></div>

          <div className="section-content">
            <div className="vision-card">
              <h3 className="text-2xl font-bold mb-3">Guru Pembimbing</h3>
              <p className="text-xl font-semibold">{classInfo.teacher}</p>
              <p className="opacity-90">
                Pendidik yang inspiratif, sabar, dan selalu mendukung
                perkembangan siswa
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Visi Kelas
            </h3>
            <p className="text-gray-600 mb-4">{classInfo.vision}</p>

            <div className="values-grid">
              {classInfo.values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="value-card">
                    <div className="value-icon">
                      <Icon size={24} />
                    </div>
                    <div className="value-title">{value.text}</div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-dashed border-indigo-300 rounded-2xl p-8 text-center mt-8">
              <div className="belief-card">
                <div className="belief-accent" aria-hidden></div>
                <div className="belief-body">
                  <GraduationCap className="belief-icon" />
                  <h3 className="belief-title">Kami Percaya</h3>
                  <blockquote className="belief-quote">
                    “Kesuksesan bukan hanya tentang nilai—itu tentang karakter,
                    kerja sama, dan keberanian untuk terus belajar. Setiap
                    langkah kecil bersama membentuk masa depan yang besar.”
                  </blockquote>
                  <div className="belief-footer">
                    <span className="belief-author">— Wabifosvenn Spirit</span>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => scrollToSection("students")}
                    >
                      Kenali Siswa Kami
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Structure */}
      <section className="section bg-gradient">
        <div className="container">
          <h2 className="section-title">Struktur Kepengurusan</h2>
          <div className="divider"></div>
          <p className="section-subtitle text-center">
            Tim Inti Yang Memimpin dan Mengorganisir Kegiatan Kelas
          </p>

          <div className="leadership-grid">
            {leadershipStructure.map((leader, index) => {
              const Icon = leader.icon;
              return (
                <div key={index} className="leadership-card">
                  <div className="leadership-header">
                    <div className="leadership-role">{leader.role}</div>
                    <div className="leadership-name">{leader.name}</div>
                  </div>
                  <div className="leadership-body">
                    <div className="leadership-icon">
                      <Icon size={24} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section id="students" className="section bg-gradient">
        <div className="container">
          <h2 className="section-title">Daftar Siswa XI.F7</h2>
          <div className="divider"></div>
          <p className="section-subtitle text-center">
            36 Siswa Yang Luar Biasa, Dipimpin oleh Odelio Julyus Hendri Sebagai
            Ketua
          </p>

          <div className="students-filters">
            {roleTabs.map((tab) => (
              <button
                key={tab.id}
                className={`filter-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="students-grid">
              {filteredStudents.map((student) => {
                const isKetua = student.role === "Ketua Kelas";
                return (
                  <div
                    key={student.id}
                    className={`student-card ${isKetua ? "ketua" : ""}`}
                  >
                    <div className="student-image">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="student-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="student-info">
                      <div className="student-name">{student.name}</div>
                      <div className="student-role">{student.role}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section bg-white">
        <div className="container">
          <h2 className="section-title">Rencana Acara</h2>
          <div className="divider"></div>
          <p className="section-subtitle text-center">
            Jadwal Kegiatan Kelas Yang Akan Datang
          </p>

          <div className="events-grid">
            {events.map((event) => {
              const Icon = event.icon;
              return (
                <div key={event.id} className="event-card">
                  <div className={`event-icon-container ${event.color}`}>
                    <Icon className="event-icon text-white" size={20} />
                  </div>
                  <div className="event-content">
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-meta">
                      <div className="event-meta-item">
                        <Calendar size={14} />
                        <span>{event.date}</span>
                      </div>
                      <div className="event-meta-item">
                        <Clock size={14} />
                        <span>{event.time}</span>
                      </div>
                      <div className="event-meta-item">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="event-description">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonial-section">
        <div className="container">
          <div className="testimonial-content">
            <div className="testimonial-icon">
              <MessageCircle size={24} />
            </div>
            <h2 className="section-title">Kata Mereka</h2>
            <p className="section-subtitle">Suara dari anggota Wabifosvenn</p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <blockquote className="testimonial-quote">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="author-info">
                  <div className="author-name">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="author-role">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>

              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`dot ${
                      index === currentTestimonial ? "active" : ""
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section bg-white">
        <div className="container">
          <h2 className="section-title">Prestasi Kelas</h2>
          <div className="divider"></div>
          <p className="section-subtitle text-center">
            Perjalanan Prestasi Wabifosvenn Sepanjang Tahun Ajaran
          </p>

          <div className="timeline">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <TimelineItem
                  key={index}
                  year={achievement.year}
                  title={achievement.title}
                  description={achievement.description}
                  icon={Icon}
                  isLast={index === achievements.length - 1}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <GraduationCap size={20} />
              </div>
              <span>XI.F7 Wabifosvenn</span>
            </div>
            <p className="footer-text">Kelas XI.F7 • SMAN/SMK/MA</p>
            <p className="footer-text">
              Website kelas ini dibuat untuk mempererat silaturahmi dan
              mendokumentasikan perjalanan kami.
            </p>
            <div className="footer-copyright">
              &copy; 2025 XI.F7 Wabifosvenn. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Komponen Timeline Item (didefinisikan di dalam file yang sama)
const TimelineItem = ({
  year,
  title,
  description,
  icon: Icon,
  isLast = false,
}) => (
  <div className="relative pl-8 pb-8">
    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white"></div>
    {!isLast && (
      <div className="absolute left-2 top-8 w-0.5 h-full bg-indigo-200"></div>
    )}
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-100">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
              {year}
            </span>
            <h4 className="font-bold text-gray-900">{title}</h4>
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default App;
