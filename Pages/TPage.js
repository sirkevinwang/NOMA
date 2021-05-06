import React from 'react';
import { render } from 'react-dom';
import { View, Text } from 'react-native';

import OptionButton from '../components/Options/OptionButton';
import TDepth from '../data/TDepth';

const TPage = (props) => {
    const DATA = TDepth;

    const renderIsDepthActive = (TStage, optionStage) => {
        if (TStage.depth === null) {
            return false
        } else if (TStage.depth === optionStage) {
            return true
        } else {
            return false
        }
    }

    const depthOptionClicked = (id) => {
        props.setTStage(
            {
                "depth": DATA[id - 1].option_stage,
                "ulceration": null,
                "more_than_08mm": null
            }
        )
    }

    const normalUlcerationOptionClicked = (hasUlceration) => {
        if (hasUlceration) {
            props.setTStage({
                "depth": props.TStage.depth,
                "ulceration": true,
                "more_than_08mm": null
                }
            )
        } else {
            props.setTStage({
                "depth": props.TStage.depth,
                "ulceration": false,
                "more_than_08mm": null
            }
            )
        }
    }

    const renderNormalUlceratinActive = (buttonIsUlceration) => {
        if (props.TStage.ulceration == null) return null
        return buttonIsUlceration ? props.TStage.ulceration : !props.TStage.ulceration
    }

    const ulcerationBreslowDepthClicked = (buttonIsMoreThanPointEight) => {
        if (props.TStage.ulceration === false) {
            // only interactive when there is no ulceration
            if (buttonIsMoreThanPointEight) {
                props.setTStage({
                    "depth": props.TStage.depth,
                    "ulceration": false,
                    "more_than_08mm": true
                }
                )
            } else {
                props.setTStage({
                    "depth": props.TStage.depth,
                    "ulceration": false,
                    "more_than_08mm": false
                }
                )
            }
        }
    }

    const renderUlcerationBreslowDepthActive = (buttonIsMoreThanPointEight) => {
        if (props.TStage.more_than_08mm == null) return null
        return buttonIsMoreThanPointEight ? props.TStage.more_than_08mm : !props.TStage.more_than_08mm
    }

    const renderUlcerationBreslowDepthOpacity = () => {
        if (props.TStage.ulceration === null) {
            return 0.2
        } else {
            if (props.TStage.ulceration) {
                return 0.2
            } else {
                return 1
            }
        }
    }
    const options = DATA.map((option) => {
        const baseOptionBtn = <OptionButton
            key={option.id}
            primaryTitle={option.stage + option.option_stage}
            description={option.description}
            isActive={renderIsDepthActive(props.TStage, option.option_stage)}
            onClick={() => depthOptionClicked(option.id)}
        />

        if (option.id > 3){
            // this checks for T1-4
            if (option.id == 4) {
                // here we render the complex case
                if (renderIsDepthActive(props.TStage, option.option_stage)) {
                    // T1 is selected
                    return [
                        <OptionButton
                            key={option.id}
                            primaryTitle={option.stage + option.option_stage}
                            description={option.description}
                            isActive={renderIsDepthActive(props.TStage, option.option_stage)}
                            onClick={() => depthOptionClicked(option.id)}
                        />,
                        <View style={{ flexDirection: 'row', flexBasis: 0, flexGrow: 1, justifyContent: 'space-between' }}>
                            <OptionButton primaryTitle="a"
                                description="without ulceration"
                                isActive={renderNormalUlceratinActive(false)}
                                onClick={() => { normalUlcerationOptionClicked(false) }}
                            />
                            <OptionButton primaryTitle="b"
                                description="with ulceration"
                                isActive={renderNormalUlceratinActive(true)}
                                onClick={() => { normalUlcerationOptionClicked(true) }}
                            />
                        </View>,
                        <View style={{ flexDirection: 'row', flexBasis: 0, flexGrow: 1, justifyContent: 'space-between', opacity: renderUlcerationBreslowDepthOpacity()}}>
                            <OptionButton 
                                primaryTitle="a"
                                description="<0.8mm"
                                isActive={renderUlcerationBreslowDepthActive(false)}
                                onClick={() => { ulcerationBreslowDepthClicked(false) }}
                            />
                            <OptionButton 
                                primaryTitle="b"
                                description="0.8-1.0mm"
                                isActive={renderUlcerationBreslowDepthActive(true)}
                                onClick={() => { ulcerationBreslowDepthClicked(true) }}
                            />
                        </View>
                    ]
                } else {
                    // do the normal stuff
                    return baseOptionBtn
                }
            } else {
                // only render yes or no
                if (renderIsDepthActive(props.TStage, option.option_stage)) {
                    // then the T stage is clicked
                    return [
                        <OptionButton
                            key={option.id}
                            primaryTitle={option.stage + option.option_stage}
                            description={option.description}
                            isActive={renderIsDepthActive(props.TStage, option.option_stage)}
                            onClick={() => depthOptionClicked(option.id)}
                        />,
                        <View style={{ flexDirection: 'row', flexBasis: 0, flexGrow: 1, justifyContent: 'space-between' }}>
                            <OptionButton primaryTitle="a"
                                description="without ulceration"
                                isActive={renderNormalUlceratinActive(false)}
                                onClick={() => { normalUlcerationOptionClicked(false) }}
                            />
                            <OptionButton primaryTitle="b"
                                description="with ulceration"
                                isActive={renderNormalUlceratinActive(true)}
                                onClick={() => { normalUlcerationOptionClicked(true) }}
                            />
                        </View>
                    ]
                } else {
                    // render nothing but the base option
                    return baseOptionBtn
                }
            }            
        } else {
            return baseOptionBtn
        }

        }
    );

    return (
        <>
        <View>
            {options}
        </View>
        </>
    )
}

export default TPage
