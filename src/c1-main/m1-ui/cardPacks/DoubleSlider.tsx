import React, {useState} from 'react';
import {Slider} from '@material-ui/core';
import s from './DoubleSlider.module.css'

export const DoubleSlider = () => {
    function valuetext(value: number) {
        return `${value}°C`;
    }

    // const classes = useStyles();
    const [value, setValue] = useState<number[]>([20, 37]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className={s.slider}>
            <Slider
                value={value}
                onChange={handleChange}
                // min={}
                // max={}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
