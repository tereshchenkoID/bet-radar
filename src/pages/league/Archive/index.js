import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {NavLink, useParams} from "react-router-dom";

import {fetchData} from "helpers/api";
import {setUrl} from "store/actions/urlAction";
import {useLocalStorage} from "helpers/localStorage";

import Search from "components/Search";
import Loader from "components/Loader";
import Container from "components/Container";

import style from './index.module.scss';

const Archive = () => {
    let url = useParams()
    const dispatch = useDispatch()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const {getLocalStorage} = useLocalStorage()

    useEffect(() => {
        fetchData(`https://stats.fn.sportradar.com/betradar/${getLocalStorage('i18nextLng')}/Europe:Helsinki/gismo/uniquetournament_seasons/s-${url.league}`).then((data) => {
            setData(data)
            setLoading(false)
            dispatch(setUrl(url))
        })

    }, []);

    const searchItems = (data) => {
        return data.filter(item => item.name.toLowerCase().indexOf(search) !== -1)
    }

    return (
        <Container>
            <div className={style.block}>
                {
                    loading
                        ?
                            <Loader />
                        :
                            <>
                                <Search setSearch={setSearch} />
                                    <ul className={style.list}>
                                    {
                                        searchItems(data.doc[0].data.seasons).map((el, idx) =>
                                            <li key={idx}>
                                                <NavLink
                                                    className={style.item}
                                                    to={`/${url.id}/${url.category}/${el._id}/overview`}
                                                    aria-label={data.name}
                                                >
                                                    {el.name}
                                                </NavLink>
                                            </li>
                                        )
                                    }
                                </ul>
                            </>
                }
            </div>
        </Container>
    );
}

export default Archive;
