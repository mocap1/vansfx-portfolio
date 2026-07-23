"use client";

import { useEffect, useMemo, useState } from "react";

const sections = [
  { id: "featured", label: "Featured", large: true },
  { id: "longform", label: "Long Form", large: true },
  { id: "guides", label: "Guides", large: false },
  { id: "montages", label: "Montages", large: false },
  { id: "education", label: "Educational", large: false },
  { id: "shortform", label: "Short Form", large: true },
  { id: "gamingshorts", label: "Gaming", large: false },
  { id: "ads", label: "Advertisements", large: false },
  { id: "entertainment", label: "Entertainment", large: false },
  { id: "ai", label: "Educational", large: false },
];

export default function ShowcaseNav() {
  const [active, setActive] = useState("featured");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(e=>e.isIntersecting)
        .sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if (visible) setActive((visible.target as HTMLElement).id);
    },{threshold:[0.25,0.45,0.7],rootMargin:"-20% 0px -35% 0px"});

    sections.forEach(s=>{
      const el=document.getElementById(s.id);
      if(el) observer.observe(el);
    });
    return ()=>observer.disconnect();
  },[]);

  const progress=useMemo(()=>{
    const i=sections.findIndex(s=>s.id===active);
    return i<=0?0:(i/(sections.length-1))*100;
  },[active]);

  return (
    <aside className="fixed left-8 top-1/2 z-50 hidden -translate-y-1/2 xl:block">
      <div className="group relative">
        <div className="absolute left-[14px] top-3 h-[calc(100%-24px)] w-[2px] rounded-full bg-white/10"/>
        <div className="absolute left-[14px] top-3 w-[2px] rounded-full bg-violet-500 transition-all duration-500" style={{height:`${progress}%`}}/>

        <div className="flex flex-col gap-5">
          {sections.map(section=>{
            const isActive=active===section.id;
            return(
              <button key={section.id}
                onClick={()=>document.getElementById(section.id)?.scrollIntoView({behavior:"smooth",block:"start"})}
                className="flex items-center gap-4 text-left">
                <div className={[
                  "relative z-10 rounded-full border border-white/10 transition-all duration-300",
                  section.large?"h-7 w-7":"h-3.5 w-3.5",
                  isActive?"scale-110 bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,.8)]":"bg-zinc-700 hover:bg-zinc-500"
                ].join(" ")} />
                <span className={[
                  "max-w-0 overflow-hidden whitespace-nowrap text-sm transition-all duration-300 group-hover:max-w-[180px]",
                  isActive?"font-semibold text-white":"text-zinc-500"
                ].join(" ")}>
                  {section.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  );
}