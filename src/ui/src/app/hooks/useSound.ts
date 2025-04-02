import { useEffect, useRef, useState } from "react";

interface UseSoundOptions {
	volume?: number;
	loop?: boolean;
}

export const useSound = (src: string, options: UseSoundOptions = {}) => {
	const { volume = 1.0, loop = false } = options;
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		audioRef.current = new Audio(src);
		audioRef.current.volume = volume;
		audioRef.current.loop = loop;

		return () => {
			audioRef.current?.pause();
			audioRef.current = null;
		};
	}, [src, volume, loop]);

	const play = () => {
		if (audioRef.current) {
			audioRef.current.currentTime = 0;
			audioRef.current.play();
			setIsPlaying(true);
		}
	};

	const pause = () => {
		if (audioRef.current) {
			audioRef.current.pause();
			setIsPlaying(false);
		}
	};

	return { play, pause, isPlaying };
};
