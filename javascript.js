const characters = [
    {name: 'Kana Anaberal', img: 'char/kana_anaberal.png'},
    {name: 'Reimu Hakurei', img: 'char/reimu.png'},
    {name: 'Marisa Kirisame', img: 'char/marisa.png'},
    {name: 'Rumia', img: 'char/rumia.png'},
    {name: 'Daiyousei', img: 'char/daiyousei.png'},
    {name: 'Cirno', img: 'char/cirno.png'},
    {name: 'Hong Meiling', img: 'char/meiling.png'},
    {name: 'Koakuma', img: 'char/koakuma.png'},
    {name: 'Patchouli Knowledge', img: 'char/patchouli.png'},
    {name: 'Sakuya Izayoi', img: 'char/sakuya.png'},
    {name: 'Remilia Scarlet', img: 'char/remilia.png'},
    {name: 'Flandre Scarlet', img: 'char/flandre.png'},
    {name: 'Letty Whiterock', img: 'char/letty.png'},
    {name: 'Chen', img: 'char/chen.png'},
    {name: 'Alice Margatroid', img: 'char/alice.png'},
    {name: 'Lily White', img: 'char/lilyw.png'},
    {name: 'Lily Black', img: 'char/lilyb.png'},
    {name: 'Lunasa Prismriver', img: 'char/lunasa.png'},
    {name: 'Merlin Prismriver', img: 'char/merlin.png'},
    {name: 'Lyrica Prismriver', img: 'char/lyrica.png'},
    {name: 'Youmu Konpaku', img: 'char/youmu.png'},
    {name: 'Yuyuko Saigyouji', img: 'char/yuyuko.png'},
    {name: 'Ran Yakumo', img: 'char/ran.png'},
    {name: 'Yukari Yakumo', img: 'char/yukari.png'},
    {name: 'Suika Ibuki', img: 'char/suika.png'},
    {name: 'Wriggle Nightbug', img: 'char/wriggle.png'},
    {name: 'Mystia Lorelei', img: 'char/mystia.png'},
    {name: 'Keine Kamishirasawa', img: 'char/keine.png'},
    {name: 'Tewi Inaba', img: 'char/tewi.png'},
    {name: 'Reisen U. Inaba', img: 'char/udonge.png'},
    {name: 'Eirin Yagokoro', img: 'char/eirin.png'},
    {name: 'Kaguya Houraisan', img: 'char/kaguya.png'},
    {name: 'Fujiwara no Mokou', img: 'char/mokou.png'},
    {name: 'Aya Shameimaru', img: 'char/aya.png'},
    {name: 'Medicine Melancholy', img: 'char/medicine.png'},
    {name: 'Yuuka Kazami', img: 'char/yuuka.png'},
    {name: 'Komachi Onozuka', img: 'char/komachi.png'},
    {name: 'Eiki Shiki', img: 'char/eiki.png'},
    {name: 'Shizuha Aki', img: 'char/shizuha.png'},
    {name: 'Minoriko Aki', img: 'char/minoriko.png'},
    {name: 'Hina Kagiyama', img: 'char/hina.png'},
    {name: 'Nitori Kawashiro', img: 'char/nitori.png'},
    {name: 'Momiji Inubashiri', img: 'char/momiji.png'},
    {name: 'Sanae Kochiya', img: 'char/sanae.png'},
    {name: 'Kanako Yasaka', img: 'char/wife.png'},
    {name: 'Suwako Moriya', img: 'char/suwako.png'},
    {name: 'Iku Nagae', img: 'char/iku.png'},
    {name: 'Tenshi Hinanawi', img: 'char/tenshi.png'},
    {name: 'Kisume', img: 'char/kisume.png'},
    {name: 'Yamame Kurodani', img: 'char/yamame.png'},
    {name: 'Parsee Mizuhashi', img: 'char/parsee.png'},
    {name: 'Yuugi Hoshiguma', img: 'char/yuugi.png'},
    {name: 'Satori Komeiji', img: 'char/satori.png'},
    {name: 'Rin Kaenbyou', img: 'char/orin.png'},
    {name: 'Utsuho Reiuji', img: 'char/okuu.png'},
    {name: 'Koishi Komeiji', img: 'char/koishi.png'},
    {name: 'Nazrin', img: 'char/nazrin.png'},
    {name: 'Kogasa Tatara', img: 'char/kogasa.png'},
    {name: 'Ichirin Kumoi', img: 'char/ichirin.png'},
    {name: 'Unzan', img: 'char/unzan.png'},
    {name: 'Minamatsu Murasa', img: 'char/murasa.png'},
    {name: 'Shou Toramaru', img: 'char/shou.png'},
    {name: 'Byakuren Hijiri', img: 'char/byakuren.png'},
    {name: 'Nue Houjuu', img: 'char/nue.png'},
    {name: 'Goku', img: 'char/goku.png'},
    // { name: 'Diavolo', img: 'diavolo.png' },
];

