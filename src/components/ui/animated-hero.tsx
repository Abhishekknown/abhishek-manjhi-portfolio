import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/src/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["shipped", "functional", "scalable", "polished", "live"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 1200);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex gap-6 md:gap-8 py-16 md:py-40 items-center justify-center flex-col">
          {/* Badge */}
          <div className="flex justify-center w-full">
            <Button variant="secondary" size="sm" className="gap-2 md:gap-4 text-xs md:text-sm">
              Read my latest case study <MoveRight className="w-3 h-3 md:w-4 md:h-4" />
            </Button>
          </div>

          {/* Main Content */}
          <div className="flex gap-4 md:gap-6 flex-col w-full items-center">
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl max-w-4xl tracking-tighter text-center font-display font-regular leading-tight md:leading-tight w-full">
              <span className="text-text-primary">I build products that are </span>
              <span className="relative inline-flex h-[1.1em] min-w-[120px] md:min-w-[200px] lg:min-w-[300px] justify-center overflow-hidden text-center text-accent align-bottom">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 80 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm md:text-lg lg:text-xl leading-relaxed tracking-tight text-text-muted max-w-2xl text-center">
              Design-led product thinking for founders who need more than good-looking screens.
              I've taken products from zero to live — defining flows, scoping features, and collaborating with developers.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-3 justify-center w-full md:w-auto">
            <Button size="lg" className="gap-4 text-sm md:text-base w-full md:w-auto justify-center" variant="outline" asChild>
              <a href="mailto:kumarabhishekbuild@gmail.com?subject=Discovery Call Request">
                <PhoneCall className="w-4 h-4" />
                <span>Jump on a call</span>
              </a>
            </Button>
            <Button size="lg" className="gap-4 text-sm md:text-base w-full md:w-auto justify-center" asChild>
              <a href="#work">
                <span>See selected work</span>
                <MoveRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
