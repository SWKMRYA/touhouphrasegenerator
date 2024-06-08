const characters = [
    {name: 'Reimu Hakurei', img: 'char/reimu.png'},
    //{name: 'Kana Anaberal', img: 'char/kana_anaberal.png'}, (testing character)
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
    {name: 'Reisen U. Inaba', img: 'char/reisen.png'},
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
    {name: 'Kyouko Kasodani', img: 'char/kyouko.png'},
    {name: 'Yoshika Miyako', img: 'char/yoshika.png'},
    {name: 'Soga no Tojiko', img: 'char/tojiko.png'},
    {name: 'Mononobe no Futo', img: 'char/futo.png'},
    {name: 'Toyosatomimi no Miko', img: 'char/miko.png'},
    {name: 'Mamizou Futatsuiwa', img: 'char/mamizou.png'},
    {name: 'Wakasagihime', img: 'char/fish.png'},
    {name: 'Sekibanki', img: 'char/sekibanki.png'},
    {name: 'Kagerou Imaizumi', img: 'char/kagerou.png'},
    {name: 'Benben Tsukumo', img: 'char/benben.png'},
    {name: 'Yatsuhashi Tsukumo', img: 'char/yatsuhashi.png'},
    {name: 'Seija Kijin', img: 'char/seija.png'},
    {name: 'Shinmyoumaru Sukuna', img: 'char/shinmy.png'},
    {name: 'Sumireko Usami', img: 'char/sumireko.png'},
    {name: 'Nue Houjuu', img: 'char/nue.png'},
    {name: 'Seiran', img: 'char/seiran.png'},
    {name: 'Ringo', img: 'char/ringo.png'},
    {name: 'Doremy Sweet', img: 'char/buh.png'},
    {name: 'Sagume Kishin', img: 'char/sagume.png'},
    {name: 'Clownpiece', img: 'char/clownpiece.png'},
    {name: 'Junko', img: 'char/junko.png'},
    {name: 'Hecatia Lapizlazuli', img: 'char/hecatia.png'},
    {name: 'Jo\'on Yorigami', img: 'char/joon.png'},
    {name: 'Shion Yorigami', img: 'char/shion.png'},
    {name: 'Eternity Larva', img: 'char/larva.png'},
    {name: 'Nemuno Sakata', img: 'char/nemuno.png'},
    {name: 'Aunn Komano', img: 'char/aunn.png'},
    {name: 'Narumi Yatadera', img: 'char/narumi.png'},
    {name: 'Mai Teireida', img: 'char/mai.png'},
    {name: 'Satono Nishida', img: 'char/satono.png'},
    {name: 'Okina Matara', img: 'char/okina.png'},
    {name: 'Eika Ebisu', img: 'char/eika.png'},
    {name: 'Urumi Ushizaki', img: 'char/urumi.png'},
    {name: 'Kutaka Niwatari', img: 'char/kutaka.png'},
    {name: 'Yachie Kicchou', img: 'char/yachie.png'},
    {name: 'Mayumi Joutouguu', img: 'char/mayumi.png'},
    {name: 'Keiki Haniyasushin', img: 'char/keiki.png'},
    {name: 'Saki Kurokoma', img: 'char/saki.png'},
    {name: 'Yuuma Toutetsu', img: 'char/yuuma.png'},
    {name: 'Mike Goutokuji', img: 'char/mike.png'},
    {name: 'Takane Yamashiro', img: 'char/takane.png'},
    {name: 'Sannyo Komakusa', img: 'char/sannyo.png'},
    {name: 'Misumaru Tamatsukuri', img: 'char/misumaru.png'},
    {name: 'Tsukasa Kudamaki', img: 'char/tsukasa.png'},
    {name: 'Megumu Iizunaramaru', img: 'char/megumu.png'},
    {name: 'Chimata Tenkyuu', img: 'char/chimata.png'},
    {name: 'Momoyo Himemushi', img: 'char/momoyo.png'},
    {name: 'Son Biten', img: 'char/biten.png'},
    {name: 'Enoko Mitsugashira', img: 'char/enoko.png'},
    {name: 'Chiyari Tenkajin', img: 'char/chiyari.png'},
    {name: 'Hisami Yomotsu', img: 'char/hisami.png'},
    {name: 'Zanmu Nippaku', img: 'char/zanmu.png'},
    {name: 'Maribel Hearn', img: 'char/merry.png'},
    {name: 'Renko Usami', img: 'char/renko.png'},
    {name: 'Rinnosuke Morichika', img: 'char/kourin.png'},
    {name: 'Tokiko', img: 'char/tokiko.png'},
    {name: 'Luna Child', img: 'char/luna.png'},
    {name: 'Star Sapphire', img: 'char/star.png'},
    {name: 'Sunny Milk', img: 'char/sunny.png'},
    {name: 'Rei\'sen', img: 'char/reisen2.png'},
    {name: 'Watatsuki no Yorihime', img: 'char/yorihime.png'},
    {name: 'Watatsuki no Toyohime', img: 'char/toyohime.png'},
    {name: 'Kasen Ibaraki', img: 'char/kasen.png'},
    {name: 'Hieda no Akyuu', img: 'char/akyuu.png'},
    {name: 'Kosuzu Motoori', img: 'char/kosuzu.png'},
    //{name: 'Fortune Teller', img: 'char/dead.png'},
    {name: 'Mizuchi Miyadeguchi', img: 'char/mizuchi.png'},
    {name: 'Goku', img: 'char/goku.png'}, //test character but i'm keeping him in because it's funny
    // { name: 'Diavolo', img: 'diavolo.png' },
];

const actions = [
    'is holding hands with', 'is making out with', 'is fighting against', 'is teaming up with', 'is having a friendly conversion with', 'is cooking with', 'is having a tryst with', 'is fishing with', 'is having a whimsical time with', 'is making self-insert fanfiction about','\'s liver got stolen by', 'is making a tasty cup of tea for', 'is playing Crash Team Racing with', 'is making a videogame starring', 'sends a love letter to', 'commits arson with', 'stops a drug dealing crime organization in Italy with', 'watches Morbius with', 'makes a lets play series with', 'courts', 'is cooking methamphetamine with', 'is having a fight to the death with', 'is having a romantic dinner date with', 'is resting their weary head on the lap of', 'fucks up the cobblestone generator and gets lectured by', 'cooks a delicious homemade meal for', 'steals money from', 'gets told they\'re stinky and to take a shower by', 'gets invited to a sleepover by', 'gambles and loses all their money despite the warnings of', 'is having an unforgettable luncheon with', 'gets their house "accidentally" set on fire by', 'explodes the Scarlet Devil Mansion with', 'caused an incident with', 'tries to summon a demon but ends up summoning', 'gets jumpscared by', '\' minecraft base gets griefed by', 'falls asleep and gets pranked by', 'causes an incident with', 'makes a minor spelling error while arguing with', 'spreads positivity to', 'makes a touhou lore video about', 'makes a goober art of', 'makes a documentary video titled "The Rise and Fall of', 'spends 10 years in the joint with'
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

genphrase();




function blakeMode() {
    console.log("yw blake");

    const blakeskuy = [
        {name: 'Sakuya Izayoi', img: 'char/gooberskuy.png'},
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
