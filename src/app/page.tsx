import React from "react";

const assets = {
  heroBg: "https://www.figma.com/api/mcp/asset/57ecf98a-978e-4fa7-b1e1-5b7d2346497b",
  aboutPhoto: "https://www.figma.com/api/mcp/asset/8c1c67c0-d58f-497a-9953-0b29b71cc089",
  fullWidthPhoto: "https://www.figma.com/api/mcp/asset/d40134dc-b5ec-4bb2-abab-0ee47c8aff79",
  service1: "https://www.figma.com/api/mcp/asset/add567bf-d62d-4676-b0e7-8bb1ac319c60",
  service2: "https://www.figma.com/api/mcp/asset/70acb705-d46b-4f76-9ac3-c8d08b8a7a08",
  service3: "https://www.figma.com/api/mcp/asset/8626f5bc-b66a-4a60-8055-093f446acf27",
  service4: "https://www.figma.com/api/mcp/asset/bf8675ed-61a0-4b52-8ea6-2a276f32c16e",
  project1: "https://www.figma.com/api/mcp/asset/006be540-383e-4edc-ab95-bde72faf4bc0",
  project2: "https://www.figma.com/api/mcp/asset/2cf6f5e7-16b4-4459-a622-b8ce7e251a1b",
  project3: "https://www.figma.com/api/mcp/asset/3cc234d2-ce61-4bfd-ad8d-760ec23ff0fc",
  project4: "https://www.figma.com/api/mcp/asset/ddaed629-d4be-40d5-bdc1-de7437c73dd2",
  news1: "https://www.figma.com/api/mcp/asset/e298af25-04f3-4672-b0e9-8a3cf85cb750",
  news2: "https://www.figma.com/api/mcp/asset/7669ce33-ba35-4d56-9b6e-309522ef2d7a",
  news3: "https://www.figma.com/api/mcp/asset/8f31f21b-f40a-46e9-808d-defe8a75ccc0",
  arrowDown: "https://www.figma.com/api/mcp/asset/14037144-6d7e-4bee-8de7-db8e74a268e6",
  arrowDownSm: "https://www.figma.com/api/mcp/asset/13c4931e-a05b-447e-b9de-4edbf8b0e427",
  star1: "https://www.figma.com/api/mcp/asset/a4887ede-80f1-4dd6-a586-037d59e2ba71",
  star2: "https://www.figma.com/api/mcp/asset/55966a9b-217e-4961-bf05-910a568f426a",
  star3: "https://www.figma.com/api/mcp/asset/79202986-4236-47eb-94fa-7b311d850f4f",
  star4: "https://www.figma.com/api/mcp/asset/7dd4c85c-330d-46f9-a9d0-0685869a9695",
  reviewStars1: "https://www.figma.com/api/mcp/asset/c5698c74-61e1-4c6a-a1ec-f61084eec5f8",
  reviewStars2: "https://www.figma.com/api/mcp/asset/ec698f3f-0ea7-48df-a5cf-4d6c4737ce2b",
  reviewStars3: "https://www.figma.com/api/mcp/asset/25940a1d-580f-4829-b72a-5839d7a975af",
  reviewStars4: "https://www.figma.com/api/mcp/asset/4244fe11-abd7-4fa9-9c0c-5456d71a7f04",
};

