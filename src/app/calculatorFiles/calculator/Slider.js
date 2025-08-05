import { Slider } from 'antd';
import { useState } from 'react';
import React from 'react';

const CustomSlider = (props) => {
    const [sliderValue, setSliderValue] = useState(50); // Set your initial slider value here

    const handleChange = (value) => {
        setSliderValue(value);
    };

    return (
        <div>
            <>
                <Slider
                    {...props}
                    onChange={handleChange}
                    value={sliderValue}
                    styles={{
                        track: {
                            background: 'red',
                        },
                        tracks: {
                            background: `linear-gradient(86deg, #31C1B1 5.26%, #377FDB 79.53%)`,
                        },
                    }}
                />
            </>
        </div>
    );
};

export default CustomSlider;
