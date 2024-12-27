import womanWithFood from '../assets/woman-with-food.jpg';
import staff1 from '../assets/staff-1.jpg';
import staff2 from '../assets/staff-2.jpg';
import interior from '../assets/interior.jpg';

import InfoBlock from '../components/InfoBlock';
import '../styles/About.css';

const infoBlocks = [
	{
		title: 'Історія та філософія закладу',
		images: [
			{
				src: womanWithFood,
				alt: 'Жінка з їжею в руках',
			},
		],
		description: [
			'Ситень – це не просто фастфуд, це місце з характером. Наша історія почалась з мрії про місце, де швидка їжа буде смачною, як домашня. Все почалося з маленького фудтраку на одній з людних вулиць міста. Ми поставили собі за мету робити просту їжу, але робити її не просто добре, а відмінно. Спочатку у нас було тільки кілька страв – кілька бургерів, картопля і кілька соусів. Але з кожним новим клієнтом, з кожним позитивним відгуком ми росли, експериментували і дійшли до того, що зараз у нас є своє повноцінне місце з повним меню. Ми не гналися за успіхом. Для нас головним завжди була якість і душа, яку ми вкладаємо в кожне блюдо. Власне, тому і назвалися Ситень – бо хочемо, щоб ти був ситий і задоволений кожним візитом до нас.',
			'Ми впевнені: їжа має бути не лише швидкою, а й смачною, свіжою і щирою. Кожен продукт, який ми використовуємо, проходить строгий контроль – ми беремо тільки те, що купили б для себе. Ми любимо кухню, що робить твій день кращим, тому не використовуємо напівфабрикати чи хімію. Це про чесну їжу без компромісів. Ми не робимо вигляд, що ми "гурман-ресторан", але обіцяємо, що у нас ти завжди отримаєш смачну, щиру їжу, яка принесе задоволення. Наша місія – не просто швидко нагодувати, а зробити так, щоб ти залишився по-справжньому задоволеним. Ми хочемо, щоб після нашого бургера або картопельки ти не просто наївся, а подумав: "Так, це було те, що треба!". Ми прагнемо стати місцем, куди заходиш не тільки заради їжі, але і заради атмосфери. Це місце для швидкої перерви або для довгих дружніх розмов за столом.',
			'Ми також працюємо над тим, щоб наші страви були доступні всім. Смачно і швидко водночас не повинно бути розкішшю – це наш підхід. Ситень – це про любов до простої, але крутої їжі, до людей, і до моментів, коли можна забути про все на світі і просто насолодитися кожним шматочком.',
		],
	},
	{
		title: 'Наша команда',
		images: [
			{
				src: staff1,
				alt: 'Фото персоналу у закладі',
			},
			{
				src: staff2,
				alt: 'Фото персоналу за касовим апаратом',
			},
		],
		description: [
			"Наш заклад – це не просто кухня і стіни, це велика дружня сім'я, де кожен працює з любов'ю і фанатизмом до своєї справи. Ми віримо, що саме люди створюють місце особливим. Тому наша команда – це не просто співробітники, а ті, хто по-справжньому піклується про кожного гостя. Ми не просто готуємо і обслуговуємо – ми створюємо атмосферу, яка заряджає позитивом. Кожен з нас – від кухарів до офіціантів – знає, що саме від їхнього підходу залежить твій досвід у Ситні.",
			"У нас немає бар'єрів між нами і клієнтами. Ми завжди раді поговорити, відповісти на питання, поділитися порадами щодо страв або навіть обмінятися жартами. Щирість і відкритість – це те, що відрізняє нас від інших. Ми робимо все, щоб ти відчував себе частиною нашої сім'ї, а не просто клієнтом на один раз. Кожне блюдо, яке виходить з нашої кухні, проходить через руки людей, які вірять, що смачна їжа – це більше, ніж просто їжа. Ми любимо експериментувати, постійно вдосконалюватися, тому ти завжди знайдеш щось нове в нашому меню.",
		],
	},
	{
		title: 'Наш інтер’єр',
		images: [
			{
				src: interior,
				alt: "Інтер'єр закладу",
			},
		],
		description: [
			"Наш інтер'єр створений так, щоб ти відчував себе комфортно і затишно, як у гостях у друзів. Ми поєднали сучасний стиль з елементами домашнього затишку, щоб ти міг розслабитися і насолодитися їжею, не відчуваючи зайвої формальності. У нас немає пафосу або гламурних прикрас – лише стильний, продуманий дизайн, де деталі говорять самі за себе.",
			'Ми знаємо, як важливо мати місце, де можна не лише перекусити, але й перезарядитися. Тому кожен куточок Ситня продуманий так, щоб тобі було зручно і приємно, чи то ти прийшов один на швидкий обід, чи з друзями на довгі посиденьки. Легкі кольори, зручні меблі та атмосфера невимушеності – це те, що допоможе тобі забути про суєту і просто насолоджуватися моментом. У Ситні кожен момент важливий, і ми робимо все, щоб твій візит залишив приємні спогади.',
		],
	},
];

const About = () => {
	return (
		<section className="about__container">
			{infoBlocks.map((_block) => (
				<InfoBlock className="about__info-block" block={_block} />
			))}
		</section>
	);
};

export default About;