function Nav() {
  return (
    <nav className="flex items-center justify-between py-6 w-full relative z-10">
      <span className="font-semibold text-base tracking-[-0.04em] text-black uppercase">H.Studio</span>

      {/* Mobile: hamburger */}
      <button className="lg:hidden flex flex-col gap-[5px] justify-center w-6 h-6" aria-label="Menu">
        <span className="block w-full h-[2px] bg-black" />
        <span className="block w-full h-[2px] bg-black" />
        <span className="block w-3 h-[2px] bg-black" />
      </button>

      {/* Desktop: nav links + CTA */}
      <div className="hidden lg:flex items-center gap-14">
        {["About", "Services", "Projects", "News", "Contact"].map((item) => (
          <a key={item} href="#" className="font-semibold text-base tracking-[-0.04em] text-black uppercase hover:opacity-60 transition-opacity">
            {item}
          </a>
        ))}
      </div>
      <button className="hidden lg:flex bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-3xl hover:bg-neutral-800 transition-colors">
        Let&apos;s talk
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden flex flex-col px-4 lg:px-8" style={{ minHeight: "847px" }}>
      {/* Background photo — mobile: full cover; desktop: oversized + offset */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src={assets.heroBg}
          alt=""
          className="absolute inset-0 w-[139.47%] h-full object-cover object-top pointer-events-none"
        />
      </div>
      <div className="hidden lg:block absolute inset-0 -translate-x-[34.79%] w-[169.58%]" style={{ top: "88px" }}>
        <img
          src={assets.heroBg}
          alt=""
          className="w-full h-full object-cover object-bottom pointer-events-none"
        />
      </div>

      {/* Blur overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[349px]"
        style={{ backdropFilter: "blur(10px)", background: "rgba(217,217,217,0.01)" }}
      />

      <Nav />

      {/* Mobile layout: headline + desc/CTA stacked, filling remaining height */}
      <div className="lg:hidden relative flex flex-col items-center justify-between flex-1 pb-6 gap-8">
        <div className="flex flex-col items-center w-full">
          <p className="font-mono text-sm text-white uppercase mix-blend-overlay">[ Hello i&apos;m ]</p>
          <h1
            className="font-medium text-white text-center mix-blend-overlay uppercase w-full"
            style={{ fontSize: "96px", lineHeight: 0.8, letterSpacing: "-0.07em" }}
          >
            Harvey&nbsp;&nbsp;&nbsp;Specter
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-start w-[293px]">
          <p className="text-[#1f1f1f] text-sm tracking-[-0.04em] leading-[1.1]">
            <strong className="font-bold italic uppercase">H.Studio is a </strong>
            <span className="italic">full-service</span>
            <strong className="font-bold italic uppercase"> creative studio creating beautiful digital experiences and products. We are an </strong>
            <span className="italic">award winning</span>
            <strong className="font-bold italic uppercase"> design and art group specializing in branding, web design and engineering.</strong>
          </p>
          <button className="bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-3xl hover:bg-neutral-800 transition-colors">
            Let&apos;s talk
          </button>
        </div>
      </div>

      {/* Desktop layout: headline mid-page, desc bottom-right */}
      <div className="hidden lg:flex relative mt-auto pb-0 flex-col items-center w-full">
        <div className="w-full mb-[-15px] px-[18px]">
          <p className="font-mono text-sm text-white uppercase mix-blend-overlay">[ Hello i&apos;m ]</p>
        </div>
        <h1
          className="font-medium text-white text-center mix-blend-overlay uppercase w-full"
          style={{ fontSize: "198px", lineHeight: 1.1, letterSpacing: "-0.07em" }}
        >
          Harvey&nbsp;&nbsp;&nbsp;Specter
        </h1>
      </div>
      <div className="hidden lg:flex relative justify-end w-full pb-12">
        <div className="flex flex-col gap-4 items-start w-[294px]">
          <p className="text-[#1f1f1f] text-sm tracking-[-0.04em] leading-[1.1]">
            <strong className="font-bold italic uppercase">H.Studio is a </strong>
            <span className="italic">full-service</span>
            <strong className="font-bold italic uppercase"> creative studio creating beautiful digital experiences and products. We are an </strong>
            <span className="italic">award winning</span>
            <strong className="font-bold italic uppercase"> design and art group specializing in branding, web design and engineering.</strong>
          </p>
          <button className="bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-3xl hover:bg-neutral-800 transition-colors">
            Let&apos;s talk
          </button>
        </div>
      </div>
    </section>
  );
}

function BioSection() {
  return (
    <section className="px-8 py-[120px] overflow-hidden">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-3 items-end w-full">
          <p className="font-mono text-sm text-[#1f1f1f] uppercase text-right w-full">[ 8+ years in industry ]</p>
          <hr className="w-full border-t border-[#1f1f1f]/20" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-start whitespace-nowrap">
            <h2
              className="font-light text-black uppercase"
              style={{ fontSize: "96px", lineHeight: 0.84, letterSpacing: "-0.08em" }}
            >
              A creative director&nbsp;&nbsp;/
            </h2>
            <span className="font-mono text-sm text-[#1f1f1f] mt-1">001</span>
          </div>
          <div className="pl-[214px] whitespace-nowrap">
            <h2
              className="font-light text-black uppercase"
              style={{ fontSize: "96px", lineHeight: 0.84, letterSpacing: "-0.08em" }}
            >
              Photographer
            </h2>
          </div>
          <div className="pl-[610px] whitespace-nowrap">
            <h2
              className="font-light text-black uppercase"
              style={{ fontSize: "96px", lineHeight: 0.84, letterSpacing: "-0.08em" }}
            >
              Born{" "}
              <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>&amp;</span>
              {" "}raised
            </h2>
          </div>
          <div className="whitespace-nowrap">
            <h2
              className="font-light text-black uppercase"
              style={{ fontSize: "96px", lineHeight: 0.84, letterSpacing: "-0.08em" }}
            >
              on the south side
            </h2>
          </div>
          <div className="relative pl-[606px] whitespace-nowrap">
            <h2
              className="font-light text-black uppercase"
              style={{ fontSize: "96px", lineHeight: 0.84, letterSpacing: "-0.08em" }}
            >
              of chicago.
            </h2>
            <p className="absolute font-mono text-sm text-[#1f1f1f] whitespace-nowrap" style={{ left: "1079px", top: "26px" }}>
              [ creative freelancer ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="px-8 py-20 overflow-hidden">
      <div className="flex items-start justify-between w-full">
        <p className="font-mono text-sm text-[#1f1f1f] uppercase whitespace-nowrap">[ About ]</p>
        <div className="flex gap-8 items-end w-[983px]">
          <div className="flex flex-1 gap-3 items-center min-w-0">
            <div className="flex flex-col justify-between h-full shrink-0 w-6">
              <img src={assets.star1} alt="" className="w-4 h-4" />
              <img src={assets.star2} alt="" className="w-4 h-4 -rotate-90" />
            </div>
            <div className="flex-1 py-3 min-w-0">
              <p className="text-[#1f1f1f] text-sm tracking-[-0.04em] leading-[1.3]">
                Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
              </p>
            </div>
            <div className="flex flex-col justify-between h-full shrink-0 w-6">
              <img src={assets.star3} alt="" className="w-4 h-4 rotate-90" />
              <img src={assets.star4} alt="" className="w-4 h-4 rotate-180" />
            </div>
          </div>
          <div className="flex gap-6 items-start shrink-0">
            <p className="font-mono text-sm text-[#1f1f1f] uppercase">002</p>
            <div className="relative w-[436px] h-[614px] shrink-0 overflow-hidden">
              <img src={assets.aboutPhoto} alt="Harvey Specter" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FullWidthPhoto() {
  return (
    <div className="relative w-full h-[900px] shrink-0 overflow-hidden">
      <img src={assets.fullWidthPhoto} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
    </div>
  );
}

const services = [
  { num: "[ 1 ]", title: "Brand Discovery", img: assets.service1 },
  { num: "[ 2 ]", title: "Web Design & Dev", img: assets.service2 },
  { num: "[ 3 ]", title: "Marketing", img: assets.service3 },
  { num: "[ 4 ]", title: "Photography", img: assets.service4 },
];

function ServicesSection() {
  return (
    <section className="bg-black px-8 py-20 flex flex-col gap-12 w-full">
      <p className="font-mono text-sm text-white uppercase">[ services ]</p>
      <div className="flex items-center justify-between w-full">
        <span
          className="font-light text-white uppercase"
          style={{ fontSize: "96px", letterSpacing: "-0.08em", lineHeight: 1 }}
        >
          [4]
        </span>
        <span
          className="font-light text-white uppercase"
          style={{ fontSize: "96px", letterSpacing: "-0.08em", lineHeight: 1 }}
        >
          Deliverables
        </span>
      </div>
      <div className="flex flex-col gap-12 w-full">
        {services.map((s) => (
          <div key={s.num} className="flex flex-col gap-2 w-full">
            <p className="font-mono text-sm text-white uppercase">{s.num}</p>
            <hr className="border-t border-white/20 w-full" />
            <div className="flex flex-wrap items-start justify-between w-full">
              <p
                className="font-bold italic text-white uppercase"
                style={{ fontSize: "36px", letterSpacing: "-0.04em", lineHeight: 1.1 }}
              >
                {s.title}
              </p>
              <div className="flex gap-6 items-start">
                <p className="text-white text-sm tracking-[-0.04em] leading-[1.3] w-[393px]">
                  Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.
                </p>
                <div className="w-[151px] h-[151px] shrink-0 relative overflow-hidden">
                  <img src={s.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const projects = [
  { title: "Surfers paradise", tags: ["Social Media", "Photography"], img: assets.project1, tall: true },
  { title: "Cyberpunk caffe", tags: ["Social Media", "Photography"], img: assets.project2, tall: false },
  { title: "Agency 976", tags: ["Social Media", "Photography"], img: assets.project3, tall: false },
  { title: "Minimal Playground", tags: ["Social Media", "Photography"], img: assets.project4, tall: true },
];

function ProjectCard({ title, tags, img, height }: { title: string; tags: string[]; img: string; height: string }) {
  return (
    <div className="flex flex-col gap-2.5 w-full">
      <div className="relative w-full overflow-hidden" style={{ height }}>
        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-3 items-center z-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[#111] text-sm font-medium tracking-[-0.04em] px-2 py-1 rounded-3xl"
              style={{ backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.3)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p
          className="font-black text-black uppercase"
          style={{ fontSize: "36px", letterSpacing: "-0.04em", lineHeight: 1.1 }}
        >
          {title}
        </p>
        <div className="w-8 h-8 flex items-center justify-center -rotate-90">
          <img src={assets.arrowDown} alt="View project" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

function PortfolioSection() {
  return (
    <section className="px-8 py-20 overflow-hidden">
      <div className="flex flex-col gap-[61px] w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2.5 items-start whitespace-nowrap">
            <h2
              className="font-light text-black uppercase"
              style={{ fontSize: "96px", letterSpacing: "-0.08em", lineHeight: 0.86 }}
            >
              Selected{"\n"}Work
            </h2>
            <span className="font-mono text-sm text-[#1f1f1f]">004</span>
          </div>
          <div className="w-[15px] h-[110px] flex items-center justify-center">
            <p className="font-mono text-sm text-[#1f1f1f] uppercase whitespace-nowrap -rotate-90">[ portfolio ]</p>
          </div>
        </div>

        <div className="flex gap-6 items-end w-full">
          <div className="flex flex-1 flex-col justify-between min-w-0 gap-6">
            <ProjectCard title="Surfers paradise" tags={["Social Media", "Photography"]} img={assets.project1} height="744px" />
            <ProjectCard title="Cyberpunk caffe" tags={["Social Media", "Photography"]} img={assets.project2} height="699px" />
            <div className="flex gap-3 items-center justify-center w-full py-3">
              <div className="flex flex-col justify-between h-full shrink-0 w-6">
                <img src={assets.star1} alt="" className="w-4 h-4" />
                <img src={assets.star2} alt="" className="w-4 h-4 -rotate-90" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <p className="italic text-[#1f1f1f] text-sm tracking-[-0.04em] leading-[1.3]">
                  Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
                </p>
                <button className="bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-3xl self-start hover:bg-neutral-800 transition-colors">
                  Let&apos;s talk
                </button>
              </div>
              <div className="flex flex-col justify-between h-full shrink-0 w-6">
                <img src={assets.star3} alt="" className="w-4 h-4 rotate-90" />
                <img src={assets.star4} alt="" className="w-4 h-4 rotate-180" />
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-[117px] pt-[240px] min-w-0">
            <ProjectCard title="Agency 976" tags={["Social Media", "Photography"]} img={assets.project3} height="699px" />
            <ProjectCard title="Minimal Playground" tags={["Social Media", "Photography"]} img={assets.project4} height="744px" />
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    stars: assets.reviewStars1,
    text: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    name: "Lukas Weber",
    rotate: "rotate-[2.9deg]",
    pos: "absolute flex items-center justify-center",
    style: { left: "676px", top: "272px", width: "361.958px", height: "203.867px" },
  },
  {
    stars: assets.reviewStars2,
    text: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    name: "Marko Stojković",
    rotate: "rotate-[-6.85deg]",
    pos: "absolute flex items-center justify-center",
    style: { left: "102.02px", top: "142.02px", width: "380.876px", height: "295.234px" },
  },
  {
    stars: assets.reviewStars3,
    text: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    name: "Sarah Jenkins",
    rotate: "rotate-[2.23deg]",
    pos: "absolute flex items-center justify-center",
    style: { left: "305px", top: "553px", width: "363.132px", height: "280.316px" },
  },
  {
    stars: assets.reviewStars4,
    text: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    name: "Sofia Martínez",
    rotate: "rotate-[-4.15deg]",
    pos: "absolute flex items-center justify-center",
    style: { left: "987px", top: "546px", width: "366.766px", height: "228.169px" },
  },
];

function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden px-8 py-[120px] flex flex-col gap-2.5 items-center justify-center" style={{ height: "987px" }}>
      {testimonials.map((t) => (
        <div key={t.name} className={t.pos} style={t.style}>
          <div className={`${t.rotate} flex-none`}>
            <div
              className="flex flex-col gap-4 items-start p-6 rounded-[4px] w-[353px]"
              style={{ background: "#f1f1f1", border: "1px solid #ddd" }}
            >
              <img src={t.stars} alt="Stars" className="h-5 object-contain" />
              <p className="text-[#1f1f1f] text-[18px] leading-[1.3] tracking-[-0.04em]">{t.text}</p>
              <p className="font-black text-black text-base tracking-[-0.04em] uppercase">{t.name}</p>
            </div>
          </div>
        </div>
      ))}
      <h2
        className="font-medium text-black text-center capitalize relative"
        style={{ fontSize: "198px", letterSpacing: "-0.07em", lineHeight: 1.1 }}
      >
        Testimonials
      </h2>
    </section>
  );
}

const newsItems = [
  { img: assets.news1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { img: assets.news2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { img: assets.news3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

function NewsSection() {
  return (
    <section className="bg-[#f3f3f3] px-8 py-[120px] overflow-hidden">
      <div className="flex items-end justify-between w-full">
        <div className="flex items-center justify-center h-[706px] w-[110px] shrink-0">
          <h2
            className="font-light text-black uppercase -rotate-90 whitespace-nowrap"
            style={{ fontSize: "64px", letterSpacing: "-0.08em", lineHeight: 0.86 }}
          >
            Keep up with my latest news &amp; achievements
          </h2>
        </div>
        <div className="flex gap-[31px] items-start w-[1020px]">
          {newsItems.map((item, i) => (
            <React.Fragment key={i}>
              <div className={`flex flex-col gap-4 w-[353px] shrink-0 ${i === 1 ? "pt-[120px]" : ""}`} style={{ height: i !== 1 ? "581px" : undefined }}>
                <div className="relative h-[469px] w-full overflow-hidden shrink-0">
                  <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <p className="text-[#1f1f1f] text-sm tracking-[-0.04em] leading-[1.3] flex-1">{item.text}</p>
                <a href="#" className="flex items-center gap-2.5 border-b border-black pb-1 self-start">
                  <span className="text-black text-sm font-medium tracking-[-0.04em]">Read more</span>
                  <div className="w-[18px] h-[18px] -rotate-90">
                    <img src={assets.arrowDownSm} alt="" className="w-full h-full" />
                  </div>
                </a>
              </div>
              {i < newsItems.length - 1 && (
                <div className="flex-1 self-center min-w-px">
                  <hr className="border-l border-[#1f1f1f]/20 h-full" style={{ height: "400px" }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black px-8 pt-12 flex flex-col gap-[120px] overflow-hidden">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col gap-3 items-start w-[298px]">
            <p className="font-light italic text-white text-2xl tracking-[-0.04em] uppercase leading-[1.1]">
              Have a <strong className="font-black not-italic">project</strong> in mind?
            </p>
            <button className="border border-white text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-3xl hover:bg-white hover:text-black transition-colors">
              Let&apos;s talk
            </button>
          </div>
          <div className="text-white text-[18px] tracking-[-0.04em] uppercase text-center leading-[1.1] w-[298px]">
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
          <div className="text-white text-[18px] tracking-[-0.04em] uppercase text-right leading-[1.1] w-[298px]">
            <p>x.com</p>
            <p>Linkedin</p>
          </div>
        </div>
        <hr className="border-t border-white/20 w-full" />
      </div>

      <div className="flex items-end justify-between w-full">
        <div className="relative overflow-hidden w-[1093px] h-[219px] shrink-0">
          <div className="absolute w-[15px] h-[160px] flex items-center justify-center" style={{ left: "calc(50% - 546.5px)", top: "calc(50% - 75.5px)" }}>
            <p className="font-mono text-sm text-white uppercase whitespace-nowrap -rotate-90">[ Coded By Claude ]</p>
          </div>
          <h2
            className="absolute font-semibold text-white uppercase capitalize whitespace-nowrap"
            style={{ fontSize: "290px", letterSpacing: "-0.06em", lineHeight: 0.8, left: "calc(50% - 541.5px)", top: "calc(50% + 6.5px)", transform: "translateY(-50%)" }}
          >
            H.Studio
          </h2>
        </div>
        <div className="flex gap-[34px] items-center text-white text-xs text-center tracking-[-0.03em] uppercase pb-8">
          <a href="#" className="underline decoration-solid">licences</a>
          <a href="#" className="underline decoration-solid">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-[#fafafa] flex flex-col items-start w-full">
      <div className="w-full overflow-x-hidden">
        <Hero />
        <BioSection />
        <AboutSection />
        <FullWidthPhoto />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <NewsSection />
        <Footer />
      </div>
    </main>
  );
}
