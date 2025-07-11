import Image from 'next/image';
import truck from "@/images/ManTruck.png";
import hands from "@/images/handsWheel.png";
import { useTranslations } from 'next-intl';

export default function Whytho() {
    const t = useTranslations('Why');

    return (
        <div className="w-full flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-black text-center mb-12">
                {t('title')}
            </h1>

            <div className="w-full max-w-6xl flex flex-col space-y-16">
                {/* Section 1: Truck Image and Text */}
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src={truck}
                            alt="Man Truck"
                            width={638}
                            height={638}
                            draggable={false}
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-lg sm:text-xl text-gray-800 leading-relaxed">
                        {/* Now visible on all screen sizes */}
                        <p>
                            {t("point-one")}
                        </p>
                    </div>
                </div>

                {/* Section 2: Hands Image and Text */}
                <div className="flex flex-col md:flex-row-reverse items-center md:justify-between gap-8">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src={hands}
                            alt="Hands on steering wheel"
                            width={638}
                            height={638}
                            draggable={false}
                            className="rounded-lg shadow-lg max-w-full h-auto "
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-lg sm:text-xl text-gray-800 leading-relaxed">
                        {/* Now visible on all screen sizes */}
                        <p>
                            {t("point-two")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}