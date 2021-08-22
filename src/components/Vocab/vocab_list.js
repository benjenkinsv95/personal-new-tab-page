/* eslint no-tabs: ["warn", { allowIndentationTabs: true }] */

const vocab = [
  {
    hide: false,
    latin:
      '-ne (attached to the end of the first word in the sentence, usually the most important word in the question)',
    english: '(signals a yes-no question; no English translation)'
  },
  {
    hide: false,
    latin: '-que',
    english: 'and'
  },
  {
    hide: false,
    latin: 'absum, abesse, āfuī, āfutūrus',
    english: 'to be absent, away, distant'
  },
  {
    hide: false,
    latin: 'accipiō, accipere, accēpī, acceptus',
    english: 'to receive'
  },
  {
    hide: false,
    latin: 'aciēs, aciēī, f.',
    english: 'battle line'
  },
  {
    hide: false,
    latin: 'ad (+ acc.)',
    english: 'to, toward'
  },
  {
    hide: false,
    latin: 'adventus, adventūs, m.',
    english: 'arrival'
  },
  {
    hide: false,
    latin: 'aedificō, aedificāre, aedificāvī, aedificātus',
    english: 'to build'
  },
  {
    hide: false,
    latin: 'aeger, aegra, aegrum',
    english: 'sick, weak'
  },
  {
    hide: false,
    latin: 'aequus, aequa, aequum',
    english: 'even, calm, equal'
  },
  {
    hide: false,
    latin: 'aestus, aestūs, m.',
    english: 'heat; tide'
  },
  {
    hide: false,
    latin: 'aetās, aetātis, f.',
    english: 'age, life'
  },
  {
    hide: false,
    latin: 'ager, agrī, m.',
    english: '(cultivated) field; countryside'
  },
  {
    hide: false,
    latin: 'agricola, agricolae, m.',
    english: 'farmer'
  },
  {
    hide: false,
    latin: 'agō, agere, ēgī, actus',
    english: 'to do, perform; drive'
  },
  {
    hide: false,
    latin: 'ait, aiunt; āiō',
    english: 'he says, they say; I say'
  },
  {
    hide: false,
    latin: 'aliud ... aliud',
    english: 'one thing ... another thing'
  },
  {
    hide: false,
    latin: 'alius, alia, aliud (alterīus commonly for gen. sg.)',
    english: 'other, another; (pl.) others, some'
  },
  {
    hide: false,
    latin: 'aliī ... aliī',
    english: 'some ... others'
  },
  {
    hide: false,
    latin: 'alter, altera, alterum (gen. -īus)',
    english: 'the one, the other (of two); next, second'
  },
  {
    hide: false,
    latin: 'altus, alta, altum',
    english: 'high, deep'
  },
  {
    hide: false,
    latin: 'ambulō, ambulāre, ambulāvī, ambulātūrus',
    english: 'to walk'
  },
  {
    hide: false,
    latin: 'amor, amōris, m.',
    english: 'love'
  },
  {
    hide: false,
    latin: 'amīcus, amīca, amīcum',
    english: 'friendly (to)'
  },
  {
    hide: false,
    latin: 'amīcus, amīcī, m.',
    english: 'friend'
  },
  {
    hide: false,
    latin: 'amō, amāre, amāvi, amātus',
    english: 'to love'
  },
  {
    hide: false,
    latin: 'annus, annī, m.',
    english: 'year'
  },
  {
    hide: false,
    latin: 'ante',
    english: 'before [of space or time], in front; previously'
  },
  {
    hide: false,
    latin: 'ante (+ acc.)',
    english: 'before, in front of'
  },
  {
    hide: false,
    latin: 'antequam',
    english: 'before'
  },
  {
    hide: false,
    latin: 'anīmus, animī, m.',
    english: 'mind, spirit, courage; soul'
  },
  {
    hide: false,
    latin: 'aptus, apta, aptum',
    english: 'fit, suitable (for)'
  },
  {
    hide: false,
    latin: 'aqua, aquae, f.',
    english: 'water'
  },
  {
    hide: false,
    latin: 'arbor, arboris, f.',
    english: 'tree'
  },
  {
    hide: false,
    latin: 'ardeō, ardēre, arsī, arsūrus',
    english: 'to burn, be on fire, glow'
  },
  {
    hide: false,
    latin: 'arma, armōrum, n. pl.',
    english: 'arms, weapons'
  },
  {
    hide: false,
    latin: 'ars, artis, f. (i-stem)',
    english: 'skill, art'
  },
  {
    hide: false,
    latin: 'arx, arcis, f. (i-stem)',
    english: 'citadel, summit'
  },
  {
    hide: false,
    latin: 'atque or ac',
    english: 'and'
  },
  {
    hide: false,
    latin: 'audeō, audēre, ausus sum',
    english: 'to dare'
  },
  {
    hide: false,
    latin: 'audiō, audīre, audīvī, audītus',
    english: 'to hear, listen (to)'
  },
  {
    hide: false,
    latin: 'aureus, aurea, aureum',
    english: 'golden, of gold'
  },
  {
    hide: false,
    latin: 'aurum, aurī, n.',
    english: 'gold'
  },
  {
    hide: false,
    latin: 'aut',
    english: 'or'
  },
  {
    hide: false,
    latin: 'aut ... aut',
    english: 'either ... or'
  },
  {
    hide: false,
    latin: 'auxilium, auxiliī, n.',
    english: 'aid, help; [in pl. often] auxiliary troops'
  },
  {
    hide: false,
    latin: 'bellum gerere',
    english: 'to wage war (see gerō for principle parts)'
  },
  {
    hide: false,
    latin: 'bellum gerō',
    english: 'to wage war'
  },
  {
    hide: false,
    latin: 'bellum, bellī, n.',
    english: 'war'
  },
  {
    hide: false,
    latin: 'bene',
    english: 'well'
  },
  {
    hide: false,
    latin: 'bonus, bona, bonum',
    english: 'good'
  },
  {
    hide: false,
    latin: 'brevis, breve',
    english: 'brief, short'
  },
  {
    hide: false,
    latin: 'cadō, cadere, cecidī, cāsūrus, a, um',
    english: 'to fall'
  },
  {
    hide: true,
    latin: 'caedēs, caedis, f. (i-stem)',
    english: 'slaughter, murder'
  },
  {
    hide: true,
    latin: 'caedō, caedere, cecīdī, caesus',
    english: 'to kill, cut; sacrifice [of animals]'
  },
  {
    hide: false,
    latin: 'caelum, caelī, n.',
    english: 'sky, heavens'
  },
  {
    hide: false,
    latin: 'Caesar, Caesaris, m.',
    english: 'Julius Caesar [a Roman general]'
  },
  {
    hide: false,
    latin: 'canō, canere, cecinī, cantus',
    english: 'to sing'
  },
  {
    hide: false,
    latin: 'capiō, capere, cēpī, captus',
    english: 'to take, seize, capture'
  },
  {
    hide: false,
    latin: 'caput, capitis, n.',
    english: 'head; summit'
  },
  {
    hide: false,
    latin: 'careō, carēre, caruī, caritūrus (+ abl.)',
    english: 'to be without, free from; need, miss'
  },
  {
    hide: false,
    latin: 'carmen, carminis, n.',
    english: 'song, poem'
  },
  {
    hide: false,
    latin: 'casa, casae, f.',
    english: 'house, hut'
  },
  {
    hide: false,
    latin: 'castra ponere',
    english: 'to pitch camp'
  },
  {
    hide: false,
    latin: 'castra, castrōrum, n. pl.',
    english: 'camp'
  },
  {
    hide: false,
    latin: 'causa, causae, f.',
    english: 'cause, reason'
  },
  {
    hide: false,
    latin: 'causā (+ gen.)',
    english: 'for the sake of, because of'
  },
  {
    hide: false,
    latin: 'celer, celeris, celere',
    english: 'swift, quick, rapid'
  },
  {
    hide: false,
    latin: 'celeriter',
    english: 'quickly'
  },
  {
    hide: false,
    latin: 'cernō, cernere, crēvī, crētus',
    english: 'to see, discern, perceive, decide'
  },
  {
    hide: false,
    latin: 'circum (+ acc.)',
    english: 'around'
  },
  {
    hide: false,
    latin: 'circā (+ acc.)',
    english: 'around'
  },
  {
    hide: false,
    latin: 'clāmor, clāmōris, m.',
    english: 'shout; cheer'
  },
  {
    hide: false,
    latin: 'clāmō, clāmāre, clāmāvī, clāmātus',
    english: 'to shout'
  },
  {
    hide: false,
    latin: 'clārus, clāra, clārum',
    english: 'clear, bright; famous; loud'
  },
  {
    hide: false,
    latin: 'cognōscō, cognōscere, cognōvī, cognitus',
    english: 'to learn, recognize, understand'
  },
  {
    hide: false,
    latin: 'concurrō, concurrere, concucurrī, concursūrsus',
    english: 'to charge, rush together, clash'
  },
  {
    hide: false,
    latin: 'condō, condere, condidī, conditus',
    english: 'to found, build, establish'
  },
  {
    hide: false,
    latin: 'coniūnx, coniugis, m. or f.',
    english: 'wife; husband; spouse'
  },
  {
    hide: false,
    latin: 'contrā (+ acc.)',
    english: 'opposite; against'
  },
  {
    hide: false,
    latin: 'contrā (adv.)',
    english: 'in reply; face to face'
  },
  {
    hide: false,
    latin: 'cornū, cornūs, n.',
    english: 'horn; wing (of an army)'
  },
  {
    hide: false,
    latin: 'corpus, corporis, n.',
    english: 'body, corpse'
  },
  {
    hide: false,
    latin: 'creō, creāre, creāvī, creātus',
    english: 'to create; elect, choose'
  },
  {
    hide: false,
    latin: 'crēdō, crēdere, crēdidī, crēditus',
    english:
      'to believe, trust (+ dat. of person believed; + acc. of thing believed)'
  },
  {
    hide: false,
    latin: 'crīmen, crīminis, n.',
    english: 'crime; accusation, charge'
  },
  {
    hide: true,
    latin: 'cum',
    english: 'when'
  },
  {
    hide: true,
    latin: 'cum (+ abl.)',
    english: 'with'
  },
  {
    hide: false,
    latin: 'cupiō, cupere, cupīvī or cupiī, cupītus',
    english: 'to want, desire'
  },
  {
    hide: false,
    latin: 'currō, currere, cucurrī, cursus',
    english: 'to run'
  },
  {
    hide: false,
    latin: 'cārus, cāra, cārum',
    english: 'dear (to)'
  },
  {
    hide: false,
    latin: 'cāsus, cāsūs, m.',
    english: 'fall; misfortune, destruction; chance, accident'
  },
  {
    hide: false,
    latin: 'cēna, cēnae, f.',
    english: 'dinner'
  },
  {
    hide: false,
    latin: 'cēterī, cēterae, cētera',
    english: 'the rest, the others'
  },
  {
    hide: false,
    latin: 'cīvis, cīvis, m. or f. (i-stem)',
    english: 'citizen'
  },
  {
    hide: false,
    latin: 'cīvitās, cīvitātis, f.',
    english: 'state; citizenship'
  },
  {
    hide: false,
    latin: 'cōgitō, cōgitāre, cōgitāvī, cōgitātus',
    english: 'to think, consider'
  },
  {
    hide: false,
    latin: 'cōgō, cōgere, coēgī, coāctus',
    english: 'to force, compel; collect'
  },
  {
    hide: false,
    latin: 'cōnsilium, cōnsiliī, n.',
    english: 'plan, advice'
  },
  {
    hide: false,
    latin: 'cōnstituō, cōnstituere, cōnstituī, cōnstitūtus',
    english: 'to decide, appoint, establish'
  },
  {
    hide: false,
    latin: 'cōnsul, cōnsulis, m.',
    english: 'consul'
  },
  {
    hide: false,
    latin: 'cōpia, cōpiae, f.',
    english: 'abundance, plenty, resources, wealth; [pl.] troops'
  },
  {
    hide: false,
    latin: 'cūra, cūrae, f.',
    english: 'care, anxiety'
  },
  {
    hide: false,
    latin: 'dea, deae, f. (dat. pl. and abl. pl. = deābus)',
    english: 'goddess'
  },
  {
    hide: false,
    latin: 'deus, deī, m. (nom. pl. = dī; dat. pl. and abl. pl. = dīs)',
    english: 'god'
  },
  {
    hide: false,
    latin: 'dexter, dextra, dextrum',
    english: 'right (side); right hand; pledge (of friendship)'
  },
  {
    hide: false,
    latin: 'difficilis, difficile',
    english: 'difficult'
  },
  {
    hide: false,
    latin: 'dignus, digna, dignum',
    english: 'worthy; worth, fitting'
  },
  {
    hide: false,
    latin: 'discēdō, discēdere, discessī, discessūrus',
    english: 'to depart, go away; separate'
  },
  {
    hide: false,
    latin: 'discō, discere, didicī, —',
    english: 'to learn'
  },
  {
    hide: false,
    latin: 'diēs, diēī, m. or f.',
    english: 'day (fem. used when it is an appointed or set day)'
  },
  {
    hide: false,
    latin: 'diū',
    english: 'for a long time'
  },
  {
    hide: false,
    latin: 'doceō, docēre, docuī, docitus',
    english:
      'to teach (often with 2 accusatives: one of the person, the other of the thing taught)'
  },
  {
    hide: false,
    latin: 'doleō, dolēre, doluī, dolitūrus',
    english: 'to grieve, mourn, suffer pain'
  },
  {
    hide: false,
    latin: 'dolor, dolōris, m.',
    english: 'pain, sorrow'
  },
  {
    hide: false,
    latin: 'dolus, dolī, m.',
    english: 'trick, deceit'
  },
  {
    hide: true,
    latin: 'dominus, dominī, m.',
    english: 'master, lord'
  },
  {
    hide: false,
    latin: 'domus, domūs, f.',
    english: 'house(hold), home'
  },
  {
    hide: false,
    latin: 'dormiō, dormīre, dormīvī, dormitūrus',
    english: 'to sleep'
  },
  {
    hide: false,
    latin: 'dubitō, dubitāre, dubitāvī, dubitātus',
    english: 'to hesitate, doubt'
  },
  {
    hide: false,
    latin: 'dulcis, dulce',
    english: 'sweet; pleasant'
  },
  {
    hide: false,
    latin: 'dum',
    english: 'while, as long as'
  },
  {
    hide: false,
    latin: 'dux, ducis, m.',
    english: '(military) leader, commander'
  },
  {
    hide: false,
    latin: 'dē (+abl.)',
    english: 'down from; about, concerning'
  },
  {
    hide: false,
    latin: 'dēbeō, dēbēre, dēbui, dēbitus',
    english: '"ought to, should"; to owe; to be obligated to'
  },
  {
    hide: false,
    latin: 'dīcō, dīcere, dīxī, dīctus',
    english: 'to say, speak, tell'
  },
  {
    hide: false,
    latin: 'dīvīnus, dīvīna, dīvīnum',
    english: 'divine, of the gods; prophetic'
  },
  {
    hide: false,
    latin: 'dō, dare, dedī, datus',
    english: 'to give'
  },
  {
    hide: false,
    latin: 'dōnum, dōnī, n.',
    english: 'gift, present'
  },
  {
    hide: false,
    latin: 'dūcō, dūcere, dūxī, ductus',
    english: 'to lead'
  },
  {
    hide: false,
    latin: 'efficiō, efficere, effēcī, effectus',
    english: 'to bring about, produce'
  },
  {
    hide: false,
    latin: 'ego, nōs',
    english: 'I, we'
  },
  {
    hide: false,
    latin: 'enim (postpostive conjunction)',
    english: 'for; in fact; yes, truly'
  },
  {
    hide: false,
    latin: 'epistula, epistulae, f.',
    english: 'letter'
  },
  {
    hide: false,
    latin: 'equus, equī, m.',
    english: 'horse'
  },
  {
    hide: false,
    latin: 'errō, errāre, errāvī, errātus',
    english: 'to wander; err'
  },
  {
    hide: false,
    latin: 'et',
    english: 'and, even, also'
  },
  {
    hide: false,
    latin: 'et ... et',
    english: 'both ... and'
  },
  {
    hide: false,
    latin: 'etiam',
    english: 'also, even'
  },
  {
    hide: false,
    latin: 'exemplum, exemplī, n.',
    english: 'example, model'
  },
  {
    hide: false,
    latin: 'exercitus, exercitūs, m.',
    english: 'army'
  },
  {
    hide: false,
    latin: 'facile',
    english: 'easily'
  },
  {
    hide: false,
    latin: 'facilis, facile',
    english: 'easy'
  },
  {
    hide: false,
    latin: 'faciēs, faciēī, f.',
    english: 'face; appearance'
  },
  {
    hide: false,
    latin: 'faciō, facere, fēcī, factus',
    english: 'to do; make'
  },
  {
    hide: false,
    latin: 'factum, factī, n.',
    english: 'deed, act, exploit, achievement'
  },
  {
    hide: false,
    latin: 'ferrum, ferrī, n.',
    english: 'iron; sword'
  },
  {
    hide: false,
    latin: 'fessus, fessa, fessum',
    english: 'tired'
  },
  {
    hide: false,
    latin: 'festīnō, festīnāre, festīnāvī, festīnātus',
    english: 'to hurry, hasten'
  },
  {
    hide: false,
    latin: 'fidēlis, fidēle',
    english: 'faithful, loyal (to)'
  },
  {
    hide: false,
    latin: 'fidēs, fideī, f.',
    english: 'faith, trust; loyalty, trustworthiness'
  },
  {
    hide: false,
    latin: 'finis, finis, f. (i-stem)',
    english: 'end, border; (pl.) boundary, territory'
  },
  {
    hide: false,
    latin: 'flūctus, flūctūs, m.',
    english: 'wave; commotion'
  },
  {
    hide: false,
    latin: 'flūmen, flūminis, n.',
    english: 'river'
  },
  {
    hide: false,
    latin: 'forte',
    english: 'by chance'
  },
  {
    hide: false,
    latin: 'fortis, forte',
    english: 'brave; strong'
  },
  {
    hide: false,
    latin: 'fortiter',
    english: 'bravely, forcefully'
  },
  {
    hide: false,
    latin: 'fortūna, fortūnae, f.',
    english: 'chance, luck, fortune'
  },
  {
    hide: false,
    latin: 'frangō, frangere, frēgī, frāctus',
    english: 'to break, shatter, wreck'
  },
  {
    hide: false,
    latin: 'frāter, frātris, m.',
    english: 'brother'
  },
  {
    hide: false,
    latin: 'fugiō, fugere, fūgī, fugitūrus',
    english: 'to flee (from), escape, avoid'
  },
  {
    hide: false,
    latin: 'fābula, fābulae, f.',
    english: 'story'
  },
  {
    hide: false,
    latin: 'fāma, fāmae, f.',
    english: 'fame, report, reputation; rumor'
  },
  {
    hide: false,
    latin: 'fātum, fātī, n.',
    english: 'fate, destiny'
  },
  {
    hide: false,
    latin: 'fēlīx, fēlīcis',
    english: 'fortunate, lucky'
  },
  {
    hide: false,
    latin: 'fēmina, fēminae, f.',
    english: 'woman'
  },
  {
    hide: false,
    latin: 'fīlia, fīliae, f. (dat. pl. and abl. pl. = fīliābus)',
    english: 'daughter'
  },
  {
    hide: false,
    latin: 'fīlius, fīliī, m. (voc. sg. = fīlī)',
    english: 'son'
  },
  {
    hide: false,
    latin: 'fīniō, fīnīre, fīnīvī, fīnītus',
    english: 'to end, finish; limit; die'
  },
  {
    hide: false,
    latin: 'Gallia, Galliae, f.',
    english: 'Gaul (modern day France)'
  },
  {
    hide: false,
    latin: 'gaudeō, gaudēre, gāvīsus sum',
    english: 'to rejoice, be glad; delight in (+ abl.)'
  },
  {
    hide: false,
    latin: 'gaudium, gaudiī, n.',
    english: 'joy, delight'
  },
  {
    hide: false,
    latin: 'genus, generis, n.',
    english: 'birth, origin; kind; race'
  },
  {
    hide: false,
    latin: 'genū, genūs, n.',
    english: 'knee'
  },
  {
    hide: false,
    latin: 'gerō, gerere, gessī, gestus',
    english: 'to bear, carry on; wear'
  },
  {
    hide: false,
    latin: 'Graecia, Graeciae, f.',
    english: 'Greece'
  },
  {
    hide: false,
    latin: 'Graecus, Graeca, Graecum',
    english: 'Greek'
  },
  {
    hide: false,
    latin: 'gratiā (+ gen.)',
    english: 'for the sake of, because of'
  },
  {
    hide: false,
    latin: 'grātia, grātiae, f.',
    english: 'grace; favor, kindness; gratitude'
  },
  {
    hide: false,
    latin: 'grātias agō (+ dat.)',
    english: 'to thank'
  },
  {
    hide: false,
    latin: 'gēns, gentis, f. (i-stem)',
    english: 'clan, tribe, family; nation; people'
  },
  {
    hide: false,
    latin: 'habeō, habēre, habuī, habitus',
    english: 'to have; consider'
  },
  {
    hide: false,
    latin: 'hic, haec, hoc',
    english: 'this'
  },
  {
    hide: false,
    latin: 'hodiē',
    english: 'today'
  },
  {
    hide: true,
    latin: 'homō, hominis, m.',
    english: 'human being, man'
  },
  {
    hide: false,
    latin: 'honor, honōris, m.',
    english: 'honor, respect; public office'
  },
  {
    hide: false,
    latin: 'hostis, hostis, m. (i-stem)',
    english:
      'enemy (of the state, usually used in the plural; contrast inimīcus = a personal enemy)'
  },
  {
    hide: false,
    latin: 'humus, humī, f.',
    english: 'ground, earth'
  },
  {
    hide: true,
    latin: 'hōra, hōrae, f.',
    english: 'hour, season'
  },
  {
    hide: false,
    latin: 'iaceō, iacēre, iacuī, iacitūrus',
    english: 'to lie (e.g., on the ground), lie dead'
  },
  {
    hide: false,
    latin: 'iactō, iactāre, iactāvī, iactātus',
    english: 'to throw'
  },
  {
    hide: false,
    latin: 'iam',
    english: 'now, already'
  },
  {
    hide: false,
    latin: 'ibi',
    english: 'there'
  },
  {
    hide: false,
    latin: 'igitur (postpositive)',
    english: 'therefore'
  },
  {
    hide: false,
    latin: 'ignis, ignis, m.',
    english: 'fire'
  },
  {
    hide: false,
    latin: 'ille, illa, illud',
    english: 'that'
  },
  {
    hide: false,
    latin: 'imperium, imperiī, n.',
    english: 'command, (military) power'
  },
  {
    hide: false,
    latin: 'impetus, impetūs, m.',
    english: 'attack; charge; impulse'
  },
  {
    hide: false,
    latin: 'impleō, implēre, implēvī, implētus',
    english: 'to fill, fill up; complete'
  },
  {
    hide: false,
    latin: 'in (+ abl.)',
    english: 'in, on'
  },
  {
    hide: false,
    latin: 'in (+ acc.)',
    english: 'into, onto, against'
  },
  {
    hide: false,
    latin: 'incendō, incendere, incendī, incēnsus',
    english: 'to set fire to, burn; inflame'
  },
  {
    hide: false,
    latin: 'incipiō, incipere, incēpī, inceptus',
    english: 'to begin'
  },
  {
    hide: false,
    latin: 'incolō, incolere, incoluī, —',
    english: 'to inhabit, live in'
  },
  {
    hide: false,
    latin: 'inde',
    english: 'from there; then, from that time forth'
  },
  {
    hide: false,
    latin: 'indignus, indigna, indignum',
    english: 'unworthy; undeserved; shameful'
  },
  {
    hide: false,
    latin: 'ingēns, ingentis',
    english: 'huge, mighty'
  },
  {
    hide: false,
    latin: 'inimīcus, inimīca, inimīcum',
    english: 'unfriendly, hostile (to)'
  },
  {
    hide: false,
    latin: 'inquit',
    english: '(s)he said [introduces a direct quotation]'
  },
  {
    hide: false,
    latin: 'inter (+ acc.)',
    english: 'between, among'
  },
  {
    hide: false,
    latin: 'interficiō, interficere, interfēcī, interfectus',
    english: 'to kill, destroy'
  },
  {
    hide: false,
    latin: 'inveniō, invenīre, invēnī, inventus',
    english: 'to find; discover, invent'
  },
  {
    hide: false,
    latin: 'ipse, ipsa, ipsum',
    hint: 'the intensifying adjective',
    english: '___self, himself, herself, itself; very'
  },
  {
    hide: false,
    latin: 'is, ea, id',
    english: 'he, she, it, (pl.) they; this, that'
  },
  {
    hide: false,
    latin: 'ita',
    english: 'thus, so, in this way'
  },
  {
    hide: false,
    latin: 'itaque',
    english: 'and so, therefore'
  },
  {
    hide: false,
    latin: 'iter, itineris, n.',
    english: 'journey, path, route; a day\'s march'
  },
  {
    hide: false,
    latin: 'iubeō, iubēre, iūssī, iūssus',
    english: 'to order, command'
  },
  {
    hide: false,
    latin: 'iuvō, iuvāre, iūvī, iūtus',
    english: 'to help; please'
  },
  {
    hide: false,
    latin: 'iūdicium, iūdiciī, n.',
    english: 'court, trial; judgment'
  },
  {
    hide: false,
    latin: 'iūdicō, iūdicāre, iūdicāvi, iūdicātus',
    english: 'to judge; decide'
  },
  {
    hide: false,
    latin: 'iūs, iūris, n.',
    english: 'right, law; justice'
  },
  {
    hide: false,
    latin: 'labor, labōris, m.',
    english: 'work, labor, effort; hardship'
  },
  {
    hide: false,
    latin: 'labōrō, labōrāre, labōrāvī, labōrātus',
    english: 'to work, strive'
  },
  {
    hide: false,
    latin: 'lacrima, lacrimae, f.',
    english: 'tear'
  },
  {
    hide: true,
    latin: 'laetus, laeta, laetum',
    english: 'happy; fertile'
  },
  {
    hide: false,
    latin: 'laudō, laudāre, laudāvī, laudātus',
    english: 'to praise'
  },
  {
    hide: false,
    latin: 'laus, laudis, f.',
    english: 'praise'
  },
  {
    hide: false,
    latin: 'legō, legere, lēgī, lēctus',
    english: 'to read; choose, select'
  },
  {
    hide: false,
    latin: 'levis, leve',
    english: 'light, easy; swift'
  },
  {
    hide: false,
    latin: 'lex, lēgis, f.',
    english: 'law'
  },
  {
    hide: false,
    latin: 'liber, librī m.',
    english: 'book'
  },
  {
    hide: false,
    latin: 'littera, litterae, f. pl.',
    english: 'letter (of the alphabet); pl. letter, literature'
  },
  {
    hide: false,
    latin: 'locus, locī, m. (in pl. sometimes also neuter)',
    english: 'place, position'
  },
  {
    hide: false,
    latin: 'longus, longa, longum',
    english: 'long'
  },
  {
    hide: false,
    latin: 'lēgātus, lēgātī, m.',
    english: 'delegate, envoy, ambassador; legion commander'
  },
  {
    hide: false,
    latin: 'līber, lībera, līberum',
    english: 'free'
  },
  {
    hide: false,
    latin: 'lībertās, lībertātis, f.',
    english: 'freedom, liberty'
  },
  {
    hide: false,
    latin: 'līberī, līberōrum, m. pl.',
    english: 'children'
  },
  {
    hide: false,
    latin: 'lītus, lītoris, n.',
    english: 'shore, beach, coast'
  },
  {
    hide: false,
    latin: 'lūna, lūnae, f.',
    english: 'moon'
  },
  {
    hide: false,
    latin: 'lūx, lūcis, f.',
    english: 'light'
  },
  {
    hide: false,
    latin: 'magnus, magna, magnum',
    english: 'large, great; important'
  },
  {
    hide: false,
    latin: 'malus, mala, malum',
    english: 'bad'
  },
  {
    hide: false,
    latin: 'maneō, manēre, mānsī, mānsūrus',
    english: 'to remain, stay'
  },
  {
    hide: false,
    latin: 'manus, manūs, f.',
    english: 'hand; band (of men)'
  },
  {
    hide: false,
    latin: 'mare, maris, n. (abl. sg. = mare and marī)',
    english: 'sea'
  },
  {
    hide: false,
    latin: 'medius, media, medium',
    english: 'middle, middle of (medium mare = "the middle of the sea")'
  },
  {
    hide: false,
    latin: 'metus, metūs, m.',
    english: 'fear, dread; anxiety'
  },
  {
    hide: false,
    latin: 'meus, mea, meum',
    english: 'my, mine'
  },
  {
    hide: false,
    latin: 'misceō, miscēre, miscuī, mixtus',
    english: 'to mix, mingle; stir up, disturb'
  },
  {
    hide: false,
    latin: 'miser, misera, miserum',
    english: 'miserable, unhappy'
  },
  {
    hide: false,
    latin: 'mittō, mittere, mīsī, missus',
    english: 'to send'
  },
  {
    hide: false,
    latin: 'moenia, moenium, n. pl.',
    english: 'walls, fortifications'
  },
  {
    hide: false,
    latin: 'moneō, monēre, monuī, monitus',
    english: 'to advise, warn, remind'
  },
  {
    hide: false,
    latin: 'mors, mortis, f. (i-stem)',
    english: 'death'
  },
  {
    hide: false,
    latin: 'mortālis, mortāle',
    english: 'mortal, transient; human'
  },
  {
    hide: false,
    latin: 'moveō, movēre, mōvī, mōtus',
    english: 'to move; excite; affect'
  },
  {
    hide: false,
    latin: 'multitūdō, multitūdinis, f.',
    english: 'multitude, great number, crowd'
  },
  {
    hide: false,
    latin: 'multus, multa, multum',
    english: 'much; many (pl.)'
  },
  {
    hide: false,
    latin: 'mālō, mālle, māluī, —',
    english: 'to prefer, want (something) more'
  },
  {
    hide: false,
    latin: 'māter, mātris, f.',
    english: 'mother'
  },
  {
    hide: false,
    latin: 'mēns, mentis, f. (i-stem)',
    english: 'mind, judgment, reason'
  },
  {
    hide: false,
    latin: 'mīles, mīlitis, m.',
    english: 'soldier'
  },
  {
    hide: false,
    latin: 'mīlle passūs, mīlia passuum (pl.)',
    english: 'mile (lit. "1000 paces"); miles'
  },
  {
    hide: false,
    latin: 'mōns, montis, m. (i-stem)',
    english: 'mountain'
  },
  {
    hide: false,
    latin: 'mōnstrō, mōnstrāre, mōnstrāvī, mōnstrātus',
    english: 'to show, demonstrate'
  },
  {
    hide: false,
    latin: 'mōs, mōris, m.',
    english: 'custom, tradition'
  },
  {
    hide: false,
    latin: 'nam',
    english: 'for (= because); indeed, truly'
  },
  {
    hide: false,
    latin: 'nauta, nautae, m.',
    english: 'sailor'
  },
  {
    hide: false,
    latin: 'nec ... nec',
    english: 'neither ... nor'
  },
  {
    hide: false,
    latin: 'nec or neque',
    english: 'and not, and ... not'
  },
  {
    hide: false,
    latin: 'necesse est',
    english: 'it is necessary'
  },
  {
    hide: false,
    latin: 'negō, negāre, negāvī, negātus',
    english: 'to deny, say that ... not'
  },
  {
    hide: false,
    latin: 'nesciō, nescīre, nescīvī, nescītus',
    english: 'not to know'
  },
  {
    hide: false,
    latin: 'neuter, neutra, neutrum (gen. -īus)',
    english: 'neither (of two)'
  },
  {
    hide: false,
    latin: 'nihil, n. (indeclinable)',
    english: 'nothing'
  },
  {
    hide: false,
    latin: 'noceō, nocēre, nocuī, nocitūrus (+ dat.)',
    english: 'to harm, be harmful to'
  },
  {
    hide: false,
    latin: 'noster, nostra, nostrum',
    english: 'our, ours'
  },
  {
    hide: false,
    latin: 'novus, nova, novum',
    english: 'new; strange'
  },
  {
    hide: false,
    latin: 'nox, noctis, f. (i-stem)',
    english: 'night'
  },
  {
    hide: false,
    latin: 'numquam',
    english: 'never'
  },
  {
    hide: false,
    latin: 'nunc',
    english: 'now, at present'
  },
  {
    hide: false,
    latin: 'nārrō, nārrāre, nārrāvī, nārrātus',
    english: 'to tell (a story)'
  },
  {
    hide: false,
    latin: 'nātūra, nātūrae, f.',
    english: 'nature'
  },
  {
    hide: false,
    latin: 'nāvigō, nāvigāre, nāvigāvī, nāvigātus',
    english: 'to sail, sail over (across), navigate'
  },
  {
    hide: false,
    latin: 'nāvis, nāvis, f. (i-stem)',
    english: 'ship'
  },
  {
    hide: false,
    latin: 'nēmō, m. (acc. sg. = nēminem)',
    english: 'no one'
  },
  {
    hide: false,
    latin: 'nīl, n. (indeclinable)',
    english: 'nothing'
  },
  {
    hide: false,
    latin: 'nōlō, nōlle, nōluī',
    english: 'to be unwilling, not want'
  },
  {
    hide: false,
    latin: 'nōmen, nōminis, n.',
    english: 'name'
  },
  {
    hide: false,
    latin: 'nōn',
    english: 'not'
  },
  {
    hide: false,
    latin: 'nōn sōlum ... sed etiam',
    english: 'not only ... but also'
  },
  {
    hide: false,
    latin: 'nūbēs, nūbis, f.',
    english: 'cloud'
  },
  {
    hide: false,
    latin: 'nūllus, nūlla, nūllum (gen. -īus)',
    english: 'not any, no'
  },
  {
    hide: false,
    latin: 'nūmen, nūminis, n.',
    english: 'divine will, divine power'
  },
  {
    hide: false,
    latin: 'nūntius, nūntiī, m.',
    english: 'messenger; message'
  },
  {
    hide: false,
    latin: 'nūntiō, nūntiāre, nūntiāvī, nūntiātus',
    english: 'to announce, report'
  },
  {
    hide: false,
    latin: 'ob (+ acc.)',
    english: 'because of'
  },
  {
    hide: false,
    latin: 'oculus, oculī, m.',
    english: 'eye'
  },
  {
    hide: false,
    latin: 'omnis, omne',
    english: 'all, every'
  },
  {
    hide: false,
    latin: 'ops, opis, f.',
    english: 'power, help; (pl.) wealth, resources'
  },
  {
    hide: false,
    latin: 'optō, optāre, optāvī, optātus',
    english: 'to choose, desire, wish for'
  },
  {
    hide: false,
    latin: 'orbis terrārum',
    english: 'the world'
  },
  {
    hide: false,
    latin: 'orbis, orbis, m. (i-stem)',
    english: 'circle; universe'
  },
  {
    hide: false,
    latin: 'ostendō, ostendere, ostendī, ostentus/ostēnsus',
    english: 'to show, reveal'
  },
  {
    hide: false,
    latin: 'pars, partis, f. (i-stem)',
    english: 'part, share, direction'
  },
  {
    hide: false,
    latin: 'parvus, parva, parvum',
    english: 'small'
  },
  {
    hide: false,
    latin: 'parō, parāre, parāvī, parātus',
    english: 'to prepare'
  },
  {
    hide: false,
    latin: 'passus, passūs, m.',
    english: 'pace, footstep'
  },
  {
    hide: false,
    latin: 'pater, patris, m.',
    english: 'father; senator'
  },
  {
    hide: false,
    latin: 'pateō, patēre, patuī, —',
    english: 'to be open, stand open'
  },
  {
    hide: false,
    latin: 'patria, patriae, f.',
    english: 'country, fatherland'
  },
  {
    hide: false,
    latin: 'paucī, paucae, pauca',
    english: 'few'
  },
  {
    hide: true,
    latin: 'pectus, pectoris, n.',
    english: 'breast, chest; heart'
  },
  {
    hide: false,
    latin: 'pecūnia, pecūniae, f.',
    english: 'money, property'
  },
  {
    hide: false,
    latin: 'per (+ acc.)',
    english: 'through, along; because of; by (in oaths and prayers)'
  },
  {
    hide: false,
    latin: 'persuādeō, persuādēre, persuāsī, persuāsus (+ dat.)',
    english: 'to persuade'
  },
  {
    hide: false,
    latin: 'perīculum, perīculī, n.',
    english: 'danger'
  },
  {
    hide: false,
    latin: 'petō, petere, petīvī or petiī, petītus',
    english: 'to seek, go after; ask; attack'
  },
  {
    hide: false,
    latin: 'placeō, placēre, placuī, placitūrus (+ dat.)',
    english: 'to please, be pleasing to'
  },
  {
    hide: false,
    latin: 'plēnus, plēna, plēnum (+gen. or abl.)',
    english: 'full (of), filled (with)'
  },
  {
    hide: false,
    latin: 'pontus, pontī, m.',
    english: 'sea, ocean'
  },
  {
    hide: false,
    latin: 'populus, populī, m',
    english: 'the people, a people, nation'
  },
  {
    hide: false,
    latin: 'portō, portāre, portāvī, portātus',
    english: 'to carry, bring'
  },
  {
    hide: false,
    latin: 'possum, posse, potuī, —',
    english: 'to be able, can'
  },
  {
    hide: false,
    latin: 'post (+ acc.)',
    english: 'after, behind'
  },
  {
    hide: false,
    latin: 'postquam',
    english: 'after, when'
  },
  {
    hide: false,
    latin: 'postulō, postulāre, postulāvī, postulātus',
    english: 'to demand, claim; prosecute'
  },
  {
    hide: false,
    latin: 'potēns, potentis',
    english: 'powerful; able'
  },
  {
    hide: false,
    latin: 'poēta, poētae, m.',
    english: 'poet'
  },
  {
    hide: false,
    latin: 'praebeō, praebēre, praebuī, praebitus',
    english: 'to show; offer, provide'
  },
  {
    hide: false,
    latin: 'proelium, proeliī, n.',
    english: 'battle'
  },
  {
    hide: false,
    latin: 'prohibeō, prohibēre, prohibuī, prohibitus',
    english: 'to prohibit, keep from; keep someone (acc.) from something (abl.)'
  },
  {
    hide: false,
    latin: 'propter (+ acc.)',
    english: 'because of, on account of'
  },
  {
    hide: false,
    latin: 'prīmus, prīma, prīmum',
    english: 'first'
  },
  {
    hide: false,
    latin: 'prīnceps, prīncipis, m.',
    english: 'leader, chief; first citizen, emperor'
  },
  {
    hide: false,
    latin: 'prō (+ abl.)',
    english: 'in front of; on behalf of; instead of'
  },
  {
    hide: false,
    latin: 'prōvincia, prōvinciae, f.',
    english: 'province'
  },
  {
    hide: false,
    latin: 'puella, puellae, f.',
    english: 'girl'
  },
  {
    hide: false,
    latin: 'puer, puerī, m.',
    english: 'boy'
  },
  {
    hide: false,
    latin: 'pugnō, pugnāre, pugnāvī, pugnātus',
    english: 'to fight'
  },
  {
    hide: false,
    latin: 'pulcher, pulchra, pulchrum',
    english: 'beautiful, handsome; fine'
  },
  {
    hide: false,
    latin: 'putō, putāre, putāvī, putātus',
    english: 'to think, consider; suppose'
  },
  {
    hide: false,
    latin: 'pār, paris',
    english: 'equal (to)'
  },
  {
    hide: false,
    latin: 'pāreō, pārēre, pāruī, paritūrus (+ dat.)',
    english: 'to obey, be obedient to'
  },
  {
    hide: false,
    latin: 'pāx, pācis, f.',
    english: 'peace'
  },
  {
    hide: false,
    latin: 'pēs, pedis, m.',
    english: 'foot'
  },
  {
    hide: false,
    latin: 'pōnō, pōnere, posuī, positus',
    english: 'to put, place'
  },
  {
    hide: false,
    latin: 'quamquam',
    english: 'although'
  },
  {
    hide: false,
    latin: 'quia',
    english: 'because'
  },
  {
    hide: false,
    latin: 'quid agis?',
    english: 'how are you (doing)?'
  },
  {
    hide: false,
    latin: 'quis, quid',
    hint: 'interrogative pronoun',
    english: 'who, what'
  },
  {
    hide: false,
    latin: 'quod',
    hint: 'conjunction',
    english: 'because, since'
  },
  {
    hide: false,
    latin: 'quī, quae, quod',
    hint: 'interrogative adjective',
    english: 'which ___? what ___?'
  },
  {
    hide: false,
    latin: 'quī, quae, quod',
    hint: 'relative pronoun',
    english: 'who, which, that (functions as a subordinating conjunction)'
  },
  {
    hide: true,
    latin: 'rapiō, rapere, rapuī, raptus',
    english: 'to seize, snatch, carry off'
  },
  {
    hide: false,
    latin: 'ratiō, ratiōnis, f.',
    english: 'reason, judgment; method'
  },
  {
    hide: false,
    latin: 'regō, regere, rēxī, rēctus',
    english: 'to rule'
  },
  {
    hide: false,
    latin: 'relinquō, relinqere, relīquī, relictus',
    english: 'to leave, abandon'
  },
  {
    hide: false,
    latin: 'reliquus, reliqua, reliquum',
    english: 'remaining, rest (of)'
  },
  {
    hide: false,
    latin: 'respondeō, respondēre, respondī, respōnsus',
    english: 'to answer, reply; correspond to'
  },
  {
    hide: false,
    latin: 'rosa, rosae, f.',
    english: 'rose'
  },
  {
    hide: false,
    latin: 'rēgnum, rēgnī, n.',
    english: 'kingdom, royal power'
  },
  {
    hide: false,
    latin: 'rēgīna, rēgīnae, f.',
    english: 'queen'
  },
  {
    hide: false,
    latin: 'rēs pūblica, reī pūblicae, f.',
    english: 'state, republic'
  },
  {
    hide: false,
    latin: 'rēs, reī, f.',
    english: 'thing, matter, business; court case'
  },
  {
    hide: false,
    latin: 'rēx, rēgis, m.',
    english: 'king'
  },
  {
    hide: false,
    latin: 'rīdeō, rīdēre, rīsī, rīsus',
    english: 'to laugh, laugh at'
  },
  {
    hide: false,
    latin: 'Rōma, Rōmae, f.',
    english: 'Rome'
  },
  {
    hide: false,
    latin: 'Rōmulus, Rōmulī, m.',
    english: 'Romulus (legendary founder of Rome)'
  },
  {
    hide: false,
    latin: 'Rōmānus, Rōmānī, Rōmānum',
    english: 'Roman'
  },
  {
    hide: false,
    latin: 'Rōmānī, Rōmānōrum, m. pl.',
    english: 'the Romans'
  },
  {
    hide: false,
    latin: 'rūs, rūris, n.',
    english: 'the country(side)'
  },
  {
    hide: false,
    latin: 'sacer, sacra, sacrum',
    english: 'sacred'
  },
  {
    hide: false,
    latin: 'saepe',
    english: 'often'
  },
  {
    hide: false,
    latin: 'sapientia, sapientiae, f.',
    english: 'wisdom'
  },
  {
    hide: false,
    latin: 'sapiēns, sapientis',
    english: 'wise, sensible'
  },
  {
    hide: false,
    latin: 'saxum, saxī, n.',
    english: 'rock, stone; cliff'
  },
  {
    hide: false,
    latin: 'scelus, sceleris, n.',
    english: 'crime, wicked deed, wickedness'
  },
  {
    hide: false,
    latin: 'sciō, scīre, scīvī, scītus',
    english: 'to know; know how to (+ inf.)'
  },
  {
    hide: false,
    latin: 'scrībō, scrībere, scrīpsī, scrīptus',
    english: 'to write'
  },
  {
    hide: false,
    latin: 'secundus, secunda, secundum',
    english: 'second; favorable'
  },
  {
    hide: false,
    latin: 'sed',
    english: 'but'
  },
  {
    hide: false,
    latin: 'sedeō, sedēre, sēdī, sessūrus',
    english: 'to sit'
  },
  {
    hide: false,
    latin: 'semper',
    english: 'always'
  },
  {
    hide: false,
    latin: 'senex, senis, m.',
    english: 'old man'
  },
  {
    hide: false,
    latin: 'sentiō, sentīre, sēnsī, sēnsus',
    english: 'to feel, perceive'
  },
  {
    hide: false,
    latin: 'senātus, senātūs, m.',
    english: 'senate'
  },
  {
    hide: true,
    latin: 'serviō, servīre, servīvī or serviī, servītūrus (+ dat.)',
    english: 'to serve'
  },
  {
    hide: true,
    latin: 'servus, servī, m.',
    english: 'slave, servant'
  },
  {
    hide: false,
    latin: 'signum, signī, n.',
    english: 'sign, token, signal; (military) standard'
  },
  {
    hide: false,
    latin: 'silva, silvae, f.',
    english: 'forest, wood'
  },
  {
    hide: false,
    latin: 'similis, simile',
    english: 'similar (to), like'
  },
  {
    hide: false,
    latin: 'sine (+ abl.)',
    english: 'without'
  },
  {
    hide: false,
    latin: 'sinō, sinere, sīvī, sītus',
    english: 'to allow, permit'
  },
  {
    hide: false,
    latin: 'soleō, solēre, solitus sum',
    english: 'to be accustomed'
  },
  {
    hide: false,
    latin: 'spectō, spectāre, spectāvī, spectātus',
    english: 'to watch, look at'
  },
  {
    hide: false,
    latin: 'spērō, spērāre, spērāvī, spērātus',
    english: 'to hope, hope for (+ acc. and future inf.)'
  },
  {
    hide: false,
    latin: 'spēs, speī, f.',
    english: 'hope'
  },
  {
    hide: false,
    latin: 'stō, stāre, stetī, statūrus',
    english: 'to stand'
  },
  {
    hide: false,
    latin: 'sub (+ abl.)',
    english: 'under, beneath'
  },
  {
    hide: false,
    latin: 'sub (+acc.)',
    english: 'to the foot/base of, along under (implying motion)'
  },
  {
    hide: false,
    latin: 'subitō',
    english: 'suddenly'
  },
  {
    hide: false,
    latin: 'sum, esse, fuī, futūrus',
    english: 'to be, exist'
  },
  {
    hide: false,
    latin: 'super (+ acc.)',
    english: 'over, above, on (top of)'
  },
  {
    hide: false,
    latin: 'superus, supera, superum',
    english: 'upper, higher, above'
  },
  {
    hide: false,
    latin: 'superī, superōrum, m. pl.',
    english: 'gods'
  },
  {
    hide: false,
    latin: 'superō, superāre, superāvī, superātus',
    english: 'to overcome, conquer, surpass'
  },
  {
    hide: false,
    latin: 'surgō, surgere, surrēxī, surrēctus',
    english: 'to get up, (a)rise'
  },
  {
    hide: false,
    latin: 'suus, sua, suum',
    english: 'his, her, its, their own'
  },
  {
    hide: false,
    latin: 'sī',
    english: 'if'
  },
  {
    hide: false,
    latin: 'sīc',
    english: 'thus, so'
  },
  {
    hide: false,
    latin: 'sōlus, sōla, sōlum (gen. -īus)',
    english: 'alone, only'
  },
  {
    hide: false,
    latin: 'taceō, tacēre, tacuī, tacitūrus',
    english: 'to be silent'
  },
  {
    hide: false,
    latin: 'tam',
    english: 'so, to such a degree'
  },
  {
    hide: false,
    latin: 'tamen',
    english: 'however, nevertheless, yet'
  },
  {
    hide: false,
    latin: 'tandem',
    english: 'finally'
  },
  {
    hide: false,
    latin: 'tantum',
    hint: 'adv. not the adj. tantus, tanta, tantum',
    english: 'only'
  },
  {
    hide: false,
    latin: 'tantus tanta tantum',
    english: 'so much, so great'
  },
  {
    hide: false,
    latin: 'templum, templī, n.',
    english: 'temple, shrine'
  },
  {
    hide: false,
    latin: 'temptō, temptāre, temptāvī, temptātus',
    english: 'to try, attempt; test, prove'
  },
  {
    hide: false,
    latin: 'tempus, temporis, n.',
    english: 'time, period of time (e.g. a season); opportunity'
  },
  {
    hide: false,
    latin: 'teneo, tenēre, tenuī, tentus',
    english: 'to hold, posses, keep; restrain'
  },
  {
    hide: false,
    latin: 'terra, terrae, f.',
    english: 'land, earth, soil; country'
  },
  {
    hide: false,
    latin: 'terreō, terrēre, terruī, territus',
    english: 'to terrify, scare'
  },
  {
    hide: false,
    latin: 'timeō, timēre, timuī, —',
    english: 'to fear, be afraid (of)'
  },
  {
    hide: false,
    latin: 'timor, timōris, m.',
    english: 'fear, terror'
  },
  {
    hide: false,
    latin: 'tot',
    english: 'so many, as many'
  },
  {
    hide: false,
    latin: 'trahō, trahere, trāxī, tractus',
    english: 'to drag, pull; derive'
  },
  {
    hide: false,
    latin: 'tristis, triste',
    english: 'sad; gloomy'
  },
  {
    hide: false,
    latin: 'trādō, trādere, trādidī, trāditus',
    english: 'to hand over, surrender; hand down, report'
  },
  {
    hide: true,
    latin: 'trāns (+ acc.)',
    english: 'across, beyond'
  },
  {
    hide: false,
    latin: 'Trōia, Trōiae, f.',
    english: 'Troy'
  },
  {
    hide: false,
    latin: 'tum',
    english: 'then, at that time; next'
  },
  {
    hide: false,
    latin: 'tunc',
    english: 'then'
  },
  {
    hide: false,
    latin: 'turba, turbae, f.',
    english: 'crowd'
  },
  {
    hide: false,
    latin: 'tuus, tua, tuum',
    english: 'your, yours, your own (sg.)'
  },
  {
    hide: false,
    latin: 'tālis, tāle',
    english: 'such, of such a kind'
  },
  {
    hide: false,
    latin: 'tōtus, tōta, tōtum (gen. -īus)',
    english: 'whole, entire'
  },
  {
    hide: false,
    latin: 'tū, vōs',
    english: 'you (sg.), you (pl.)'
  },
  {
    hide: false,
    latin: 'ubi',
    english: 'when; where'
  },
  {
    hide: false,
    latin: 'unda, undae, f.',
    english: 'wave, waters; sea'
  },
  {
    hide: false,
    latin: 'urbs, urbis, f. (i-stem)',
    english: 'city'
  },
  {
    hide: false,
    latin: 'uter, utra, utrum (gen. -īus)',
    english: 'which? (of two)'
  },
  {
    hide: false,
    latin: 'uterque, utraque, utrumque',
    english: 'both, each (of two)'
  },
  {
    hide: false,
    latin: 'uxor, uxōris, f.',
    english: 'wife'
  },
  {
    hide: false,
    latin: 'valeō, valēre, valuī, valitūrus',
    english: 'to be well, healthy; to be strong'
  },
  {
    hide: false,
    latin: 'valē (sg.), valēte (pl.)',
    english: 'goodbye, farewell'
  },
  {
    hide: true,
    latin: 'veniō, venīre, vēnī, ventūrus',
    english: 'to come'
  },
  {
    hide: false,
    latin: 'ventus, ventī, m.',
    english: 'wind, breeze'
  },
  {
    hide: false,
    latin: 'verbum, verbī, n.',
    english: 'word'
  },
  {
    hide: false,
    latin: 'vertō, vertere, vertī, versus',
    english: 'to turn, turn around; destroy, change'
  },
  {
    hide: false,
    latin: 'vester, vestra, vestrum',
    english: 'your, yours (pl.)'
  },
  {
    hide: false,
    latin: 'vetō, vetāre, vetuī, vetitus',
    english: 'to forbid; order ... not'
  },
  {
    hide: false,
    latin: 'via, viae, f.',
    english: 'road; way'
  },
  {
    hide: false,
    latin: 'videor, vidērī, vīsus sum',
    english: 'to seem; be seen; seem best to'
  },
  {
    hide: false,
    latin: 'videō, vidēre, vīdī, vīsus',
    english: 'to see'
  },
  {
    hide: false,
    latin: 'vincō, vincere, vīcī, victus',
    english: 'to conquer; win'
  },
  {
    hide: false,
    latin: 'vir, virī, m.',
    english: 'man; occasionally husband'
  },
  {
    hide: false,
    latin: 'virtūs, virtūtis, f.',
    english: 'courage, excellence, virtue'
  },
  {
    hide: false,
    latin: 'vocō, vocāre, vocāvī, vocātus',
    english: 'to call, summon'
  },
  {
    hide: false,
    latin: 'volvō, volvere, volvī, volūtus',
    english: 'to roll, turn/twist around'
  },
  {
    hide: false,
    latin: 'volō, velle, voluī, —',
    english: 'to wish, want, be willing'
  },
  {
    hide: false,
    latin: 'vulnerō, vulnerāre, vulnerāvī, vulnerātus',
    english: 'to wound'
  },
  {
    hide: false,
    latin: 'vulnus, vulneris, n.',
    english: 'wound'
  },
  {
    hide: false,
    latin: 'vultus, vultūs, m.',
    english: 'expression; face'
  },
  {
    hide: false,
    latin: 'vēritās, vēritātis, f.',
    english: 'truth'
  },
  {
    hide: false,
    latin: 'vērō (postpositive)',
    english: 'in fact, truly, indeed'
  },
  {
    hide: false,
    latin: 'vīnum, vīnī, n.',
    english: 'wine'
  },
  {
    hide: false,
    latin: 'vīta, vītae, f.',
    english: 'life'
  },
  {
    hide: false,
    latin: 'vītō, vītāre, vītāvī, vītātus',
    english: 'to avoid'
  },
  {
    hide: false,
    latin: 'vīvō, vīvere, vīxī, —',
    english: 'to live, be alive'
  },
  {
    hide: false,
    latin: 'vōx, vōcis, f.',
    english: 'voice'
  },
  {
    hide: false,
    latin: 'ā, ab (+ abl.)',
    english: 'away from'
  },
  {
    hide: false,
    latin: 'ā, ab (+ animate noun, in a passive sentence)',
    english: 'by'
  },
  {
    hide: false,
    latin: 'ācer, ācris, ācre',
    english: 'sharp, fierce; eager'
  },
  {
    hide: false,
    latin: 'āmittō, āmittere, āmīsī, āmissus',
    english: 'to lose'
  },
  {
    hide: false,
    latin: 'ē, ex (+ abl.)',
    english: 'out of, from'
  },
  {
    hide: false,
    latin: 'īdem, eadem, idem',
    english: 'the same'
  },
  {
    hide: false,
    latin: 'īra, īrae, f.',
    english: 'anger'
  },
  {
    hide: false,
    latin: 'īrātus, īrāta, īrātum',
    english: 'angry'
  },
  {
    hide: false,
    latin: 'Ītalia, Ītaliae, f.',
    english: 'Italy'
  },
  {
    hide: false,
    latin: 'ōlim',
    english: 'once (upon a time); one day (in the future)'
  },
  {
    hide: false,
    latin: 'ōrō, ōrāre, ōrāvi, ōrātus',
    english:
      'to pray, beg (for) (often with two accusatives: one of the person, the other of the thing)'
  },
  {
    hide: false,
    latin: 'ūllus, ūlla, ūllum (gen. -īus)',
    english: 'any'
  },
  {
    hide: false,
    latin: 'ūnus, ūna, ūnum (gen. -īus)',
    english: 'one'
  },
  {
    hide: false,
    latin: '—, suī, sibi, sē, sē',
    english: 'himself, herself, itself, (pl). themselves'
  }
]
const ONE_MINUTE = 60 * 1000
const TIMEOUT = 0.5 * ONE_MINUTE
const oldDate = new Date('2021-08-04').toISOString()

