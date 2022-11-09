import React, {useState} from 'react';
import {MoneyType, FilterType} from './Filter';


type FilterPropsType = {
    onClickFilterHandler: (nameButton: FilterType) => void
    currentMoney: Array<MoneyType>
}


export function FilterProps({currentMoney, onClickFilterHandler}: FilterPropsType) {

    return (
        <div>
            <ul>
                {currentMoney.map((objectFromMoney, index) => {
                        return (
                            <li key={index}>
                                <span>{objectFromMoney.banknots}</span>
                                <span>{objectFromMoney.value}</span>
                                <span>{objectFromMoney.number}</span>
                            </li>
                        )
                    }
                )
                }
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>rubls</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>dollar</button>
            </div>
        </div>
    );
}

