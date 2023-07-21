import Lottie from "lottie-react";

type lottieType = {
    animationPath: unknown,
    width: string
}

const AnimationLottie = ({ animationPath, width }: lottieType) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        style: {
            width: width,
        }
    };

    return (
        <Lottie {...defaultOptions} />
    );
};

export default AnimationLottie;