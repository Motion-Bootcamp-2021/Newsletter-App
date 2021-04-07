import React, { useContext, useState } from 'react';
import CheckBox from './CheckBox/CheckBox';
import OnboardingContext from '../../../contexts/OnboardingContext';
import './ChooseTopics.scss';

function ChooseTopicsPage({nextPage}){
    const [topicsList, setTopic] = useState([]);
    const [onboardingState, onboardingSetState] = useContext(OnboardingContext)
    const topics = ['Enterpreneurship', 'Leadership', 'News', 'Music', 'Creative'];

    const updateTopicsList = (name) => {
        setTopic(topicsList.includes(name) ? (topicsList.filter(topic => topic !== name)) : [...topicsList, name])
    }

    const addTopicsInOnboardingContext = () => {
        if(topicsList.length === 0){
        setTopic(() => {
            for(const topic of topics){
                topicsList.push(topic)
            }
        })}

        onboardingSetState({
            ...onboardingState,
            topics: topicsList
        })
        nextPage()
    }

    return( 
        <div className="choose-topics-page">
            <h1 className="pageTitle">Onboarding</h1>
            <div className="pageNumber">01</div>
            <div className="title">Choose topics</div>
            <form>
                {
                    topics.map(topic => <CheckBox key={topic} id={topic} name={topic} sendNameToParent={updateTopicsList} /> )
                }
            </form> 
                <div onClick={addTopicsInOnboardingContext}>
                    <div className="next-step-text">Next step </div>
                    <div className="next-step-arrow">{"->"}</div>
                </div>
        </div>
    )
}

export default ChooseTopicsPage;