const processedVocab = vocab.map(term => ({
  ...term,
  difficulty: 5,
  updatedAt: oldDate
}))

const comparison = (a, b) => {
  if (a.difficulty < b.difficulty) return 1
  if (a.difficulty > b.difficulty) return -1
  return 0
}

class VocabList {
  _vocabList = this.loadVocab()
  _vocab

  constructor () {
    const sortVocab = function () {
      this._vocabList.sort(comparison)
    }
    setInterval(sortVocab.bind(this), TIMEOUT)
  }

  nextVocab () {
    this._vocab = undefined
    const currentDate = new Date()
    // TODO: Make hiding shifty words more dynamic
    while (
      !this._vocab ||
      this._vocab.hide ||
      currentDate - new Date(this._vocab.updatedAt) <
        (11 - this._vocab.difficulty) * TIMEOUT
    ) {
      this._vocab = this._vocabList.shift()
      this._vocabList.push(this._vocab)
    }
    this._vocab.updatedAt = new Date().toISOString()
    this.saveVocab()
    console.log('new vocab', this._vocab)
    return this._vocab
  }

  loadVocab () {
    const loadedList = localStorage.getItem('_vocabList9')
    const vocabList = loadedList ? JSON.parse(loadedList) : processedVocab
    for (const vocabPair of vocabList) {
      const processedVocabPair = processedVocab.find(
        pair =>
          pair.latin === vocabPair.latin && vocabPair.english === pair.english
      )
      if (processedVocabPair) {
        vocabPair.hint = processedVocabPair.hint
        if (processedVocabPair.hint) {
          console.log('found pair', processedVocabPair)
        }
      } else {
        console.log('Couldn\'t update:', vocabPair)
      }
    }
    vocabList.sort((a, b) => {
      if (a.difficulty < b.difficulty) return 1
      if (a.difficulty > b.difficulty) return -1
      return 0
    })
    console.log('loaded vocab', vocabList)
    return vocabList
  }

  saveVocab () {
    localStorage.setItem('_vocabList9', JSON.stringify(this._vocabList))
  }

  markEasy () {
    this._vocab.difficulty = Math.max(0, this._vocab.difficulty - 1)
    console.log('increasing difficulty', this._vocab)
    this.saveVocab()
    console.log(
      this._vocabList.filter(
        term => term && term.difficulty === this._vocab.difficulty
      )
    )
  }

  markHard () {
    this._vocab.difficulty = Math.min(10, this._vocab.difficulty + 2)
    console.log('increasing difficulty', this._vocab)
    this.saveVocab()
    console.log(
      this._vocabList.filter(
        term => term && term.difficulty === this._vocab.difficulty
      )
    )
  }
}

const theVocabList = new VocabList()
export default theVocabList
