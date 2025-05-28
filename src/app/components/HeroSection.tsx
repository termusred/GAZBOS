import {useTranslations} from 'next-intl';

export default function HeroSection() {
    const t = useTranslations('Hero');

    return (
        <div className="h-[150vh] w-full flex justify-between flex-col hero">
            <div className="w-full h-1/3 flex justify-center">
                <div className="w-1/2 h-full flex flex-col items-start justify-center gap-4">
                    <h1 className="Btext text-left">{t('title')}</h1>
                    <h1 className="Btext text-left">{t('subtitle')}</h1>
                    <div className="buttons">
                        <button className='button-primary'>{t('firstbutton')}</button>
                        <button className='button-secondary'>{t('secondbutton')}</button>
                    </div>
                </div>
            </div>
            <div className='funfact h-1/2 w-full flex items-end-safe'>
                <div className='fact'>
                    
                </div>
            </div>
        </div>
    );
}