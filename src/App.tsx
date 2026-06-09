import { useState, useEffect, useRef } from 'react';

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Услуги', href: '#services' },
    { label: 'Мастера', href: '#team' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="font-playfair text-2xl tracking-[0.2em] text-text-dark">
              BLOOM
            </span>
            <span className="text-[10px] tracking-[0.3em] text-text-secondary uppercase">
              beauty studio
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-text-dark hover:text-powder-rose transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#booking"
            className="hidden md:inline-flex bg-powder-rose text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#c48a8a] transition-colors"
          >
            Записаться онлайн
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-text-dark transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-text-dark transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-text-dark transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 right-0 bottom-0 w-80 max-w-full bg-cream shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-8 gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xl text-text-dark hover:text-powder-rose transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking"
            className="mt-4 bg-powder-rose text-white px-6 py-3 rounded-full font-medium text-center hover:bg-[#c48a8a] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Записаться онлайн
          </a>
        </nav>
      </div>
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-powder-rose/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm uppercase tracking-[0.3em] text-text-secondary mb-4">
              Добро пожаловать в BLOOM
            </p>
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl text-text-dark leading-tight mb-6">
              Позвольте себе
              <br />
              <span className="italic">засиять</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8 max-w-lg">
              Студия красоты премиум-класса в центре Москвы. Создаём образы,
              которые вдохновляют и дарят уверенность.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#booking"
                className="bg-powder-rose text-white px-8 py-4 rounded-full font-medium hover:bg-[#c48a8a] transition-all hover:scale-105"
              >
                Записаться
              </a>
              <a
                href="#services"
                className="border-2 border-powder-rose text-powder-rose px-8 py-4 rounded-full font-medium hover:bg-powder-rose hover:text-white transition-all"
              >
                Наши услуги
              </a>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <span className="text-gold text-xl">&#9733;</span>
              <span className="font-medium">4.9 на Яндекс.Картах</span>
              <span className="mx-2">&#183;</span>
              <span>2000+ довольных клиентов</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-powder-rose/30 rounded-full" />
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1560066986-54917a0b1d6d?w=600&h=750&fit=crop&crop=faces"
                alt="Красота и стиль"
                className="w-full max-w-md mx-auto rounded-[40% 60% 55% 45% / 55% 45% 55% 45%] shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Marquee Section
function Marquee() {
  const items = [
    'СТРИЖКИ',
    'ОКРАШИВАНИЕ',
    'МАНИКЮР',
    'ПЕДИКЮР',
    'БРОВИ',
    'РЕСНИЦЫ',
    'УКЛАДКИ',
    'УХОД ЗА ЛИЦОМ',
  ];

  return (
    <section className="bg-powder-rose py-4 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="inline-block text-white font-medium tracking-[0.2em] mx-8"
            >
              &#9733; {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.fade-in-section');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="fade-in-section">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8bdcdee30e21?w=600&h=500&fit=crop"
              alt="Интерьер салона BLOOM"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="fade-in-section">
            <p className="text-sm uppercase tracking-[0.2em] text-powder-rose mb-4">
              О нас
            </p>
            <h2 className="font-playfair text-4xl lg:text-5xl text-text-dark mb-6">
              Место, где красота становится искусством
            </h2>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              BLOOM — это не просто салон красоты. Это пространство, где каждый
              визит превращается в ритуал заботы о себе. Мы используем только
              премиальную косметику от мировых брендов и следим за трендами
              индустрии.
            </p>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Наша студия расположена в самом сердце Москвы. Уютная атмосфера,
              ароматный кофе и профессиональные мастера — всё, что нужно для
              идеального преображения.
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <p className="font-playfair text-4xl text-powder-rose">5 лет</p>
                <p className="text-text-secondary text-sm">опыта работы</p>
              </div>
              <div className="text-center">
                <p className="font-playfair text-4xl text-powder-rose">
                  12 мастеров
                </p>
                <p className="text-text-secondary text-sm">в команде</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = [
    {
      icon: '&#9986;',
      title: 'Стрижки',
      items: [
        { name: 'Женская стрижка', price: 'от 3 000 ₽' },
        { name: 'Мужская стрижка', price: 'от 1 500 ₽' },
        { name: 'Детская стрижка', price: 'от 1 200 ₽' },
      ],
    },
    {
      icon: '&#127912;',
      title: 'Окрашивание',
      items: [
        { name: 'Однотонное', price: 'от 5 000 ₽' },
        { name: 'Сложное (балаяж, airtouch)', price: 'от 8 000 ₽' },
        { name: 'Тонирование', price: 'от 3 500 ₽' },
      ],
    },
    {
      icon: '&#128073;',
      title: 'Маникюр',
      items: [
        { name: 'Классический маникюр', price: 'от 1 500 ₽' },
        { name: 'Маникюр с покрытием', price: 'от 2 500 ₽' },
        { name: 'Наращивание ногтей', price: 'от 4 000 ₽' },
      ],
    },
    {
      icon: '&#128065;',
      title: 'Брови и ресницы',
      items: [
        { name: 'Коррекция + окрашивание', price: 'от 2 000 ₽' },
        { name: 'Ламинирование бровей', price: 'от 2 500 ₽' },
        { name: 'Наращивание ресниц', price: 'от 3 500 ₽' },
      ],
    },
    {
      icon: '&#128134;',
      title: 'Уход за лицом',
      items: [
        { name: 'Чистка лица', price: 'от 4 000 ₽' },
        { name: 'Пилинг', price: 'от 3 000 ₽' },
        { name: 'Массаж лица', price: 'от 2 500 ₽' },
      ],
    },
    {
      icon: '&#128135;',
      title: 'Укладки',
      items: [
        { name: 'Повседневная укладка', price: 'от 2 000 ₽' },
        { name: 'Вечерняя укладка', price: 'от 3 500 ₽' },
        { name: 'Свадебная причёска', price: 'от 7 000 ₽' },
      ],
    },
  ];

  return (
    <section id="services" className="bg-soft-pink py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl text-text-dark mb-4">
            Наши услуги
          </h2>
          <p className="text-text-secondary text-lg">
            Всё для вашей красоты в одном месте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-2xl p-6 shadow-md relative overflow-hidden"
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

              <div
                className="text-4xl mb-4"
                dangerouslySetInnerHTML={{ __html: service.icon }}
              />
              <h3 className="font-playfair text-xl text-text-dark mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between text-text-secondary"
                  >
                    <span>{item.name}</span>
                    <span className="font-medium text-text-dark">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-powder-rose text-powder-rose px-8 py-3 rounded-full font-medium hover:bg-powder-rose hover:text-white transition-all">
            Полный прайс-лист
          </button>
        </div>
      </div>
    </section>
  );
}

// Team Section
function Team() {
  const masters = [
    {
      name: 'Анна Светлова',
      role: 'Топ-стилист',
      experience: '8 лет опыта',
      specialty: 'Сложное окрашивание, стрижки',
      image:
        'https://images.unsplash.com/photo-1580618672591-eb180b19db16?w=400&h=400&fit=crop&crop=faces',
    },
    {
      name: 'Мария Ким',
      role: 'Мастер маникюра',
      experience: '6 лет опыта',
      specialty: 'Аппаратный маникюр, nail-art',
      image:
        'https://images.unsplash.com/photo-1594744803329-e58b10b0a9d7?w=400&h=400&fit=crop&crop=faces',
    },
    {
      name: 'Елена Орлова',
      role: 'Бровист-визажист',
      experience: '5 лет опыта',
      specialty: 'Архитектура бровей, макияж',
      image:
        'https://images.unsplash.com/photo-1607746882042-2f7f4e5a5dd5?w=400&h=400&fit=crop&crop=faces',
    },
    {
      name: 'Дарья Волкова',
      role: 'Косметолог',
      experience: '7 лет опыта',
      specialty: 'Чистки, пилинги, уходовые процедуры',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
    },
  ];

  return (
    <section id="team" className="bg-cream py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl text-text-dark mb-4">
            Наши мастера
          </h2>
          <p className="text-text-secondary text-lg">
            Профессионалы, которые любят своё дело
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {masters.map((master, index) => (
            <div key={index} className="text-center group">
              <div className="image-zoom mb-6 rounded-2xl overflow-hidden">
                <img
                  src={master.image}
                  alt={master.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl text-text-dark mb-1">
                {master.name}
              </h3>
              <p className="text-powder-rose font-medium mb-1">{master.role}</p>
              <p className="text-text-secondary text-sm mb-2">
                {master.experience}
              </p>
              <p className="text-text-secondary text-sm">{master.specialty}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="#"
                  className="text-text-secondary hover:text-gold transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-text-secondary hover:text-gold transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.504-1.36 8.629-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.898-.884-1.055-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.027.014-.13-.044-.184-.06-.054-.148-.036-.212-.024-.088.02-1.49.95-4.207 2.787-.398.274-.76.407-1.089.4-.359-.015-1.05-.203-1.564-.37-.63-.206-1.13-.315-1.087-.662.023-.18.425-.367 1.208-.572 3.749-1.21 6.25-1.88 7.511-2.04.064-.01.13-.013.193-.013z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function Gallery() {
  const [activeFilter, setActiveFilter] = useState('Все');

  const filters = ['Все', 'Стрижки', 'Окрашивание', 'Маникюр', 'Брови'];

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1562322140-8baee1c6a7d0?w=400&h=500&fit=crop',
      category: 'Окрашивание',
    },
    {
      src: 'https://images.unsplash.com/photo-1605497788046-575b5a6b239b?w=400&h=400&fit=crop',
      category: 'Маникюр',
    },
    {
      src: 'https://images.unsplash.com/photo-1522337360788-8bdcdee30e21?w=400&h=500&fit=crop',
      category: 'Стрижки',
    },
    {
      src: 'https://images.unsplash.com/photo-1522903488224-960bdc9e6d92?w=400&h=400&fit=crop',
      category: 'Брови',
    },
    {
      src: 'https://images.unsplash.com/photo-1595476108034-9b8d4dd8b57b?w=400&h=500&fit=crop',
      category: 'Окрашивание',
    },
    {
      src: 'https://images.unsplash.com/photo-1519085342555-9c96f5c87a39?w=400&h=400&fit=crop',
      category: 'Стрижки',
    },
  ];

  const filteredImages =
    activeFilter === 'Все'
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="bg-soft-pink py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl lg:text-5xl text-text-dark mb-4">
            Наши работы
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Вдохновляйтесь результатами наших мастеров
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-powder-rose text-white'
                    : 'bg-white text-text-dark hover:bg-powder-rose/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.category}
                className={`w-full ${
                  index % 3 === 0 ? 'h-80' : 'h-60'
                } object-cover transition-transform duration-500 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-powder-rose/0 group-hover:bg-powder-rose/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-powder-rose font-medium hover:text-[#c48a8a] transition-colors"
          >
            Смотреть больше в Instagram
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Reviews Section
function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: 'Ольга Морозова',
      text: 'Делала сложное окрашивание у Анны — это лучший результат за все мои походы в салоны! Цвет идеально подобран, волосы мягкие и живые. Теперь только сюда!',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
    },
    {
      name: 'Кристина Левина',
      text: 'Обожаю атмосферу BLOOM! Приходишь как домой. Мария делает маникюр — просто произведение искусства. Каждый раз ухожу довольная и с кучей комплиментов.',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
    },
    {
      name: 'Наталья Соколова',
      text: 'Была на чистке лица у Дарьи. Кожа стала бархатной! Очень нежные руки, всё аккуратно, без дискомфорта. Записалась на курс процедур.',
      avatar:
        'https://images.unsplash.com/photo-1534528741774-4b6b3b3c3c3c?w=100&h=100&fit=crop&crop=faces',
    },
    {
      name: 'Алина Жукова',
      text: 'Пришла за коррекцией бровей, а ушла с идеальным лицом! Елена — волшебница. Подобрала форму, которая идеально подходит к моему типу лица.',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddfca28559?w=100&h=100&fit=crop&crop=faces',
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  return (
    <section id="reviews" className="bg-cream py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl text-text-dark mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-text-secondary text-lg">
            Нам доверяют более 2000 клиентов
          </p>
        </div>

        {/* Review Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg relative">
            {/* Quote Mark */}
            <div className="absolute top-8 left-8 text-6xl text-gold font-playfair">
              &#8220;
            </div>

            <p className="text-text-dark text-lg lg:text-xl italic mb-8 pt-12">
              {reviews[currentIndex].text}
            </p>

            <div className="flex items-center gap-4">
              <img
                src={reviews[currentIndex].avatar}
                alt={reviews[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-text-dark">
                  {reviews[currentIndex].name}
                </p>
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevReview}
              className="w-12 h-12 rounded-full border-2 border-powder-rose flex items-center justify-center text-powder-rose hover:bg-powder-rose hover:text-white transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-full border-2 border-powder-rose flex items-center justify-center text-powder-rose hover:bg-powder-rose hover:text-white transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Instagram Feed Section
function InstagramFeed() {
  const posts = [
    'https://images.unsplash.com/photo-1560066986-54917a0b1d6d?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1519085342555-9c96f5c87a39?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1607746882042-2f7f4e5a5dd5?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1562322140-8baee1c6a7d0?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1605497788034-9b8d4dd8b57b?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522337360788-8bdcdee30e21?w=300&h=300&fit=crop',
  ];

  return (
    <section className="bg-cream py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl lg:text-5xl text-text-dark mb-4">
            Мы в Instagram
          </h2>
          <p className="text-text-secondary text-lg">@bloom_beauty_msk</p>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-0.5">
          {posts.map((post, index) => (
            <div key={index} className="aspect-square relative group cursor-pointer">
              <img
                src={post}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-powder-rose/0 group-hover:bg-powder-rose/60 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 instagram-btn text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Подписаться на Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

// Special Offer Section
function SpecialOffer() {
  return (
    <section className="bg-gradient-to-r from-powder-rose to-gold py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white/80 uppercase tracking-[0.2em] mb-4">
          Специальное предложение
        </p>
        <h2 className="font-playfair text-4xl lg:text-6xl text-white mb-6">
          Первый визит — скидка 20%
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Запишитесь на любую услугу впервые и получите скидку 20%. Мы уверены —
          вы захотите вернуться.
        </p>
        <a
          href="#booking"
          className="inline-block bg-white text-text-dark px-10 py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
        >
          Записаться со скидкой
        </a>
      </div>
    </section>
  );
}

// Booking Form Section
function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    master: '',
    comment: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <section id="booking" className="bg-soft-pink py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-playfair text-4xl lg:text-5xl text-text-dark mb-6">
              Запишитесь на визит
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Выберите удобное время — мы перезвоним и подтвердим запись в
              течение 15 минут
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-xl">&#128222;</span>
                <a
                  href="tel:+79998887766"
                  className="text-text-dark hover:text-powder-rose transition-colors"
                >
                  +7 (999) 888-77-66
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">&#128231;</span>
                <a
                  href="mailto:hello@bloom-beauty.ru"
                  className="text-text-dark hover:text-powder-rose transition-colors"
                >
                  hello@bloom-beauty.ru
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">&#128205;</span>
                <span className="text-text-dark">Москва, ул. Тверская, 25</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">&#128336;</span>
                <span className="text-text-dark">Пн-Вс: 09:00 — 21:00</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-powder-rose hover:bg-powder-rose hover:text-white transition-colors shadow-md"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-powder-rose hover:bg-[#25D366] hover:text-white transition-colors shadow-md"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-powder-rose hover:bg-[#0088cc] hover:text-white transition-colors shadow-md"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.504-1.36 8.629-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.898-.884-1.055-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.027.014-.13-.044-.184-.06-.054-.148-.036-.212-.024-.088.02-1.49.95-4.207 2.787-.398.274-.76.407-1.089.4-.359-.015-1.05-.203-1.564-.37-.63-.206-1.13-.315-1.087-.662.023-.18.425-.367 1.208-.572 3.749-1.21 6.25-1.88 7.511-2.04.064-.01.13-.013.193-.013z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-text-dark font-medium mb-2"
                >
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-powder-rose focus:ring-2 focus:ring-powder-rose/20 transition-all"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-text-dark font-medium mb-2"
                >
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-powder-rose focus:ring-2 focus:ring-powder-rose/20 transition-all"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-text-dark font-medium mb-2"
                >
                  Услуга
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-powder-rose focus:ring-2 focus:ring-powder-rose/20 transition-all bg-white"
                >
                  <option value="">Выберите услугу</option>
                  <option value="haircut">Стрижка</option>
                  <option value="coloring">Окрашивание</option>
                  <option value="manicure">Маникюр</option>
                  <option value="brows">Брови и ресницы</option>
                  <option value="facial">Уход за лицом</option>
                  <option value="styling">Укладка</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-text-dark font-medium mb-2"
                >
                  Желаемая дата
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-powder-rose focus:ring-2 focus:ring-powder-rose/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="master"
                  className="block text-text-dark font-medium mb-2"
                >
                  Предпочтительный мастер
                </label>
                <select
                  id="master"
                  name="master"
                  value={formData.master}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-powder-rose focus:ring-2 focus:ring-powder-rose/20 transition-all bg-white"
                >
                  <option value="">Любой</option>
                  <option value="anna">Анна Светлова</option>
                  <option value="maria">Мария Ким</option>
                  <option value="elena">Елена Орлова</option>
                  <option value="darya">Дарья Волкова</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-text-dark font-medium mb-2"
                >
                  Комментарий
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-powder-rose focus:ring-2 focus:ring-powder-rose/20 transition-all resize-none"
                  placeholder="Дополнительные пожелания..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-powder-rose text-white py-4 rounded-xl font-medium hover:bg-[#c48a8a] transition-all hover:scale-[1.02]"
              >
                Записаться
              </button>

              <p className="text-center text-text-secondary text-sm">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="#" className="text-powder-rose hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Map Section
function Map() {
  return (
    <section id="contacts" className="bg-cream py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-4xl lg:text-5xl text-text-dark mb-12 text-center">
          Как нас найти
        </h2>

        {/* Map Placeholder */}
        <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center">
              <div className="w-12 h-12 bg-powder-rose rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <p className="text-text-secondary font-medium">Яндекс.Карта</p>
              <p className="text-text-secondary text-sm">Москва, ул. Тверская, 25</p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-3xl mb-3">&#128647;</div>
            <p className="text-text-dark font-medium">Метро Тверская</p>
            <p className="text-text-secondary text-sm">3 минуты пешком</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-3xl mb-3">&#128664;</div>
            <p className="text-text-dark font-medium">Бесплатная парковка</p>
            <p className="text-text-secondary text-sm">для клиентов</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-3xl mb-3">&#9855;</div>
            <p className="text-text-dark font-medium">Доступная среда</p>
            <p className="text-text-secondary text-sm">безбарьерное пространство</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-text-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Logo */}
          <div>
            <a href="#" className="inline-block mb-6">
              <span className="font-playfair text-3xl tracking-[0.2em]">
                BLOOM
              </span>
            </a>
            <p className="text-white/70">
              Студия красоты премиум-класса в центре Москвы. Создаём образы,
              которые вдохновляют.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="font-medium mb-6">Навигация</h3>
            <nav className="space-y-3">
              <a
                href="#services"
                className="block text-white/70 hover:text-gold transition-colors"
              >
                Услуги
              </a>
              <a
                href="#team"
                className="block text-white/70 hover:text-gold transition-colors"
              >
                Мастера
              </a>
              <a
                href="#gallery"
                className="block text-white/70 hover:text-gold transition-colors"
              >
                Галерея
              </a>
              <a
                href="#reviews"
                className="block text-white/70 hover:text-gold transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contacts"
                className="block text-white/70 hover:text-gold transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>

          {/* Column 3 - Contacts */}
          <div>
            <h3 className="font-medium mb-6">Контакты</h3>
            <div className="space-y-3 text-white/70">
              <p>+7 (999) 888-77-66</p>
              <p>hello@bloom-beauty.ru</p>
              <p>Москва, ул. Тверская, 25</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.234h-1.76c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.574c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.339-3.202-2.17-3.04-2.762-5.32-2.762-5.793 0-.254.102-.491.593-.491h1.76c.44 0 .61.203.78.678.864 2.49 2.306 4.675 2.899 4.675.22 0 .322-.102.322-.66V9.724c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.762c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.153-3.574 2.153-3.574.119-.254.322-.491.763-.491h1.76c.525 0 .644.27.525.643-.22 1.017-2.356 4.031-2.356 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.27.847.966 1.49 1.78 1.665 2.34.17.542-.085.813-.627.813z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.504-1.36 8.629-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.898-.884-1.055-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.027.014-.13-.044-.184-.06-.054-.148-.036-.212-.024-.088.02-1.49.95-4.207 2.787-.398.274-.76.407-1.089.4-.359-.015-1.05-.203-1.564-.37-.63-.206-1.13-.315-1.087-.662.023-.18.425-.367 1.208-.572 3.749-1.21 6.25-1.88 7.511-2.04.064-.01.13-.013.193-.013z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/50 text-sm">
            &copy; 2025 BLOOM Beauty Studio. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Scroll to Top Button
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-powder-rose text-white shadow-lg flex items-center justify-center hover:bg-[#c48a8a] transition-all z-40 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

// WhatsApp Floating Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/79998887766"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn fixed bottom-6 left-6 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-40"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// Preloader
function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${!isLoading ? 'hidden' : ''}`}>
      <div className="preloader-logo">BLOOM</div>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Team />
        <Gallery />
        <Reviews />
        <InstagramFeed />
        <SpecialOffer />
        <Booking />
        <Map />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;
