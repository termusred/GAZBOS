import { useTranslations } from 'next-intl';

export default function Collaboration(){
  const t = useTranslations('Collab');

    return(
        <div className="h-[200vh] w-full flex flex-col justify-center items-center gradientbg">
            <h1 className="Btext text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                {t('title')}
            </h1>
            <div className="h-[60%] w-[90%] flex justify-evenly items-end">
                <div className="cards">
                    {t("card1")}
                </div>
                <div className="cards">
                    {t("card2")}
                </div>
                <div className="cards">
                    {t("card3")}
                </div>
            </div>
        </div>
    )
}