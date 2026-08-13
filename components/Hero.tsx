"use client";

import Image from "next/image";
import Logo from "./Logo";
import { useEffect, useRef } from "react";

function IconDownload() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17.5 11.25V16.25C17.5 16.4158 17.4342 16.5747 17.3169 16.6919C17.1997 16.8092 17.0408 16.875 16.875 16.875H3.125C2.95924 16.875 2.80027 16.8092 2.68306 16.6919C2.56585 16.5747 2.5 16.4158 2.5 16.25V11.25C2.5 11.0842 2.56585 10.9253 2.68306 10.8081C2.80027 10.6908 2.95924 10.625 3.125 10.625C3.29076 10.625 3.44973 10.6908 3.56694 10.8081C3.68415 10.9253 3.75 11.0842 3.75 11.25V15.625H16.25V11.25C16.25 11.0842 16.3158 10.9253 16.4331 10.8081C16.5503 10.6908 16.7092 10.625 16.875 10.625C17.0408 10.625 17.1997 10.6908 17.3169 10.8081C17.4342 10.9253 17.5 11.0842 17.5 11.25ZM9.55781 11.6922C9.61586 11.7503 9.68479 11.7964 9.76066 11.8279C9.83654 11.8593 9.91787 11.8755 10 11.8755C10.0821 11.8755 10.1635 11.8593 10.2393 11.8279C10.3152 11.7964 10.3841 11.7503 10.4422 11.6922L13.5672 8.56719C13.6253 8.50912 13.6713 8.44018 13.7027 8.36431C13.7342 8.28844 13.7503 8.20712 13.7503 8.125C13.7503 8.04288 13.7342 7.96156 13.7027 7.88569C13.6713 7.80982 13.6253 7.74088 13.5672 7.68281C13.5091 7.62474 13.4402 7.57868 13.3643 7.54725C13.2884 7.51583 13.2071 7.49965 13.125 7.49965C13.0429 7.49965 12.9616 7.51583 12.8857 7.54725C12.8098 7.57868 12.7409 7.62474 12.6828 7.68281L10.625 9.74141V2.5C10.625 2.33424 10.5592 2.17527 10.4419 2.05806C10.3247 1.94085 10.1658 1.875 10 1.875C9.83424 1.875 9.67527 1.94085 9.55806 2.05806C9.44085 2.17527 9.375 2.33424 9.375 2.5V9.74141L7.31719 7.68281C7.19991 7.56554 7.04085 7.49965 6.875 7.49965C6.70915 7.49965 6.55009 7.56554 6.43281 7.68281C6.31554 7.80009 6.24965 7.95915 6.24965 8.125C6.24965 8.29085 6.31554 8.44991 6.43281 8.56719L9.55781 11.6922Z" fill="white"/>
    </svg>
  );
}

