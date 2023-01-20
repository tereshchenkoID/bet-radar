import {NavLink} from "react-router-dom";

import style from './index.module.scss';

const Category = ({id, data}) => {

    return (
        <NavLink
            to={`/${id}/${data._id}`}
            className={style.block}
            aria-label={data.na}
        >
            {
                data.cc
                    ?
                        <span className={style.country}>
                            <img src={`https://img.sportradar.com/ls/crest/big/${data.cc.a2}.png`} alt={data.na} />
                        </span>
                    :
                        <span className={style.icon}>
                            <svg viewBox="0 0 82 82" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="nonzero" d="M41 0C18.39 0 0 18.392 0 41s18.392 41 41 41c22.607 0 41-18.392 41-41S63.607 0 41 0zm0 78.627C20.25 78.627 3.372 61.747 3.372 41S20.253 3.372 41 3.372c10.197 0 19.46 4.084 26.243 10.698.443.43.865.88 1.286 1.333h-5.316L60.54 13.81l-5.347.34-4.064 1.815.033 2.108-1.25.374-.28-2.108-.468-.733-1.41-.345-.326 1.264.42 1.03-4.996-.33-2.384 1.107-.36-1.044-.595.154-.435 1.155-1.25.975-3.045-.086-.138-.672 3.183-.14.656-.56-3.838-1.782-4.684.14-2.624 1.344-.984 1.757-1.732.68-.73.792.17.923.89.125.542 1.346 1.54-.62.256 1.8h-.467l-1.266-.187-1.404.235-1.358 1.92-1.944.304-.28 1.663.82.194-.235 1.068-1.932-.386-1.77.386-.375.985.307 2.067 1.04.486 1.74-.01 1.178-.106.36-.936 1.84-2.39 1.206.248 1.194-1.078.223.843 2.933 1.98-.357.482-1.322-.07.51.72.812.18.954-.398-.018-1.147.423-.213-.34-.36-1.955-1.092-.516-1.45h1.627l.52.516 1.402 1.206.06 1.46 1.45 1.547.54-2.117 1.008-.548.187 1.73.983 1.08 2.965-.05.875.658v1.546l-1.076.982h-2.997l-1.826-1.36-1.92.188v1.172h-.614l-.654-.467-3.327-.843v-2.155l-4.216.33-1.31.702h-1.673l-.82-.084-2.035 1.13v2.122l-4.152 2.996.346 1.28h.843l-.22 1.218-.594.217-.03 3.185 3.587 4.088h1.563l.093-.248h2.808l.81-.75h1.594l.873.878 2.37.246-.31 3.154 2.637 4.65-1.39 2.654.094 1.25 1.095 1.09v3.004l1.434 1.93v2.497h4.248l3.184-3.276 1-1.78 1.277-.284v-1.498l.843-1 1.78-2.433-.374-3.713-.782-1.376 3.508-3.345 3.86-5.52-.75-.343-4.01.843-1.03-.516-4.216-7.94.297-.344 4.176 5.072.103 1.57.966.97 1.966-.127 4.108-2.972 1.285-.843-.024-1.03-1.368-.18s-4.81-2.265-4.81-2.365c0-.1.03-1.944.03-1.944h1.063l.157 1.344 2.23 1.28 2.546.124 5.526.904 1.294.813v1.266l-.167 1.722 2.834 4.657.914.21.912-1.323.503-3.767.946-2.03 1.52-.567 2.688.256 3.37 2.995v4.308l4.448 4.258.234-.747-3.605-5.153.374-1.5 1.905 2.16 1.064.113 1.395-.933-.232-1.405-2.31-1.86-.092-1.686.66-.89 1.17.376-.095.795.668 1.03.595-.422-.324-1.218 1.272-.455v.064c0 20.75-16.88 37.63-37.627 37.63zM43.93 30.01l-.06-1.45.31-.718 1.264-.108 1.078.45.047.75-1.53-.085-.078.695 1.92 1.28v.936l.83.61v.656l-.423.405-.984-.08-.187-.294-1.55-.11.11-.498.815-.704v-.593l-1.563-1.14zm-3.867 1.827H38.38l-2.428-.1-.73.1v-1.66l.546-.61.59-.182 1.29-.15.28-.44.528.263.074 1.51 1.41.58.125.69zm-8.218-10.643l.07 1.01-1.486 2.21-2.576-.022-.162-.538 1.614-.818.012-3.058 2.74-1.908h.597v.748l-1.86 1.137v.75l1.052.49zm-12.174 3.54L18.13 25.83h-.873v-.782l.748-1.203 1.012-.234.722.315-.067.81zm1.05-.497l-.846-.532-.593-.406v-.596l.344-.53 1.234-.25.312 1.5.656 1.062.435.5.796.31-.748.892-1.45.14h-1.094l.124-1.297.906-.186-.076-.607zm24.442 36.886l1.124-2.25h1.156l-.91 4.37-1.9 2.785-.967 1.555-1.065-1.032V64.9l.782-.905.53-.81-.688-.814v-1.5l1.935.253z" />
                            </svg>
                        </span>
            }
            <span>{data.name}</span>
        </NavLink>
    );
}

export default Category;
