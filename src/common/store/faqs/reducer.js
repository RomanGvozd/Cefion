import { ACTION_ADD_FAQS, ACTION_DELETE_FAQS, ACTION_SHOW_FAQS } from "./actions";

const INITIAL_STATE = [
    {
        id: 1,
        titleRU: "Какой фундамент потребуется под купол?",
        titleEN: "What kind of foundation is required for the dome?",
        descriptionRU: "Мы разработали универсальный вид утеплителя, который защищает купол как от холода, так и от жаркой погоды. Предлагаем индивидуальный вариант утепления для каждого региона.Также нами разработана система вентиляции оболочки купола и в нем никогда не задержится сырость.",
        descriptionEN: "We have developed a universal type of insulation that protects the dome from both cold and hot weather. We offer an individual version of insulation for each region. We also developed a ventilation system for the dome shell and dampness will never linger in it.",
        isShow: false,
    },
    {
        id: 2,
        titleRU: "Будет ли купол комфортный Летом и Зимой?",
        titleEN: "Will the dome be comfortable in Summer and Winter?",
        descriptionRU: "Мы разработали универсальный вид утеплителя, который защищает купол как от холода, так и от жаркой погоды. Предлагаем индивидуальный вариант утепления для каждого региона.Также нами разработана система вентиляции оболочки купола и в нем никогда не задержится сырость.",
        descriptionEN: "We have developed a universal type of insulation that protects the dome from both cold and hot weather. We offer an individual version of insulation for each region. We also developed a ventilation system for the dome shell and dampness will never linger in it.",
        isShow: false,
    },
    {
        id: 3,
        titleRU: "Как вентилируется купол?",
        titleEN: "How is the dome ventilated?",
        descriptionRU: "Мы разработали универсальный вид утеплителя, который защищает купол как от холода, так и от жаркой погоды. Предлагаем индивидуальный вариант утепления для каждого региона.Также нами разработана система вентиляции оболочки купола и в нем никогда не задержится сырость.",
        descriptionEN: "We have developed a universal type of insulation that protects the dome from both cold and hot weather. We offer an individual version of insulation for each region. We also developed a ventilation system for the dome shell and dampness will never linger in it.",
        isShow: false,
    },
]

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case ACTION_ADD_FAQS:
            return [ ...state, {
                id: Date.now(), 
                titleRU: payload.titleRU, 
                titleEN: payload.titleEN, 
                descriptionRU: payload.descriptionRU,
                descriptionEN: payload.descriptionEN,
            } ]; 
        case ACTION_DELETE_FAQS:
            return state.filter(el => el.id !== payload ? true : false); 
        case ACTION_SHOW_FAQS:
            return state.map( question=> {
                if (question.id === payload) {
                    question.isShow = !question.isShow
                }
                return question
            })
        default:
            return state;
    }

}