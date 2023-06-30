import styles from "./Entrada.module.css";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Entrada() {

    const icon = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1 ,

        }
    }
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <>
            <div className={styles.container}>
            
            <div className={styles.innerContainer}>
                
                <motion.div className={styles.boxEntrada}
                varitants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration:3}
                }}
                ref={ ref }
                style={{
                    transform: isInView ? "none" : "translateX(10vh)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                ><text>Torne-se um freelancer com a</text>
                <div className={styles.logotipo}>
                        <div className={styles.logo}>
                            <svg
                                viewBox="0 0 43 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.9188 29.1784C19.801 29.5199 19.6431 29.8463 19.4483 30.1506L19.422 30.1917C19.1612 30.5994 18.8331 30.9599 18.4517 31.2579C18.1241 31.514 17.7608 31.7209 17.3735 31.8723L17.2486 31.9211C16.7725 32.1071 16.2715 32.2219 15.7619 32.2617L15.3764 32.2918C14.9573 32.3246 14.5361 32.3234 14.1172 32.2883L13.5328 32.2394C13.2328 32.2143 12.9334 32.1582 12.6445 32.0735C11.9973 31.8839 11.3956 31.5473 10.8972 31.0929C10.6891 30.9032 10.4995 30.6941 10.331 30.4684L10.272 30.3893C9.92738 29.9277 9.65786 29.4145 9.47341 28.8687L-1.60327e-06 0.837342L5.35162 0.837343L13.3196 25.5106L13.6246 26.1364C13.7353 26.3634 13.9175 26.5478 14.1432 26.6611C14.4501 26.8153 14.8097 26.8246 15.1241 26.6864L15.198 26.6539C15.4461 26.5448 15.6547 26.3623 15.7958 26.1309L16.0166 25.7685C16.121 25.5971 16.2058 25.4145 16.2694 25.2241L23.0335 4.96647L23.6397 3.36804C23.7571 3.05842 23.9116 2.76418 24.0999 2.49173C24.6342 1.71824 25.4181 1.1519 26.3203 0.88759L26.598 0.806238C27.0469 0.674719 27.5123 0.607949 27.9801 0.607949L29.2638 0.607949C29.7191 0.607949 30.1723 0.670474 30.6107 0.793768L30.6356 0.800778C31.2596 0.976304 31.8421 1.27523 32.3486 1.67987C32.7906 2.03304 33.1674 2.46089 33.4618 2.94402L33.608 3.18384C33.8654 3.6062 34.0733 4.05682 34.2276 4.52677L34.648 5.80759L43 32.0352L37.9105 32.0352L29.6548 6.83567C29.5529 6.52465 29.3133 6.27795 29.0055 6.16694C28.7725 6.08295 28.5158 6.08358 28.2829 6.16757C27.977 6.27786 27.7351 6.52156 27.6291 6.82893L19.9188 29.1784Z"
                                    fill="#F16125"
                                />
                            </svg>
                            VisiArte
                        </div>
                        </div>
                </motion.div>

               
            </div>
            </div>
        </>
    );
}

export default Entrada;