function IconHeadset() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g clipPath="url(#headset-hero)">
        <path d="M15.7727 4.27031C15.025 3.51514 14.1357 2.91486 13.1558 2.50383C12.1758 2.09281 11.1244 1.87912 10.0617 1.875H10C7.84512 1.875 5.77849 2.73102 4.25476 4.25476C2.73102 5.77849 1.875 7.84512 1.875 10V14.375C1.875 14.8723 2.07254 15.3492 2.42417 15.7008C2.77581 16.0525 3.25272 16.25 3.75 16.25H5C5.49728 16.25 5.9742 16.0525 6.32583 15.7008C6.67746 15.3492 6.875 14.8723 6.875 14.375V11.25C6.875 10.7527 6.67746 10.2758 6.32583 9.92417C5.9742 9.57254 5.49728 9.375 5 9.375H3.15313C3.27366 8.07182 3.76315 6.83 4.56424 5.79508C5.36532 4.76016 6.44481 3.97502 7.67617 3.53169C8.90753 3.08836 10.2398 3.0052 11.5167 3.29196C12.7936 3.57872 13.9624 4.22352 14.8859 5.15078C16.0148 6.28539 16.7091 7.78052 16.8477 9.375H15C14.5027 9.375 14.0258 9.57254 13.6742 9.92417C13.3225 10.2758 13.125 10.7527 13.125 11.25V14.375C13.125 14.8723 13.3225 15.3492 13.6742 15.7008C14.0258 16.0525 14.5027 16.25 15 16.25H16.875C16.875 16.7473 16.6775 17.2242 16.3258 17.5758C15.9742 17.9275 15.4973 18.125 15 18.125H10.625C10.4592 18.125 10.3003 18.1908 10.1831 18.3081C10.0658 18.4253 10 18.5842 10 18.75C10 18.9158 10.0658 19.0747 10.1831 19.1919C10.3003 19.3092 10.4592 19.375 10.625 19.375H15C15.8288 19.375 16.6237 19.0458 17.2097 18.4597C17.7958 17.8737 18.125 17.0788 18.125 16.25V10C18.1291 8.93717 17.9234 7.88398 17.5197 6.90077C17.1161 5.91757 16.5224 5.02368 15.7727 4.27031ZM5 10.625C5.16576 10.625 5.32473 10.6908 5.44194 10.8081C5.55915 10.9253 5.625 11.0842 5.625 11.25V14.375C5.625 14.5408 5.55915 14.6997 5.44194 14.8169C5.32473 14.9342 5.16576 15 5 15H3.75C3.58424 15 3.42527 14.9342 3.30806 14.8169C3.19085 14.6997 3.125 14.5408 3.125 14.375V10.625H5ZM15 15C14.8342 15 14.6753 14.9342 14.5581 14.8169C14.4408 14.6997 14.375 14.5408 14.375 14.375V11.25C14.375 11.0842 14.4408 10.9253 14.5581 10.8081C14.6753 10.6908 14.8342 10.625 15 10.625H16.875V15H15Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="headset-hero">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Hero() {
  const lineRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const teamImgRef  = useRef<HTMLDivElement>(null);
  const bgOrangeRef = useRef<HTMLDivElement>(null);
  const bgBlueRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SHOTS = [
      { delay: 0,   duration: 600, origin: "left"  },
      { delay: 300, duration: 600, origin: "right" },
      { delay: 600, duration: 600, origin: "left"  },
      { delay: 900, duration: 600, origin: "right" },
    ];

    const team = teamImgRef.current;
    if (team) {
      team.style.transition = "none";
      team.style.opacity    = "0";
      team.style.transform  = "translateY(40px)";
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        SHOTS.forEach(({ delay, duration, origin }, i) => {
          const el = lineRefs.current[i];
          if (!el) return;

          el.style.transition      = "none";
          el.style.transform       = "scaleX(0)";
          el.style.transformOrigin = `${origin} center`;
          el.style.boxShadow       = "none";

          setTimeout(() => {
            el.style.transition = `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
            el.style.transform  = "scaleX(1)";

            setTimeout(() => {
              el.style.transition = "box-shadow 400ms ease";
              el.style.boxShadow  = "0px 0px 50px 16px #ffffff";
            }, duration + 100);
          }, delay);
        });

        // Team floats up after last line + glow settle
        setTimeout(() => {
          if (team) {
            team.style.transition = "opacity 700ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1)";
            team.style.opacity    = "1";
            team.style.transform  = "translateY(0)";
          }
        }, 900 + 600 + 500);
      });
    });
  }, []);

  useEffect(() => {
    const orange = bgOrangeRef.current;
    const blue   = bgBlueRef.current;
    if (!orange || !blue) return;

    const HOLD = 3000;
    const FADE = 3000;

    const cycle = () => {
      // Fade out orange → black
      orange.style.opacity = "0";
      setTimeout(() => {
        // Fade in blue
        blue.style.opacity = "1";
        setTimeout(() => {
          // Hold blue, then fade out
          setTimeout(() => {
            blue.style.opacity = "0";
            setTimeout(() => {
              // Fade in orange
              orange.style.opacity = "1";
              // Hold orange, then repeat
              setTimeout(cycle, HOLD);
            }, FADE);
          }, HOLD);
        }, FADE);
      }, FADE);
    };

    const startTimer = setTimeout(cycle, 5000);
    return () => clearTimeout(startTimer);
  }, []);

  return (
    <section className="hero">
      {/* Gradient background layers */}
      <div className="hero__bg">
        <div ref={bgOrangeRef} className="hero__bg-layer hero__bg-orange" />
        <div ref={bgBlueRef}   className="hero__bg-layer hero__bg-blue" />
      </div>

      <div className="hero__top">
        <Logo className="hero__logo" />
        <p className="hero__eyebrow">
          Lasertag NetronicFun · Schlüsselfertige Lasertag-Lösungen · Magdeburg, Deutschland
        </p>
      </div>

      <h1 className="hero__h1">
        Ihre Fläche.<br className="hero__h1-br" /> Unser Konzept.<br className="hero__h1-br" /> Ihr Gewinn.
      </h1>

      <h5 className="hero__h5">
        Wir bauen Ihnen ein profitables Lasertag-Business — von der Planung über die
        Lieferung bis zum laufenden Support. Alles aus einer Hand.
      </h5>

      <div className="hero__ctas">
        <button className="btn btn--outline">
          <IconDownload />
          Katalog anfordern
        </button>
        <button className="btn btn--primary">
          <IconHeadset />
          Kostenlose Beratung
        </button>
      </div>

      <div className="hero__team">
        <div className="hero__lines" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`hero__line hero__line--${i + 1}`}
              ref={el => { lineRefs.current[i] = el; }}
            />
          ))}
        </div>
        <div ref={teamImgRef} style={{ position: "relative", zIndex: 3 }}>
          <Image
            src="/images/netronic_team.png"
            alt="Lasertag Team Silhouetten"
            width={1360}
            height={420}
            priority
            className="hero__team-img"
          />
        </div>
      </div>
    </section>
  );
}