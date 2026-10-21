import { useEffect, useRef } from 'react';
import { Player } from '@remotion/player';
import { useCurrentFrame } from 'remotion';
import SewingArt from './SewingArt';

function Composition() { return <SewingArt frame={useCurrentFrame()} />; }

export default function MotionPlayer({ paused }) {
  const player = useRef(null);
  const current = useRef(0);
  useEffect(() => {
    if (paused) return;
    const story = document.querySelector('.journey');
    let raf = 0;
    let start = performance.now();
    const introInitial = Math.min(45, current.current);
    let last = start;
    let visible = true;
    let disposed = false;
    const tick = (now) => {
      raf = 0;
      if (disposed || document.hidden || !visible) return;
      const distance = Math.max(1, story.offsetHeight - innerHeight);
      const progress = Math.max(0, Math.min(1, -story.getBoundingClientRect().top / distance));
      const intro = Math.min(45, introInitial + (now - start) / 40);
      const target = progress > .002 ? 45 + progress * 554 : intro;
      current.current += (target-current.current) * (1-Math.exp(-Math.min(64, now-last)/70));
      last = now;
      player.current?.seekTo(Math.round(current.current));
      if (Math.abs(target-current.current)>.3 || intro<45) raf = requestAnimationFrame(tick);
    };
    const wake = () => { if (!raf && !document.hidden && visible) { last = performance.now(); raf = requestAnimationFrame(tick); } };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) wake(); else {cancelAnimationFrame(raf); raf=0;} });
    observer.observe(story);
    addEventListener('scroll',wake,{passive:true});
    addEventListener('resize',wake);
    document.addEventListener('visibilitychange',wake);
    wake();
    return () => { disposed=true;cancelAnimationFrame(raf);observer.disconnect();removeEventListener('scroll',wake);removeEventListener('resize',wake);document.removeEventListener('visibilitychange',wake); };
  }, [paused]);
  return <Player ref={player} component={Composition} durationInFrames={600} fps={30} compositionWidth={720} compositionHeight={700} controls={false} clickToPlay={false} doubleClickToFullscreen={false} spaceKeyToPlayOrPause={false} initialFrame={Math.round(current.current)} style={{width:'100%',pointerEvents:'none'}} acknowledgeRemotionLicense />;
}
