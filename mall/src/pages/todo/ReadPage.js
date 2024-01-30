import React from 'react';
import {createSearchParams, useNavigate, useParams, useSearchParams} from "react-router-dom";

function ReadPage(props) {

    // 선언
    const navigate = useNavigate();
    const tno = useParams();
    const [queryParams] = useSearchParams();

    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1;
    const size = queryParams.get('size')? parseInt(queryParams.get('size')) : 10;

    const queryStr = createSearchParams({page, size}).toString();

    // function
    const moveToModify = () => {
        navigate(
                {
                    pathname: `todo/modify/${tno}`,
                    search: queryStr
                }
            )
    }

    const moveToList = () => {
        navigate(
            {
                pathname: '/todo/list',
                search: queryStr
            }
        )
    }

    return (
        <div className={'text-3xl'}>
            todo Read Page {tno}

            <div>
                <button className={} onClick={() => moveToModify(tno)}>Test Modify</button>
                <button onClick={moveToList}>Test List</button>
            </div>
        </div>
    );
}

export default ReadPage;