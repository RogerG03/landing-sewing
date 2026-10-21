const colors = { ink: '#453b49', lavender: '#d7b5f0', yellow: '#fff28a', pink: '#f49be4', blush: '#f2a6bd', blue: '#a5d9e8', green: '#a6e99a' };
const clamp = (v) => Math.max(0, Math.min(1, v));

export default function SewingArt({ frame = 0 }) {
  const sewing = clamp(frame / 230);
  const zip = clamp((frame - 230) / 180);
  const bloom = clamp((frame - 420) / 179);
  const machineOpacity = 1 - clamp((frame - 200) / 90);
  const zipOpacity = clamp((frame - 220) / 60) * (1 - clamp((frame - 420) / 70));
  return <svg viewBox="0 0 720 700" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <clipPath id="growing-seam"><rect x="110" y="500" width={460 * sewing} height="100"/></clipPath>
      <pattern id="linen" width="7" height="7" patternUnits="userSpaceOnUse"><path d="M0 0H7M0 0V7" stroke="#453b49" strokeOpacity=".045" strokeWidth=".6"/></pattern>
      <pattern id="stitch" width="20" height="10" patternUnits="userSpaceOnUse"><path d="M2 5H12" stroke="#453b49" strokeWidth="1.7"/></pattern>
      <linearGradient id="body" x1="220" y1="190" x2="540" y2="490" gradientUnits="userSpaceOnUse"><stop stopColor="#e7cff8"/><stop offset="1" stopColor="#c09bdc"/></linearGradient>
      <linearGradient id="fabric" x1="140" y1="480" x2="420" y2="620"><stop stopColor="#a5d9e8"/><stop offset="1" stopColor="#c2e7ed"/></linearGradient>
    </defs>
    <path d="M373 58C536 34 651 169 639 342C632 462 647 573 503 619C361 665 136 617 103 482C78 381 131 299 120 216C111 126 231 81 373 58Z" fill={colors.yellow}/>
    <path d="M373 58C536 34 651 169 639 342C632 462 647 573 503 619C361 665 136 617 103 482C78 381 131 299 120 216C111 126 231 81 373 58Z" fill="url(#linen)"/>
    <g stroke={colors.ink} strokeWidth="1.4" opacity=".35"><path d="M116 151l-11-10m15-3l-1-14M605 541l15 8m-12 6l8 14"/><path d="M577 125l5-13 5 13 13 5-13 5-5 13-5-13-13-5Z"/></g>
    <g opacity={machineOpacity} transform={`translate(0 ${-35 * (1 - machineOpacity)})`}>
      <path d={`M551 178C650 147 680 241 626 272C568 305 566 344 611 368C671 400 652 465 586 463C534 462 513 499 524 553`} stroke={colors.blush} strokeWidth="4" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - Math.max(.25,sewing)}/>
      <g transform={`translate(539 180) rotate(${sewing * 270})`}><rect x="-22" y="-43" width="44" height="87" rx="9" fill={colors.pink} stroke={colors.ink} strokeWidth="1.5"/>{Array.from({length:13},(_,i)=><path key={i} d={`M-21 ${-33+i*5}L21 ${-28+i*5}`} stroke="#b967ab" strokeWidth="1"/>)}<ellipse cy="-43" rx="29" ry="8" fill={colors.blush} stroke={colors.ink} strokeWidth="1.5"/><ellipse cy="44" rx="29" ry="8" fill={colors.blush} stroke={colors.ink} strokeWidth="1.5"/><ellipse cy="-43" rx="7" ry="3" fill={colors.ink}/></g>
      <path d="M135 487C191 461 286 483 361 477L551 483L575 574C469 557 368 603 273 576C210 557 172 582 115 555Z" fill="url(#fabric)" stroke={colors.ink} strokeWidth="1.5"/>
      <path d="M135 487C191 461 286 483 361 477L551 483L575 574C469 557 368 603 273 576C210 557 172 582 115 555Z" fill="url(#linen)"/>
      <path d="M150 534C231 518 306 558 379 537S499 519 550 539" stroke={colors.ink} strokeWidth="2" strokeDasharray="7 7" clipPath="url(#growing-seam)"/>
      <ellipse cx="340" cy="500" rx="221" ry="16" fill={colors.ink} opacity=".07"/>
      <path d="M190 194H435C466 194 489 221 489 253V464H405V328H271V384H190Z" fill="url(#body)" stroke={colors.ink} strokeWidth="2"/>
      <path d="M190 194H435C466 194 489 221 489 253H190Z" fill="#ead9f5"/>
      <path d="M190 194H435C466 194 489 221 489 253V464H405V328H271V384H190Z" stroke={colors.ink} strokeWidth="2"/>
      <rect x="168" y="455" width="347" height="34" rx="12" fill="#c3a0df" stroke={colors.ink} strokeWidth="2"/>
      <path d="M181 467H501" stroke="#eddef8" strokeWidth="3"/>
      <path d="M230 179V194M219 179H241" stroke={colors.ink} strokeWidth="4" strokeLinecap="round"/>
      <rect x="218" y="152" width="25" height="28" rx="3" fill={colors.blush} stroke={colors.ink} strokeWidth="1.5"/>
      {Array.from({length:5},(_,i)=><path key={i} d={`M219 ${157+i*4}H242`} stroke="#cc7d96"/>)}
      <path d="M230 152C211 128 175 130 174 163L175 281L206 308V400" stroke={colors.blush} strokeWidth="2.5"/>
      <rect x="188" y="268" width="84" height="112" rx="9" fill="#e5cef5" stroke={colors.ink} strokeWidth="1.5"/>
      <path d="M200 280V354" stroke="white" strokeOpacity=".6" strokeWidth="3"/>
      <circle cx="230" cy="309" r="19" fill={colors.yellow} stroke={colors.ink} strokeWidth="1.5"/>
      <path d="M226 309h8" stroke={colors.ink} strokeWidth="2"/>
      <g transform={`translate(0 ${Math.sin(frame * .65) * 8 * (frame<230?1:0)})`}><path d="M222 380V435" stroke={colors.ink} strokeWidth="4"/><path d="M222 435V451" stroke={colors.ink} strokeWidth="1.4"/><path d="M231 384V441H240" stroke="#8b7a8d" strokeWidth="3"/></g>
      <rect x="206" y="447" width="43" height="6" rx="2" fill={colors.ink}/>
      <circle cx="441" cy="285" r="24" fill={colors.yellow} stroke={colors.ink} strokeWidth="1.5"/>
      <g transform={`rotate(${frame * 5} 441 285)`}><path d="M441 267V303M423 285H459" stroke={colors.ink} strokeWidth="1.5"/><circle cx="441" cy="285" r="7" fill="#e9d879" stroke={colors.ink}/></g>
      <rect x="331" y="273" width="48" height="14" rx="7" fill={colors.ink}/>
      <text x="355" y="283" textAnchor="middle" fontSize="7" fill="#fff9ee" fontFamily="sans-serif" letterSpacing="1.5">ATELIER</text>
      <path d="M421 367H471M421 376H461M421 385H451" stroke={colors.ink} strokeWidth="1.5" opacity=".4"/>
      <circle cx="444" cy="421" r="8" fill={colors.green} stroke={colors.ink} strokeWidth="1.3"/>
      <g transform="rotate(-22 135 400)"><ellipse cx="112" cy="403" rx="22" ry="13" stroke={colors.ink} strokeWidth="5"/><ellipse cx="150" cy="403" rx="22" ry="13" stroke={colors.ink} strokeWidth="5"/><path d="M126 393L160 332L136 390L108 331L140 393" fill="#d1d5d5" stroke={colors.ink} strokeWidth="2"/><circle cx="133" cy="388" r="4" fill={colors.blush} stroke={colors.ink}/></g>
      <g transform="rotate(14 510 557)"><path d="M456 554H579V581H456Z" fill={colors.green} stroke={colors.ink} strokeWidth="1.3"/>{Array.from({length:16},(_,i)=><path key={i} d={`M${464+i*7} 554v${i%2?9:15}`} stroke={colors.ink}/>)}</g>
      <circle cx="112" cy="257" r="36" fill={colors.blush}/><path d="M96 257h32m-16-16v32" stroke={colors.ink} strokeWidth="1.5"/><circle cx="112" cy="257" r="22" stroke={colors.ink} strokeWidth="1.3" strokeDasharray="2 4"/>
    </g>
    <g opacity={zipOpacity}>
      <path d={`M160 150Q360 110 560 150V570Q360 608 160 570Z`} fill={colors.blue}/>
      <path d={`M160 150Q255 125 356 140L${356-zip*145} 170L356 ${210+zip*300}V590Q260 602 160 570Z`} fill={colors.blush} stroke={colors.ink} strokeWidth="1.5"/>
      <path d={`M560 150Q465 125 364 140L${364+zip*145} 170L364 ${210+zip*300}V590Q460 602 560 570Z`} fill={colors.pink} stroke={colors.ink} strokeWidth="1.5"/>
      {Array.from({length:30},(_,i)=>{const y=160+i*14; const split=Math.max(0,(210+zip*300-y)/(210+zip*300-140))*zip*145; return <g key={i}><rect x={345-split} y={y} width="12" height="7" rx="2" fill={colors.yellow} stroke={colors.ink}/><rect x={363+split} y={y+5} width="12" height="7" rx="2" fill={colors.yellow} stroke={colors.ink}/></g>;})}
      <g transform={`translate(360 ${210+zip*300})`}><rect x="-17" y="-13" width="34" height="37" rx="8" fill={colors.yellow} stroke={colors.ink} strokeWidth="2"/><rect x="-7" y="5" width="14" height="45" rx="6" fill={colors.yellow} stroke={colors.ink} strokeWidth="2"/><path d="M0 31v8" stroke={colors.ink} strokeWidth="2"/></g>
    </g>
    <g opacity={clamp((frame-410)/65)} transform={`translate(360 350) rotate(${-12+12*bloom}) scale(${.8+.2*bloom})`}>
      <circle r="206" fill="#d7b5f0" stroke={colors.ink} strokeWidth="2"/><circle r="186" fill="#fbf8ef" stroke={colors.ink} strokeWidth="2"/><circle r="186" fill="url(#linen)"/><rect x="-22" y="-220" width="44" height="30" rx="3" fill={colors.blush} stroke={colors.ink} strokeWidth="2"/><path d="M-35-211H35" stroke={colors.ink} strokeWidth="4" strokeLinecap="round"/>
      <path d="M-18 130C-20 64 28 22 4-71M-12 72C-60 55-80 18-76-35M-11 91C32 91 72 46 78 5" stroke="#679c61" strokeWidth="4" strokeDasharray="4 4" pathLength="1" strokeDashoffset={1-bloom}/>
      {[[-76,-49,colors.pink],[3,-86,colors.blush],[80,-6,colors.yellow],[-45,25,colors.blue]].map(([x,y,c],i)=><g key={i} transform={`translate(${x} ${y}) scale(${clamp(bloom*2-i*.25)})`}>{Array.from({length:6},(_,j)=><ellipse key={j} cy="-20" rx="10" ry="19" fill={c} stroke={colors.ink} strokeWidth="1" transform={`rotate(${j*60})`}/>)}<circle r="9" fill={colors.yellow} stroke={colors.ink}/></g>)}
      <path d="M-26 66C-77 64-78 35-52 39C-33 42-24 56-26 66M25 44C65 14 69 46 39 54Z" fill={colors.green} stroke="#679c61" strokeWidth="1.5"/>
      <path d="M100 95C160 120 194 93 163 59S156-8 191-29" stroke={colors.pink} strokeWidth="2.5" pathLength="1" strokeDasharray="1" strokeDashoffset={1-bloom}/><path d="M181-48L200-16" stroke={colors.ink} strokeWidth="2"/>
    </g>
  </svg>;
}
