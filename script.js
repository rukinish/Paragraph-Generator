const paragraphs=[
    'Web development involves creating websites and web applications accessible through the internet. It includes front-end, back-end, and full-stack development, focusing on different aspects of functionality and user experience.',
    'Front-end development builds user-facing elements like layout, design, and interactivity using HTML, CSS, and JavaScript to ensure a seamless user experience.',
    'Back-end development handles server-side tasks such as data storage, authentication, and communication, using languages like Python, Ruby, Java, or Node.js and frameworks like Django or Express.js.',
    'Full-stack development combines front-end and back-end skills, allowing developers to work on all aspects of a web application from start to finish.',
    'Web development involves working with databases like MySQL, PostgreSQL, or MongoDB to store and retrieve data for web applications.',
    'Responsive web design ensures websites are optimized for various devices, using flexible layouts and media queries to adapt content dynamically.',
    'Frameworks and libraries like React.js, Angular, Django, or Express.js streamline development with pre-built components and tools.',
    'Security measures such as HTTPS, encryption, and authentication protect user data and prevent unauthorized access.',
    'Continuous integration and deployment automate building, testing, and deploying code changes using tools like Jenkins or GitHub Actions.',
    'Web development evolves rapidly, requiring developers to stay updated with the latest trends and tools to build innovative web experiences.',
];

const item=document.getElementById('items')
const dataContainer =document.getElementById('data')

function shuffle(array) {

    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function generate() {

    if(item.value == 0){
        alert('The value cannot be zero. Please enter another number');
    } else if(item.value > paragraphs.length){
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        dataContainer.innerHTML = `${paragraphs[randomIndex]}`;
    } else{
        const shufflePara = paragraphs;
        shuffle(paragraphs);

        const selectedPara = shufflePara.slice(0, item.value);
        const paraHtml = selectedPara.map(paragraphs => `<p>${paragraphs}</p>`).join("");
        dataContainer.innerHTML = paraHtml;
    }
    
}