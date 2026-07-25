import React, { useEffect, useState } from "react";

import XIcon from "../assets/images/social/x.svg";
import DiscordIcon from "../assets/images/social/discord.svg";
import Dawg from "../assets/images/dawgs/Dawg.png";
import DawgAnim from "../assets/images/dawgs/DawgAnim.gif";
import DawgsBG from "../assets/images/DawgsBG.png";
import MineBG from "../assets/images/MineBG.png";
import DawgStrength from "../assets/images/dawgs/DawgStrength.png";

const Home = () => {

    const [mintEnabled, setMintEnabled] = useState(false);
    const [mintHover, setMintHover] = useState(false);

    const till_time = 1716436800; // 2024, May, 22th 00:00 EST(EDT)

    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");

    useEffect(() => {
        const timerID = setInterval(() => {
            if ((till_time - Date.now() / 1000) < 0) {
                setMintEnabled(true);
            } else {
                setHours(Math.floor((till_time - Date.now() / 1000) / 3600));
                setMinutes(Math.floor(((till_time - Date.now() / 1000) % 3600) / 60));
                setSeconds(Math.floor((till_time - Date.now() / 1000) % 60));
            }
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div className="font-gaegu relative w-[100vw] min-h-[100vh] flex flex-col justify-center items-center bg-[#FFF7EF]">
            <div className="relative w-full h-[100vh] flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 w-full flex justify-between items-center px-[10px] lg:px-[50px] py-[50px] z-10">
                    <div className="flex items-end">
                        <span className="text-[48px] lg:text-[64px] text-[#FF4D00] font-bold [text-shadow:_5px_5px_5px_rgba(0_0_0_/_40%)]">B</span>
                        <span className="text-[32px] lg:text-[48px] text-[#FF4D00] font-bold [text-shadow:_5px_5px_5px_rgba(0_0_0_/_40%)]">TC</span>
                        <span className="text-[48px] lg:text-[64px] text-[#FF4D00] font-bold [text-shadow:_5px_5px_5px_rgba(0_0_0_/_40%)]">D</span>
                        <span className="text-[32px] lg:text-[48px] text-[#FF4D00] font-bold [text-shadow:_5px_5px_5px_rgba(0_0_0_/_40%)]">AWGS</span>
                    </div>
                    <div className="flex gap-[8px] lg:gap-[16px] items-center bg-white rounded-[12px] lg:rounded-[24px] border-[2px] lg:border-[6px] border-[#FFCCB6] p-[8px] lg:p-[16px]">
                        <a href="https://x.com/btcdawgs?s=21" className="relative w-[32px] lg:w-[64px] h-[32px] lg:h-[64px] rounded-[8px] flex justify-center items-center overflow-hidden group">
                            <div className="absolute w-full h-full rounded-[8px] bg-[#FFD7C6] group-hover:animate-fly-in opacity-0 group-hover:opacity-100" />
                            <img className="w-[24px] lg:w-[30px] h-[24px] lg:h-[30px] object-contain z-10" src={XIcon} alt="x" />
                        </a>
                        <div className="w-[2px] lg:w-[6px] h-[24px] lg:h-[30px] bg-[#FFCCB6] rounded-full" />
                        <a href="https://discord.gg/kzmxAcG2" className="relative w-[32px] lg:w-[64px] h-[32px] lg:h-[64px] rounded-[8px] flex justify-center items-center overflow-hidden group">
                            <div className="absolute w-full h-full rounded-[8px] bg-[#FFD7C6] group-hover:animate-fly-in opacity-0 group-hover:opacity-100" />
                            <img className="w-[24px] lg:w-[30px] h-[24px] lg:h-[30px] object-contain z-10" src={DiscordIcon} alt="discord" />
                        </a>
                    </div>
                </div>
                <div className="relative flex w-full h-full flex flex-col gap-[16px] justify-center items-center overflow-hidden">
                    {!mintEnabled ?
                        <>
                            <div className="flex gap-[5px] items-center">
                                <div className="flex items-center">
                                    <span className="w-[37px] lg:w-[141px] text-[64px] lg:text-[246px] text-[#FF4D00] font-bold text-center -mt-[200px] lg:mt-0">{Math.floor(hours / 10)}</span>
                                    <span className="w-[37px] lg:w-[141px] text-[64px] lg:text-[246px] text-[#FF4D00] font-bold text-center -mt-[200px] lg:mt-0">{hours % 10}</span>
                                </div>
                                <span className="text-[64px] lg:text-[246px] text-[#FF4D00] font-bold -mt-[200px] lg:mt-0">:</span>
                                <div className="flex items-center">
                                    <span className="w-[37px] lg:w-[141px] text-[64px] lg:text-[246px] text-[#FF4D00] font-bold text-center -mt-[200px] lg:mt-0">{Math.floor(minutes / 10)}</span>
                                    <span className="w-[37px] lg:w-[141px] text-[64px] lg:text-[246px] text-[#FF4D00] font-bold text-center -mt-[200px] lg:mt-0">{minutes % 10}</span>
                                </div>
                                <span className="text-[64px] lg:text-[246px] text-[#FF4D00] font-bold -mt-[200px] lg:mt-0">:</span>
                                <div className="flex items-center">
                                    <span className="w-[37px] lg:w-[141px] text-[64px] lg:text-[246px] text-[#FF4D00] font-bold text-center -mt-[200px] lg:mt-0">{Math.floor(seconds / 10)}</span>
                                    <span className="w-[37px] lg:w-[141px] text-[64px] lg:text-[246px] text-[#FF4D00] font-bold text-center -mt-[200px] lg:mt-0">{seconds % 10}</span>
                                </div>
                            </div>

                            <div className="absolute bottom-0 lg:top-[50%] left-0 w-full lg:h-full flex justify-center">
                                <img className="w-full h-full object-contain object-bottom" src={Dawg} alt="Dawg" />
                            </div>
                        </> :
                        <>
                            <div className="flex flex-col gap-[16px] justify-center items-center -mt-[200px] lg:mt-0">
                                <button onMouseEnter={(e) => { setMintHover(true); }} onMouseOut={(e) => { setMintHover(false); }} className="text-[48px] lg:text-[72px] text-white font-bold bg-[#FF4D00] hover:bg-[#FF6522] px-[20px] lg:px-[200px] py-[10px] lg:py-[30px] rounded-[12px] lg:rounded-[24px] z-10 hover:shadow-lg">Minting now</button>
                                <div className="flex gap-[16px] justify-center items-center z-10">
                                    <span className="text-[24px] text-[#FF4D00] font-bold">mint partner</span>
                                    <svg width="105" height="22" viewBox="0 0 105 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.29636 2.64028C2.29636 3.02795 2.28127 3.41335 2.26565 3.80073C2.20511 5.30205 2.32772 6.75744 2.50456 8.24797C2.81981 10.9051 2.49699 13.5756 2.54552 16.2448C2.55115 16.5544 2.47788 17.0226 2.90389 17.0025C3.59399 16.97 4.21981 16.8252 4.92443 16.8728C6.49045 16.9786 8.04803 17.2079 9.60035 17.4326C10.2 17.5193 10.7685 17.5632 11.3786 17.593C14.3505 17.7383 17.3237 17.8685 20.2969 17.9855C20.868 18.008 22.476 18.0742 23.3073 18.0742C23.4171 18.0742 23.5346 18.0554 23.6418 18.0298C23.8573 17.9785 24.0711 18.0103 24.2902 18.0298C24.8129 18.0765 25.3061 18.0325 25.8295 18.0025C26.1076 17.9867 26.5898 18.3887 26.734 18.0947C27.0695 17.4107 26.895 16.514 26.8978 15.7943C26.9017 14.8015 26.9386 13.7475 27.089 12.7635C27.3071 11.3359 27.447 9.89461 27.676 8.46982C27.79 7.76043 27.9586 7.06081 28.0856 6.35371C28.1161 6.18386 28.4204 5.15946 28.2562 5.00213C28.1969 4.94529 27.8488 4.96129 27.816 4.95776C27.2896 4.90116 26.7722 4.78187 26.2562 4.66765C25.1201 4.41617 23.9798 4.09837 22.8226 3.95773C22.3737 3.90316 21.9158 3.88288 21.4642 3.86899C19.7006 3.81472 17.9869 3.55662 16.2627 3.18296C13.9192 2.67508 11.6586 2.12599 9.26246 2.08395C7.38398 2.05099 5.5229 1.76913 3.64794 1.90305" stroke="#FF4D00" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M32.7683 8.04724C32.9351 9.19585 32.8395 10.3717 32.741 11.5218C32.6309 12.808 32.3084 14.3057 32.6591 15.5833C32.7074 15.7592 32.8152 15.8866 32.881 16.0509C32.9698 16.273 32.9516 16.5459 32.9526 16.7779C32.9566 17.65 32.8912 18.5205 32.8912 19.3923C32.8912 20.06 33.0223 19.2028 33.0619 18.9896C33.292 17.7503 33.5097 16.4857 33.8708 15.2761C34.4626 13.2936 34.98 11.3446 35.8128 9.43978C35.9788 9.05996 36.1081 8.58397 36.4067 8.27933C36.7436 7.93555 37.2061 7.71906 37.6524 7.55917C38.0597 7.41328 38.4493 7.25626 38.8402 7.0711C38.9837 7.00312 39.1207 6.94141 39.2805 6.94141" stroke="#FF4D00" stroke-width="3" stroke-linecap="round" />
                                        <path d="M50.7694 2.20898C51.0463 3.63472 51.2968 5.07753 51.3189 6.53335C51.3505 8.61618 50.9209 10.6564 50.8411 12.7315C50.7634 14.751 50.813 16.7666 50.8308 18.7829C50.8316 18.8683 50.8308 19.5901 50.8308 19.4041C50.8308 18.118 50.9389 16.8846 50.6738 15.6121C50.4662 14.6156 50.2215 13.5947 49.9298 12.6189C49.7642 12.0652 49.5506 11.513 49.3427 10.9738C48.9653 9.99474 47.7254 9.4007 46.9126 8.87131C46.4213 8.55129 44.9528 7.28954 44.2675 7.92589C43.9399 8.23005 43.6596 8.60852 43.4995 9.02832C43.2257 9.74652 43.2289 10.7128 43.1514 11.4789C43.0657 12.3262 42.9253 13.2413 43.0968 14.0865C43.2359 14.772 43.5119 15.4559 43.8238 16.0797C44.0127 16.4575 44.2367 16.6093 44.6395 16.7214C45.3917 16.9308 46.1343 17.0635 46.9058 17.1856C47.2701 17.2432 47.7003 17.3736 48.0662 17.3835C48.2777 17.3892 48.4721 17.3221 48.6806 17.3221" stroke="#FF4D00" stroke-width="3" stroke-linecap="round" />
                                        <path d="M55.3164 8.47656C56.9398 8.70478 58.5515 8.90745 60.18 9.06361C60.8039 9.12343 61.4292 9.16298 62.0538 9.21379C62.1568 9.22216 62.9535 9.18233 62.8286 9.43222C62.5248 10.0397 61.8778 10.5708 61.4531 11.091C60.8476 11.8327 60.3138 12.6034 59.8421 13.4358C59.1234 14.7042 58.5078 16.0129 57.6987 17.2311C57.3328 17.7821 56.9537 18.316 56.6816 18.9206C56.6419 19.009 56.4281 19.2892 56.4564 19.2892C57.08 19.2892 57.7249 19.1306 58.3404 19.0469C59.1359 18.9386 59.9192 18.8646 60.7227 18.8591C61.5308 18.8537 62.3789 18.787 63.1801 18.9206" stroke="#FF4D00" stroke-width="3" stroke-linecap="round" />
                                        <path d="M66.8047 11.6713C67.3332 11.319 67.7457 10.5943 68.0948 10.0706C68.4223 9.5793 68.7838 9.12821 69.187 8.6951C69.6484 8.19953 70.1661 7.60231 70.8594 7.44592C71.758 7.24323 72.7452 7.661 73.566 7.98177C74.1258 8.20054 74.5943 8.59985 75.0097 9.02958C75.2008 9.22729 75.4227 9.5308 75.5217 9.78046C75.7864 10.4478 75.8816 11.1877 75.9654 11.8897C76.1778 13.6696 76.2365 15.4627 76.3784 17.2483C76.4431 18.0629 76.5497 18.8426 77.003 19.535C77.1703 19.7906 77.2225 19.9162 77.532 19.9992C77.6899 20.0416 77.8911 20.1468 78.0576 20.1323C78.2463 20.1159 77.9539 19.7125 77.9245 19.6579" stroke="#FF4D00" stroke-width="3" stroke-linecap="round" />
                                        <path d="M74.6668 13.5151C74.4536 13.1741 74.335 13.208 73.9364 13.208C72.4521 13.208 70.9757 13.4115 69.5301 13.7506C67.9985 14.11 67.3637 15.1763 67.2979 16.6893C67.2827 17.0404 67.4327 17.258 67.7041 17.488C68.6584 18.2964 70.0417 18.5311 71.2537 18.5733C72.7467 18.6253 74.2145 18.1842 75.7112 18.1842" stroke="#FF4D00" stroke-width="3" stroke-linecap="round" />
                                        <path d="M80.5039 10.9951C81.084 10.0346 81.6181 9.56153 82.6541 9.13842C83.526 8.78237 84.3402 8.50423 85.2788 8.41484C85.8178 8.36351 85.9688 8.49857 86.429 8.84148C86.814 9.1283 87.222 9.38144 87.6099 9.66403C87.857 9.84399 88.1629 10.0466 88.2175 10.374C88.3159 10.9643 88.1789 11.6246 88.1594 12.217C88.1386 12.85 88.198 13.4828 88.1697 14.1147C88.1512 14.5271 88.1044 14.9366 88.1287 15.3502C88.1558 15.8109 88.3245 16.2697 88.4359 16.7154C88.6334 17.5054 88.968 18.3074 89.3062 19.0466C89.3549 19.153 89.623 19.7351 89.7192 19.3503" stroke="#FF4D00" stroke-width="3" stroke-linecap="round" />
                                        <path d="M87.4449 14.0668C86.8228 13.7597 86.2018 13.4733 85.5336 13.2784C84.9702 13.1141 83.9885 12.6908 83.4721 13.1589C83.0367 13.5535 82.8268 14.1676 82.6495 14.7085C82.5078 15.1405 82.273 15.528 82.0659 15.9303C81.8535 16.3429 81.3073 17.208 81.7826 17.6164C82.2832 18.0466 83.1957 18.1784 83.769 18.2785C84.4544 18.3983 85.4004 18.5621 86.1274 18.4902C86.2243 18.4806 86.2162 18.303 86.2162 18.2444" stroke="#FF4D00" stroke-width="3" stroke-linecap="round" />
                                        <path d="M92.7305 8.10742C92.9919 8.20373 93.0179 8.7049 93.0513 8.90608C93.331 10.5933 93.4571 12.3127 93.6383 14.012C93.8114 15.6345 94.0206 17.2465 94.0206 18.8791C94.0206 19.1681 94.0206 19.457 94.0206 19.746C94.0206 19.9016 94.001 20.0573 94.0343 19.7938C94.1089 19.2022 94.2961 18.6275 94.4234 18.0463C94.6903 16.827 94.9114 15.6161 95.3312 14.4353C95.6709 13.4799 96.0678 12.4922 96.5736 11.6092C96.7704 11.2656 97.0306 11.0112 97.3791 10.8242C98.4418 10.2542 99.6507 10.3198 100.806 10.5034C101.396 10.5972 101.994 10.7095 102.581 10.8242C102.811 10.8694 102.744 11.117 102.744 11.3021" stroke="#FF4D00" stroke-width="3" stroke-linecap="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-0 lg:top-[50%] left-0 w-full lg:h-full flex justify-center">
                                {!mintHover && <img className="w-full h-full object-contain object-bottom" src={Dawg} alt="Dawg" />}
                                {mintHover && <img className="w-full h-full object-contain object-bottom" src={DawgAnim} alt="DawgAnim" />}
                            </div>
                        </>
                    }
                </div>
            </div>
            <div className="relative w-full flex space-x-[32px] lg:space-x-[72px] bg-white overflow-hidden group">
                <div className="animate-loop-scroll flex space-x-[32px] lg:space-x-[72px] items-center group-hover:paused">
                    <span className="text-[32px] lg:text-[72px] text-[#FF4D00] text-nowrap">For the runes</span>
                    <div className="w-[8px] lg:w-[16px] h-[8px] lg:h-[16px] bg-[#FF4D00] rounded-full" />
                    <span className="text-[32px] lg:text-[72px] text-[#FF4D00] text-nowrap">For the memes</span>
                    <div className="w-[8px] lg:w-[16px] h-[8px] lg:h-[16px] bg-[#FF4D00] rounded-full" />
                    <span className="text-[32px] lg:text-[72px] text-[#FF4D00] text-nowrap">For the culture</span>
                    <div className="w-[8px] lg:w-[16px] h-[8px] lg:h-[16px] bg-[#FF4D00] rounded-full" />
                </div>
                <div className="animate-loop-scroll flex space-x-[32px] lg:space-x-[72px] items-center group-hover:paused" aria-hidden="true">
                    <span className="text-[32px] lg:text-[72px] text-[#FF4D00] text-nowrap">For the runes</span>
                    <div className="w-[8px] lg:w-[16px] h-[8px] lg:h-[16px] bg-[#FF4D00] rounded-full" />
                    <span className="text-[32px] lg:text-[72px] text-[#FF4D00] text-nowrap">For the memes</span>
                    <div className="w-[8px] lg:w-[16px] h-[8px] lg:h-[16px] bg-[#FF4D00] rounded-full" />
                    <span className="text-[32px] lg:text-[72px] text-[#FF4D00] text-nowrap">For the culture</span>
                    <div className="w-[8px] lg:w-[16px] h-[8px] lg:h-[16px] bg-[#FF4D00] rounded-full" />
                </div>
            </div>
            <div className="w-full bg-[#FF4D00]">
                <div className="sticky left-[50%] top-[50%] w-full text-[48px] lg:text-[140px] text-white font-bold text-center">6969 dawgs</div>
                <img className="relative w-full object-contain" src={DawgsBG} alt="DawgsBG" />
            </div>
            <div className="relative w-full flex">
                <img className="w-full object-contain z-10" src={MineBG} alt="MineBG" />
            </div>
            <div className="relative w-full lg:min-h-[100vh] flex flex-col gap-[36px] justify-between items-center bg-[#FF9D42] py-[100px]">
                <div className="flex gap-[36px] gap-[72px] items-end z-10">
                    <span className="text-[48px] lg:text-[80px] text-white font-bold [text-shadow:_5px_5px_5px_rgba(0_0_0_/_40%)]">Get</span>
                    <span className="text-[48px] lg:text-[80px] text-white font-bold [text-shadow:_5px_5px_5px_rgba(0_0_0_/_40%)]">pumped</span>
                </div>
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-[72px] items-center lg:items-end z-10">
                    <div className="flex items-end">
                        <span className="text-[80px] lg:text-[116px] text-white font-bold [text-shadow:_5px_5px_5px_rgba(0_0_0_/_40%)]">B</span>
                        <span className="text-[48px] lg:text-[80px] text-white font-bold [text-shadow:_5px_5px_5px_rgba(0_0_0_/_40%)]">TC</span>
                        <span className="text-[80px] lg:text-[116px] text-white font-bold [text-shadow:_5px_5px_5px_rgba(0_0_0_/_40%)]">D</span>
                        <span className="text-[48px] lg:text-[80px] text-white font-bold [text-shadow:_5px_5px_5px_rgba(0_0_0_/_40%)]">AWGS</span>
                    </div>
                    <span className="text-[48px] lg:text-[80px] text-white font-bold [text-shadow:_5px_5px_5px_rgba(0_0_0_/_40%)]">incoming</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-full flex flex-col">
                    <img className="w-full h-full object-contain object-bottom" src={DawgStrength} alt="DawgStrength" />
                </div>
            </div>
            <div className="w-full flex bg-[#FF4D00] px-[16px] lg:px-[72px] py-[16px]">
                <span className="text-[16px] lg:text-[24px] text-white [text-shadow:_5px_5px_5px_rgba(0_0_0_/_40%)]">All rights reserved BTCDAWGS c 2024</span>
            </div>
        </div>
    );
}

export default Home;