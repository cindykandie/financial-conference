const speakers = [
  {
    id: 1,
    speakerName: 'Graham Stephan',
    speakerTitle: 'Millionaire 20 Year old',
    speakerDescription: 'It is in understanding how much money you need to be happy that you get the confidence and power to be happy',
    speakerImage: '<img src="assets/image1.jpg" alt="Speaker 1\'s image"/>',
  },
  {
    id: 2,
    speakerName: 'Dave Ramsey',
    speakerTitle: 'Boomer who is looking out for us as the future generation.',
    speakerDescription: "Debt can make you richer but your student loans aren't working for you. cut them off",
    speakerImage: '<img src="assets/image2.jpg" alt="Speaker 2\'s image"/>',
  },
  {
    id: 3,
    speakerName: 'Sorelle Amore',
    speakerTitle: 'Wealthy Wise and A piece of dime',
    speakerDescription: "Wealth is global wealth is wide open your eyes to al the lies and maybe then you'll see all the gold and treasures the world beholds",
    speakerImage: '<img src="assets/image4.jpg" alt="Speaker 3\'s image"/>',
  },
  {
    id: 4,
    speakerName: 'Cindy Kandie',
    speakerTitle: 'Upcoming TechPreneur- wise beyond her ears',
    speakerDescription: 'Despite everything keep your ideal goal in mimd work like there is no tomorrow but be careful not to kill yourself with work',
    speakerImage: '<img src="assets/image5.jpg" alt="Speaker 4\'s image"/>',
  },
  {
    id: 5,
    speakerName: 'Lynette Adkins',
    speakerTitle: 'Millionaire YouTube Content Creator',
    speakerDescription: 'With understanding comes the door of endless opportunities, everyday brings its trials everyday makes its money, Get paid to live your own life',
    speakerImage: '<img src="assets/image6.jpg" alt="Speaker 5\'s image"/>',
  },
  {
    id: 6,
    speakerName: 'Peter Peterson',
    speakerTitle: 'Former Rugby coach',
    speakerDescription: 'We are all unique, only reason we aint all rich is majority of us are copy cats. Abando the control Z of life and fly.',
    speakerImage: '<img src="assets/image3.jpg" alt="Speaker 6\'s image"/>',
  },
];

const speakersDisplay = document.querySelector('.speakers-list');

for (let i = 0; i < speakers.length; i += 1) {
  const createSpeakers = () => {
    speakersDisplay.insertAdjacentHTML(
      'afterbegin',
      `<li>
        <div class="speaker-image">
            <span class="image-holder"></span>
            ${speakers[i].speakerImage}
        </div>
        <div class="speaker-details">
            <h4>${speakers[i].speakerName}</h4>
            <span>${speakers[i].speakerTitle}</span>
            <p>${speakers[i].speakerDescription}</p>
        </div>
    </li>`,
    );
  };
  createSpeakers();
}