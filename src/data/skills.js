import books from '../assets/books.jpg'
import centrum from '../assets/centrum.jpg'
import mobile from '../assets/mobile.jpg'

const skills = () => {

    return [
        {
            id: 1,
            title: "Java",
            description: "Write Once, Run Everywhere",
            url: `${ mobile }`
        },
        {
            id: 2,
            title: "React",
            description: "JavaScript Library",
            url: `${ mobile }`
        },
        {
            id: 3,
            title: "MongoDb",
            description: "Scable NoSQL database",
            url: `${ mobile }`
        }
        ,
        {
            id: 4,
            title: "MySQL",
            description: "SQL database",
            url: `${ mobile }`
        },
        {
            id: 5,
            title: "Spring Boot",
            description: "Java Enterprise Framework",
            url: `${ mobile }`
        },
        {
            id: 6,
            title: "AWS",
            description: "Amazon Web Services, EC2, S3",
            url: `${ mobile }`
        }
    ]
}

export default skills;