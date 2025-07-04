"use client";

import { animate, createScope } from "animejs";
import { useEffect, useRef, useState } from "react";

export const HeaderTitle = ({ titles, delay = 7000 }: Props) => {
	const root = useRef(null);
	const scope = useRef<ReturnType<typeof createScope> | null>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const [index, setIndex] = useState(0);
	const [showText, setShowText] = useState(true);

	useEffect(() => {
		scope.current = createScope({ root });

		if (showText) {
			scope.current.add(() => {
				animate(".animated-letter", {
					translateY: ["1.1em", 0],
					opacity: [0, 1],
					duration: 750,
					delay: (_, i) => 30 * i,
					easing: "easeOutExpo",
				});
			});

			timeoutRef.current = setTimeout(() => {
				setShowText(false);
			}, delay);
		} else {
			timeoutRef.current = setTimeout(() => {
				setIndex((prev) => (prev + 1) % titles.length);
				setShowText(true);
			}, 500);
		}

		return () => {
			scope.current?.revert();
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [showText, delay, titles.length]);

	const splitText = (text: string) =>
		text.split("").map((char, i) =>
			char === " " ? (
				<span key={`space-${i + 1}`}>&nbsp;</span>
			) : (
				<span className="inline-block animated-letter" key={`char-${i + 1}`}>
					{char}
				</span>
			),
		);

	return (
		<h1
			className="uppercase text-[clamp(30px,5vw,75px)] font-semibold min-h-[230px]"
			ref={root}
		>
			{showText && splitText(titles[index] || "")}
		</h1>
	);
};

interface Props {
	titles: string[];
	delay?: number;
}
