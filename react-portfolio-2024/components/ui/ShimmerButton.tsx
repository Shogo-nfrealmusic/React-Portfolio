import React from 'react'

function ShimmerButton({title, icon, position}: {
  title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClasses?: string;
}) {
  return (
    <button className="inline-flex h-12 w-full tracking-widest animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors md:w-60 md:mt-10 gap-2">
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  )
}

export default ShimmerButton
  
      