import { formatQuestions } from '../utils/formatQuestions'

const mockData = [
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'In the fighting game &quot;Skullgirls,&quot; which character utilizes a folding chair called the &quot;Hurting&quot; as a weapon?',
    correct_answer: 'Beowulf',
    incorrect_answers: ['Big Band', 'Squigly', 'Cerebella'],
  },
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What Nationality is D.Va from Overwatch?',
    correct_answer: 'Korean',
    incorrect_answers: ['Japanese', 'Chinese', 'Vietnamese '],
  },
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'medium',
    question: 'Which of the following Pok&eacute;mon games released first?',
    correct_answer: 'Pok&eacute;mon Crystal',
    incorrect_answers: [
      'Pok&eacute;mon Platinum',
      'Pok&eacute;mon FireRed',
      'Pok&eacute;mon Black',
    ],
  },
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'In Xenoblade Chronicles X, which class has a sniper rifle as it&#039;s primary weapon?',
    correct_answer: 'Partisan Eagle',
    incorrect_answers: ['Blast Fencer', 'Winged Viper', 'Bastion Warrior'],
  },
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'medium',
    question: 'In the Mass Effect trilogy, who is the main protagonist?',
    correct_answer: 'Shepard',
    incorrect_answers: ['Mordin', 'Garrus', 'Thane'],
  },
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Which team won the &quot;Tom Clancy&#039;s Rainbow Six Siege&quot; Invitational Event February 2017 in the PC Category?',
    correct_answer: 'Continuum',
    incorrect_answers: ['GIFU', 'Santos Dexterity', 'eRa Eternity'],
  },
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'What is not a playable race in &quot;Final Fantasy XIV: A Realm Reborn&quot;?',
    correct_answer: 'Hume',
    incorrect_answers: ['Miqo&#039;te', 'Lalafell', 'Roegadyn'],
  },
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'In &quot;Pok&eacute;mon Sun and Moon&quot;, Team Skull took over which town?',
    correct_answer: 'Po Town',
    incorrect_answers: ['Heahea City', 'Tapu Village', 'Iki Town'],
  },
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'What is the real name of &quot;Warhead&quot; in the Sega Genesis game &quot;Vectorman&quot;?',
    correct_answer: 'Raster',
    incorrect_answers: ['Peacehead', 'Vectorkid', 'Bitmap'],
  },
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Who is the leader of the Brotherhood of Nod in the Command and Conquer series?',
    correct_answer: 'Kane',
    incorrect_answers: ['Joseph Stalin', 'CABAL', 'Yuri'],
  },
]

test('formatQuestions', () => {})
