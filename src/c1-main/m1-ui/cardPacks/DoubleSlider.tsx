import React, {useState} from 'react';
import {Slider, Typography} from '@material-ui/core';

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
        <div className={'s.root'}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
