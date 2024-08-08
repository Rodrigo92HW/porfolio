import { action, makeAutoObservable } from 'mobx';
import personalInfo from '../assets/json/personalInfo.json';
import projects from '../assets/json/projects.json';
import skills from '../assets/json/skills.json';
import extra from '../assets/json/extra.json';

type List = { title: string; content: string[] };

type LanguageData = {
    skills: { name: string; text: string; img: string; level: number; levelMeaning: string }[];
    projects: {
        name: string;
        web: string;
        webText: string;
        text1: string[]; text2: string[]; text3: string[];
        link: string;
        img: string[];
        bannerImage: string[];
        bannerText: string[];
        longText: string[];
    }[];
    personalInfo: {
        city: string[];
        age: (string | number)[];
        titles: string[];
        studies: List[];
        experience: List[];
        img: string;
    }[];
    extra: { name: string; presentation: string; myself: string; skill: string; project: string; contact: string[]; header: Array<string> }[];
};

export default class Language {

    private static instance: Language | null = null;

    static getInstance(): Language {
        if (!Language.instance) {
            Language.instance = new Language();
        }
        return Language.instance;
    }

    index: number = 0;
    userLanguage: string = navigator.language.toLowerCase();
    languages: Record<string, LanguageData> = {
        'es': { skills: skills[0], projects: projects[0], personalInfo: personalInfo[0], extra: extra[0] },
        'en': { skills: skills[1], projects: projects[1], personalInfo: personalInfo[1], extra: extra[1] }
    };
    currentLanguage: string = 'es';

    constructor() {
        makeAutoObservable(this);
        this.initializeLanguage();
    }

    get mappedSkills() {
        return this.languages[this.currentLanguage].skills;
    }

    get mappedProjects() {
        return this.languages[this.currentLanguage].projects;
    }

    get mappedPersonalInfo() {
        return this.languages[this.currentLanguage].personalInfo[0];
    }

    get mappedExtra() {
        return this.languages[this.currentLanguage].extra[0];
    }

    toggleLanguage = action((e: string) => {
        this.currentLanguage = e;
    });

    initializeLanguage() {
        this.currentLanguage = this.userLanguage === 'es' || this.userLanguage === 'es-es' ? 'es' : 'en';
    }
}