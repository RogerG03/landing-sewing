import { useEffect, useRef } from 'react';
import { Player } from '@remotion/player';
import { useCurrentFrame } from 'remotion';
import SewingArt from './SewingArt';

function Composition() {
  const frame = useCurrentFrame();
  return <SewingArt frame={205 * (1 - Math.cos(2 * Math.PI * frame / 1440))} />;
}

export default function MotionPlayer({ paused }) {
  const player = useRef(null);
  useEffect(() => {
    if (paused) player.current?.pause();
    else player.current?.play();
  }, [paused]);
  return <Player ref={player} component={Composition} durationInFrames={1440} fps={30} compositionWidth={720} compositionHeight={700} loop controls={false} clickToPlay={false} doubleClickToFullscreen={false} spaceKeyToPlayOrPause={false} style={{width:'100%',pointerEvents:'none'}} acknowledgeRemotionLicense />;
}
