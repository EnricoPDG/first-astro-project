import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Skills({skills}) {

    const randomMessage = () => {
        const index = Math.floor(Math.random() * skills.length);
        
        return ' ' + skills[index];
    }

    const [skill, setSkills] = useState(randomMessage());

    return (
        <div class="skills">
            <div>
                <h3>Well I have some skills in programming, DevOps <br></br>and DevSecOps Wanna see more tools that I use? click the button bellow</h3>
                <button class="button-27" onClick={() => setSkills(randomMessage())}>
                    Click Me!
                </button>
            </div>
            <div className="skill">
                <h1 class="skill-name">{skill}</h1>
            </div>
        </div>
    );
}