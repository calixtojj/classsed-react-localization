import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import Price from './price.json'
import './style.sass'

const languages = [
  {
    code: 'es',
    name: 'Español',
    country_code: 'es',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'de',
    name: 'Deutsch',
    country_code: 'de',
  },
]

const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
)

export default function App() {
  const currentLanguageCode = cookies.get('i18next') || 'es'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('app_title')
  }, [currentLanguage, t])

  return (
    <div className="container">
      <div className="language-select">
        <div className="d-flex justify-content-end align-items-center language-select-root">
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <GlobeIcon />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <span className="dropdown-item-text">{t('language')}</span>
              </li>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <a
                             // eslint-disable-next-line
                    href="#"
                    className={classNames('dropdown-item', {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className='row'>
          <div className='col-12'>
            <div className='text-center'>
              <h1>{t('appetizers')}</h1>
            </div>
            <div className='row'>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('bread_with_tomato')}</h4>
                  <span></span>
                  <span>€ {Price.bread_with_tomato}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('anchovies_and_olives')}</h4>
                  <span></span>
                  <span>€ {Price.anchovies_and_olives}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('chicken_fingers')}</h4>
                  <span></span>
                  <span>€ {Price.chicken_fingers}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('charcuterie_platter')}</h4>
                  <span></span>
                  <span>€ {Price.charcuterie_platter}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('cheese_platter')}</h4>
                  <span></span>
                  <span>€ {Price.cheese_platter}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('mix_platter')}</h4>
                  <span></span>
                  <span>€ {Price.mix_platter}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('burrata_with_arugula_and_tomato')}</h4>
                  <span></span>
                  <span>€ {Price.burrata_with_arugula_and_tomato}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('burratina_with_arugula_and_tomato')}</h4>
                  <span></span>
                  <span>€ {Price.burratina_with_arugula_and_tomato}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('mozzarella_with_arugula_and_tomato')}</h4>
                  <span></span>
                  <span>€ {Price.mozzarella_with_arugula_and_tomato}</span>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <h1>{t('hummus')}</h1>
            </div>
            <div className='row'>
             <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('clasic')}</h4>
                  <span></span>
                  <span>€ {Price.clasic}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('avocado_and_feta_cheese')}</h4>
                  <span></span>
                  <span>€ {Price.avocado_and_feta_cheese}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('eggplants')}</h4>
                  <span></span>
                  <span>€ {Price.eggplants}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('black_olives_and_anchovies_tapenade')}</h4>
                  <span></span>
                  <span>€ {Price.black_olives_and_anchovies_tapenade}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('assorted_hummus')}</h4>
                  <span></span>
                  <span>€ {Price.assorted_hummus}</span>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <h1>{t('croquetas_and_empanadillas')}</h1>
            </div>
            <div className='row'>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('chicken_croquettes')}</h4>
                  <span></span>
                  <span>€ {Price.chicken_croquettes}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('coxinhas')}</h4>
                  <span></span>
                  <span>€ {Price.coxinhas}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('kibe')}</h4>
                  <span></span>
                  <span>€ {Price.kibe}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('empanadilla_chicken_and_vegetables')}</h4>
                  <span></span>
                  <span>€ {Price.empanadilla_chicken_and_vegetables}</span>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <h1>{t('suggestions')}</h1>
            </div>
            <div className='row'>
            <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('picanha')}</h4>
                  <span></span>
                  <span>€ {Price.picanha}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('wok')}</h4>
                  <span></span>
                  <span>€ {Price.wok}</span>
                </div>
              </div>
            <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('vegetables_and_chicken_little_pies')}</h4>
                  <span></span>
                  <span>€ {Price.vegetables_and_chicken_little_pies}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('potato_and_meat_little_pies')}</h4>
                  <span></span>
                  <span>€ {Price.potato_and_meat_little_pies}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('rosemary_and_olive_oil_focaccia_with_mozzarella_and_tomato')}</h4>
                  <span></span>
                  <span>€ {Price.rosemary_and_olive_oil_focaccia_with_mozzarella_and_tomato}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('rosemary_and_olive_oil_focaccia_with_mozzarella_tomato_and_charcuterie')}</h4>
                  <span></span>
                  <span>€ {Price.rosemary_and_olive_oil_focaccia_with_mozzarella_tomato_and_charcuterie}</span>
                </div>
              </div>
            </div>



            <div className='text-center'>
              <h1>{t('soda_spirit_combo')}</h1>
            </div>
            <div className='row'>
            <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('gin_seagrans')}</h4>
                  <span></span>
                  <span>€ {Price.gin_seagrans}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('gin_beefeater')}</h4>
                  <span></span>
                  <span>€ {Price.gin_beefeater}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('ballantines')}</h4>
                  <span></span>
                  <span>€ {Price.ballantines}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('johnnie_walker_red')}</h4>
                  <span></span>
                  <span>€ {Price.johnnie_walker_red}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('ron_barcelo')}</h4>
                  <span></span>
                  <span>€ {Price.ron_barcelo}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('vodka_smirnoff')}</h4>
                  <span></span>
                  <span>€ {Price.vodka_smirnoff}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('hierbas')}</h4>
                  <span></span>
                  <span>€ {Price.hierbas}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('martini_rojo')}</h4>
                  <span></span>
                  <span>€ {Price.martini_rojo}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('martini_blanco')}</h4>
                  <span></span>
                  <span>€ {Price.martini_blanco}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('baileys')}</h4>
                  <span></span>
                  <span>€ {Price.baileys}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('tequila')}</h4>
                  <span></span>
                  <span>€ {Price.tequila}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('sangria')}</h4>
                  <span></span>
                  <span>€ {Price.sangria}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('mojito')}</h4>
                  <span></span>
                  <span>€ {Price.mojito}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('caipirinha')}</h4>
                  <span></span>
                  <span>€ {Price.caipirinha}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('aperol_spritz')}</h4>
                  <span></span>
                  <span>€ {Price.aperol_spritz}</span>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <h1>{t('white_wine')}</h1>
            </div>
            <div className='row'>
            <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('oro_de_castilla')}</h4>
                  <span></span>
                  <span>€ {Price.oro_de_castilla}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('w3015')}</h4>
                  <span></span>
                  <span>€ {Price.w3015}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('cava_brut')}</h4>
                  <span></span>
                  <span>€ {Price.cava_brut}</span>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <h1>{t('red_wine')}</h1>
            </div>
            <div className='row'>
            <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('marques_ulia_crianza')}</h4>
                  <span></span>
                  <span>€ {Price.marques_ulia_crianza}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('el_maquinista')}</h4>
                  <span></span>
                  <span>€ {Price.el_maquinista}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('real_rubio_crianza')}</h4>
                  <span></span>
                  <span>€ {Price.real_rubio_crianza}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('el_goru')}</h4>
                  <span></span>
                  <span>€ {Price.el_goru}</span>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <h1>{t('rose_wine')}</h1>
            </div>
            <div className='row'>
            <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('real_rubio')}</h4>
                  <span></span>
                  <span>€ {Price.real_rubio}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('chateau_pigoudet')}</h4>
                  <span></span>
                  <span>€ {Price.chateau_pigoudet}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('cava_rosado')}</h4>
                  <span></span>
                  <span>€ {Price.cava_rosado}</span>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <h1>{t('house_wine')}</h1>
            </div>
            <div className='row'>
            <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('white')}</h4>
                  <span></span>
                  <span>€ {Price.white}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('red')}</h4>
                  <span></span>
                  <span>€ {Price.red}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('rose')}</h4>
                  <span></span>
                  <span>€ {Price.rose}</span>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <h1>{t('beer')}</h1>
            </div>
            <div className='row'>
            <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('alhambra_33cl')}</h4>
                  <span></span>
                  <span>€ {Price.alhambra_33cl}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('alhambra_22cl')}</h4>
                  <span></span>
                  <span>€ {Price.alhambra_22cl}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('alhambra_reserva_1925')}</h4>
                  <span></span>
                  <span>€ {Price.alhambra_reserva_1925}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('alhambra_0')}</h4>
                  <span></span>
                  <span>€ {Price.alhambra_0}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('alhambra_ipa')}</h4>
                  <span></span>
                  <span>€ {Price.alhambra_ipa}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('warsteiner')}</h4>
                  <span></span>
                  <span>€ {Price.warsteiner}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('budweiser')}</h4>
                  <span></span>
                  <span>€ {Price.budweiser}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('estrella_galicia')}</h4>
                  <span></span>
                  <span>€ {Price.estrella_galicia}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('estrella_1906_red_vintage')}</h4>
                  <span></span>
                  <span>€ {Price.estrella_1906_red_vintage}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('corona')}</h4>
                  <span></span>
                  <span>€ {Price.corona}</span>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <h1>{t('to_drink')}</h1>
            </div>
            <div className='row'>
            <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('sparkling_water_magma')}</h4>
                  <span></span>
                  <span>€ {Price.sparkling_water_magma}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('mineral_water_magma')}</h4>
                  <span></span>
                  <span>€ {Price.mineral_water_magma}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('nordic_tonic_water')}</h4>
                  <span></span>
                  <span>€ {Price.nordic_tonic_water}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('nestea')}</h4>
                  <span></span>
                  <span>€ {Price.nestea}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('aquarius')}</h4>
                  <span></span>
                  <span>€ {Price.aquarius}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('coke')}</h4>
                  <span></span>
                  <span>€ {Price.coke}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('coke_zero')}</h4>
                  <span></span>
                  <span>€ {Price.coke_zero}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('fanta')}</h4>
                  <span></span>
                  <span>€ {Price.fanta}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('sprite')}</h4>
                  <span></span>
                  <span>€ {Price.sprite}</span>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <h1>{t('desserts')}</h1>
            </div>
            <div className='row'>
            <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('lemon_ice_cream')}</h4>
                  <span></span>
                  <span>€ {Price.lemon_ice_cream}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('straciatella_ice_cream')}</h4>
                  <span></span>
                  <span>€ {Price.straciatella_ice_cream}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('tiramisu_cup')}</h4>
                  <span></span>
                  <span>€ {Price.tiramisu_cup}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('chocolat_coulant')}</h4>
                  <span></span>
                  <span>€ {Price.chocolat_coulant}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('cheese_and_blueberry_clouds')}</h4>
                  <span></span>
                  <span>€ {Price.cheese_and_blueberry_clouds}</span>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <h1>{t('coffees')}</h1>
            </div>
            <div className='row'>
            <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('expresso_coffee')}</h4>
                  <span></span>
                  <span>€ {Price.expresso_coffee}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('cortado')}</h4>
                  <span></span>
                  <span>€ {Price.cortado}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('coffee_with_milk')}</h4>
                  <span></span>
                  <span>€ {Price.coffee_with_milk}</span>
                </div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <div className='item'>
                  <h4>{t('american_coffee')}</h4>
                  <span></span>
                  <span>€ {Price.american_coffee}</span>
                </div>
              </div>
            </div>

            


          </div>
        </div>
      </div>
    </div>
  )
}
