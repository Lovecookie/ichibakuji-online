import confetti from "canvas-confetti";

export function playFirework() {
    var count = 30;
    var origin: confetti.Origin = { y: 0.7 };

    const fire = (particleRatio: number, opts: confetti.Options) => {
        confetti(opts);
    };

    fire(0.25, {
        origin: origin,
        spread: 26,
        startVelocity: 55,
        particleCount: count,
    });

    fire(0.2, {
        origin: origin,
        spread: 60,
        particleCount: count,
    });

    fire(0.35, {
        origin: origin,
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        particleCount: count,
    });
    fire(0.1, {
        origin: origin,
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
        particleCount: count,
    });
    fire(0.1, {
        origin: origin,
        spread: 120,
        startVelocity: 45,
        particleCount: count,
    });
}
