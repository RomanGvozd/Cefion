import { ACTION_ADD_NEWS_PUBLISH, ACTION_DELETE_NEWS_PUBLISH, ACTION_EDIT_NEWS_PUBLISH } from "./actions";

const INITIAL_STATE = [
    {
        id: 111,
        titleRU: "Новый внедорожник Alfa Romeo использует NFT и блокчейн для отслеживания автомобильных рекордов",
        titleEN: "New Alfa Romeo SUV uses NFT and blockchain to track car records",
        descriptionRU: "Аналитика данных используется для преобразования необработанных данных в полезную информацию. Он предоставляет статистику и пояснения, чтобы помочь предприятиям принимать более эффективные решения на основе данных. Согласно различным курсам по анализу данных: современные бизнес-операции вращаются вокруг науки о данных. Наука о данных использует несколько различных инструментов и технологий для достижения лучших результатов, и именно поэтому трудно выбрать только один конкретный инструмент анализа данных для улучшения бизнеса. Каждый инструмент играет свою роль, и не все они подходят для выполнения одной и той же работы. Поэтому давайте узнаем, что такое инструменты анализа данных, и рассмотрим некоторые инструменты, доступные на рынке.",
        descriptionEN: "Data analytics is used for transforming raw data into useful insights. It provides statistics and explanations to help businesses produce improved data-driven decisions. According to a variety of data analytics courses: modern business operations revolve around data science. Data Science uses several different tools and technologies to provide better results, and that’s what makes it difficult to choose just one particular data analytics tool for improving a business. Every tool has a different role to play, and not all of them are suitable for doing the same job. Therefore, let us learn what data analytics tools are, and explore some tools that are available in the market.",
        author: "Arnold Kirimi",
    },
    {
        id: 222,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Аналитика данных используется для преобразования необработанных данных в полезную информацию. Он предоставляет статистику и пояснения, чтобы помочь предприятиям принимать более эффективные решения на основе данных. Согласно различным курсам по анализу данных: современные бизнес-операции вращаются вокруг науки о данных. Наука о данных использует несколько различных инструментов и технологий для достижения лучших результатов, и именно поэтому трудно выбрать только один конкретный инструмент анализа данных для улучшения бизнеса. Каждый инструмент играет свою роль, и не все они подходят для выполнения одной и той же работы. Поэтому давайте узнаем, что такое инструменты анализа данных, и рассмотрим некоторые инструменты, доступные на рынке.",
        descriptionEN: "Data analytics is used for transforming raw data into useful insights. It provides statistics and explanations to help businesses produce improved data-driven decisions. According to a variety of data analytics courses: modern business operations revolve around data science. Data Science uses several different tools and technologies to provide better results, and that’s what makes it difficult to choose just one particular data analytics tool for improving a business. Every tool has a different role to play, and not all of them are suitable for doing the same job. Therefore, let us learn what data analytics tools are, and explore some tools that are available in the market.",
        author: "Yashu Gola",
    },
    {
        id: 333,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Аналитика данных используется для преобразования необработанных данных в полезную информацию. Он предоставляет статистику и пояснения, чтобы помочь предприятиям принимать более эффективные решения на основе данных. Согласно различным курсам по анализу данных: современные бизнес-операции вращаются вокруг науки о данных. Наука о данных использует несколько различных инструментов и технологий для достижения лучших результатов, и именно поэтому трудно выбрать только один конкретный инструмент анализа данных для улучшения бизнеса. Каждый инструмент играет свою роль, и не все они подходят для выполнения одной и той же работы. Поэтому давайте узнаем, что такое инструменты анализа данных, и рассмотрим некоторые инструменты, доступные на рынке.",
        descriptionEN: "Data analytics is used for transforming raw data into useful insights. It provides statistics and explanations to help businesses produce improved data-driven decisions. According to a variety of data analytics courses: modern business operations revolve around data science. Data Science uses several different tools and technologies to provide better results, and that’s what makes it difficult to choose just one particular data analytics tool for improving a business. Every tool has a different role to play, and not all of them are suitable for doing the same job. Therefore, let us learn what data analytics tools are, and explore some tools that are available in the market.",
        author: "Yashu Gola",
    },
    {
        id: 444,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Аналитика данных используется для преобразования необработанных данных в полезную информацию. Он предоставляет статистику и пояснения, чтобы помочь предприятиям принимать более эффективные решения на основе данных. Согласно различным курсам по анализу данных: современные бизнес-операции вращаются вокруг науки о данных. Наука о данных использует несколько различных инструментов и технологий для достижения лучших результатов, и именно поэтому трудно выбрать только один конкретный инструмент анализа данных для улучшения бизнеса. Каждый инструмент играет свою роль, и не все они подходят для выполнения одной и той же работы. Поэтому давайте узнаем, что такое инструменты анализа данных, и рассмотрим некоторые инструменты, доступные на рынке.",
        descriptionEN: "Data analytics is used for transforming raw data into useful insights. It provides statistics and explanations to help businesses produce improved data-driven decisions. According to a variety of data analytics courses: modern business operations revolve around data science. Data Science uses several different tools and technologies to provide better results, and that’s what makes it difficult to choose just one particular data analytics tool for improving a business. Every tool has a different role to play, and not all of them are suitable for doing the same job. Therefore, let us learn what data analytics tools are, and explore some tools that are available in the market.",
        author: "Yashu Gola",
    },
    {
        id: 555,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Аналитика данных используется для преобразования необработанных данных в полезную информацию. Он предоставляет статистику и пояснения, чтобы помочь предприятиям принимать более эффективные решения на основе данных. Согласно различным курсам по анализу данных: современные бизнес-операции вращаются вокруг науки о данных. Наука о данных использует несколько различных инструментов и технологий для достижения лучших результатов, и именно поэтому трудно выбрать только один конкретный инструмент анализа данных для улучшения бизнеса. Каждый инструмент играет свою роль, и не все они подходят для выполнения одной и той же работы. Поэтому давайте узнаем, что такое инструменты анализа данных, и рассмотрим некоторые инструменты, доступные на рынке.",
        descriptionEN: "Data analytics is used for transforming raw data into useful insights. It provides statistics and explanations to help businesses produce improved data-driven decisions. According to a variety of data analytics courses: modern business operations revolve around data science. Data Science uses several different tools and technologies to provide better results, and that’s what makes it difficult to choose just one particular data analytics tool for improving a business. Every tool has a different role to play, and not all of them are suitable for doing the same job. Therefore, let us learn what data analytics tools are, and explore some tools that are available in the market.",
        author: "Yashu Gola",
    },
    {
        id: 666,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Аналитика данных используется для преобразования необработанных данных в полезную информацию. Он предоставляет статистику и пояснения, чтобы помочь предприятиям принимать более эффективные решения на основе данных. Согласно различным курсам по анализу данных: современные бизнес-операции вращаются вокруг науки о данных. Наука о данных использует несколько различных инструментов и технологий для достижения лучших результатов, и именно поэтому трудно выбрать только один конкретный инструмент анализа данных для улучшения бизнеса. Каждый инструмент играет свою роль, и не все они подходят для выполнения одной и той же работы. Поэтому давайте узнаем, что такое инструменты анализа данных, и рассмотрим некоторые инструменты, доступные на рынке.",
        descriptionEN: "Data analytics is used for transforming raw data into useful insights. It provides statistics and explanations to help businesses produce improved data-driven decisions. According to a variety of data analytics courses: modern business operations revolve around data science. Data Science uses several different tools and technologies to provide better results, and that’s what makes it difficult to choose just one particular data analytics tool for improving a business. Every tool has a different role to play, and not all of them are suitable for doing the same job. Therefore, let us learn what data analytics tools are, and explore some tools that are available in the market.",
        author: "Yashu Gola",
    },
    {
        id: 777,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Аналитика данных используется для преобразования необработанных данных в полезную информацию. Он предоставляет статистику и пояснения, чтобы помочь предприятиям принимать более эффективные решения на основе данных. Согласно различным курсам по анализу данных: современные бизнес-операции вращаются вокруг науки о данных. Наука о данных использует несколько различных инструментов и технологий для достижения лучших результатов, и именно поэтому трудно выбрать только один конкретный инструмент анализа данных для улучшения бизнеса. Каждый инструмент играет свою роль, и не все они подходят для выполнения одной и той же работы. Поэтому давайте узнаем, что такое инструменты анализа данных, и рассмотрим некоторые инструменты, доступные на рынке.",
        descriptionEN: "Data analytics is used for transforming raw data into useful insights. It provides statistics and explanations to help businesses produce improved data-driven decisions. According to a variety of data analytics courses: modern business operations revolve around data science. Data Science uses several different tools and technologies to provide better results, and that’s what makes it difficult to choose just one particular data analytics tool for improving a business. Every tool has a different role to play, and not all of them are suitable for doing the same job. Therefore, let us learn what data analytics tools are, and explore some tools that are available in the market.",
        author: "Yashu Gola",
    },
    {
        id: 888,
        titleRU: "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC",
        titleEN: "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair",
        descriptionRU: "Аналитика данных используется для преобразования необработанных данных в полезную информацию. Он предоставляет статистику и пояснения, чтобы помочь предприятиям принимать более эффективные решения на основе данных. Согласно различным курсам по анализу данных: современные бизнес-операции вращаются вокруг науки о данных. Наука о данных использует несколько различных инструментов и технологий для достижения лучших результатов, и именно поэтому трудно выбрать только один конкретный инструмент анализа данных для улучшения бизнеса. Каждый инструмент играет свою роль, и не все они подходят для выполнения одной и той же работы. Поэтому давайте узнаем, что такое инструменты анализа данных, и рассмотрим некоторые инструменты, доступные на рынке.",
        descriptionEN: "Data analytics is used for transforming raw data into useful insights. It provides statistics and explanations to help businesses produce improved data-driven decisions. According to a variety of data analytics courses: modern business operations revolve around data science. Data Science uses several different tools and technologies to provide better results, and that’s what makes it difficult to choose just one particular data analytics tool for improving a business. Every tool has a different role to play, and not all of them are suitable for doing the same job. Therefore, let us learn what data analytics tools are, and explore some tools that are available in the market.",
        author: "Yashu Gola",
    },
]

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case ACTION_ADD_NEWS_PUBLISH:
            return [ ...state, {
                id: Date.now(), 
                titleRU: payload.titleRU, 
                titleEN: payload.titleEN, 
                descriptionRU: payload.descriptionRU,
                descriptionEN: payload.descriptionEN,
            } ]; 
        case ACTION_DELETE_NEWS_PUBLISH:
            return state.filter(el => el.id !== payload ? true : false); 
        case ACTION_EDIT_NEWS_PUBLISH:
            return state.map(item => {
                if (item.id === payload.id) {
                    item.titleRU = payload.titleRU
                    item.titleEN = payload.titleEN
                    item.descriptionRU = payload.descriptionRU
                    item.descriptionEN = payload.descriptionEN
                }
                return item
            })
        default:
            return state;
    }

}