const actions = [
    'is holding hands with', 'is making out with', 'is fighting against', 'is teaming up with', 'is having a friendly conversion with', 'is cooking with', 'is having a tryst with', 'is fishing with', 'is having a whimsical time with', 'is making self-insert fanfiction about','\'s liver got stolen by', 'is making a tasty cup of tea for', 'is playing Crash Team Racing with', 'is making a videogame starring', 'sends a love letter to', 'commits arson with', 'stops a drug dealing crime organization in Italy with', 'watches Morbius with', 'makes a lets play series with', 'courts', 'is cooking methamphetamine with', 'beats Duelo Maestro with', 'is having a fight to the death with', 'is having a romantic dinner date with', 'is resting their weary head on the lap of', 'fucks up the cobblestone generator and gets lectured by', 'cooks a delicious homemade meal for', 'steals money from', 'gets told they\'re stinky and to take a shower by', 'gets invited to a sleepover by', 'gambles and loses all their money despite the warnings of', 'is having an unforgettable luncheon with', 'gets their house "accidentally" set on fire by', 'explodes the Scarlet Devil Mansion with'
];

document.getElementById('generateButton').addEventListener('click', genphrase);
document.getElementById('imageSwitch').addEventListener('change', toggleDisplayMode);

function genphrase() {
    const character1 = characters[Math.floor(Math.random() * characters.length)];
    const character2 = characters[Math.floor(Math.random() * characters.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];

    if (character1 !== character2) {
        document.getElementById('image1').src = character1.img;
        document.getElementById('image1').alt = character1.name;
        document.getElementById('text1').textContent = character1.name;

        document.getElementById('image2').src = character2.img;
        document.getElementById('image2').alt = character2.name;
        document.getElementById('text2').textContent = character2.name;

        document.getElementById('actiontext').textContent = action;

        updateDisplayMode();
    } else {
        genphrase();
    }
}

function toggleDisplayMode() {
    updateDisplayMode();
}

function updateDisplayMode() {
    const displayImages = document.getElementById('imageSwitch').checked;
    const images = document.querySelectorAll('.character-image');
    const texts = document.querySelectorAll('.character-text');

    images.forEach(image => image.style.display = displayImages ? 'block' : 'none');
    texts.forEach(text => text.style.display = displayImages ? 'none' : 'block');
}

// Initial call to display the first phrase
genphrase();




function blakeMode() {
    console.log("you're welcome blakey-boo ;)");

    const blakeskuy = [
        {name: 'Sakuya Izayoi', img: 'char/sakuya.png'},
        { name: 'Blake', img: 'char/blake.png'}
    ];

    function generateBlakePhrase() {
        const character1 = blakeskuy[Math.floor(Math.random() * blakeskuy.length)];
        const character2 = blakeskuy[Math.floor(Math.random() * blakeskuy.length)];
        const action = actions[Math.floor(Math.random() * actions.length)];

        if (character1 !== character2) {
            document.getElementById('image1').src = character1.img;
            document.getElementById('image1').alt = character1.name;
            document.getElementById('text1').textContent = character1.name;

            document.getElementById('image2').src = character2.img;
            document.getElementById('image2').alt = character2.name;
            document.getElementById('text2').textContent = character2.name;

            document.getElementById('actiontext').textContent = action;

            updateDisplayMode();
        } else {
            generateBlakePhrase();
        }
    }

    document.getElementById('generateButton').removeEventListener('click', genphrase);
    document.getElementById('generateButton').addEventListener('click', generateBlakePhrase);

    generateBlakePhrase();
}
